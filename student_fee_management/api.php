<?php
header('Content-Type: application/json');
require_once 'db.php';
session_start();

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'Unauthorized access']);
    exit;
}

$action = $_GET['action'] ?? '';

try {
    switch ($action) {
        case 'get_students':
            $stmt = $pdo->query("SELECT * FROM students ORDER BY id DESC");
            $students = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($students);
            break;

        case 'add_student':
            $data = json_decode(file_get_contents('php://input'), true);
            
            $stmt = $pdo->prepare("INSERT INTO students 
                (first_name, last_name, class, fee_amount, paid_amount, due_date, status) 
                VALUES (?, ?, ?, ?, ?, ?, ?)");
            
            $stmt->execute([
                $data['first_name'],
                $data['last_name'],
                $data['class'],
                $data['fee_amount'],
                $data['paid_amount'],
                $data['due_date'],
                $data['status']
            ]);
            
            echo json_encode(['status' => 'success', 'id' => $pdo->lastInsertId()]);
            break;

        case 'update_student':
            $data = json_decode(file_get_contents('php://input'), true);
            
            $stmt = $pdo->prepare("UPDATE students SET 
                first_name = ?, 
                last_name = ?, 
                class = ?, 
                fee_amount = ?, 
                paid_amount = ?, 
                due_date = ?, 
                status = ? 
                WHERE id = ?");
            
            $stmt->execute([
                $data['first_name'],
                $data['last_name'],
                $data['class'],
                $data['fee_amount'],
                $data['paid_amount'],
                $data['due_date'],
                $data['status'],
                $data['id']
            ]);
            
            echo json_encode(['status' => 'success']);
            break;

        case 'delete_student':
            $id = $_GET['id'];
            $stmt = $pdo->prepare("DELETE FROM students WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(['status' => 'success']);
            break;

        case 'record_payment':
            $data = json_decode(file_get_contents('php://input'), true);
            
            // Start transaction
            $pdo->beginTransaction();
            
            try {
                // Insert payment record
                $stmt = $pdo->prepare("INSERT INTO payments 
                    (student_id, amount, payment_date) 
                    VALUES (?, ?, ?)");
                $stmt->execute([
                    $data['id'],
                    $data['payment_amount'],
                    $data['payment_date']
                ]);
                
                // Update student's paid amount and status
                $student = $pdo->query("SELECT fee_amount, paid_amount FROM students WHERE id = " . $data['id'])->fetch();
                $newPaidAmount = $student['paid_amount'] + $data['payment_amount'];
                
                if ($newPaidAmount >= $student['fee_amount']) {
                    $status = 'paid';
                } elseif ($newPaidAmount > 0) {
                    $status = 'partial';
                } else {
                    $status = 'unpaid';
                }
                
                $stmt = $pdo->prepare("UPDATE students SET 
                    paid_amount = ?, 
                    status = ? 
                    WHERE id = ?");
                $stmt->execute([
                    $newPaidAmount,
                    $status,
                    $data['id']
                ]);
                
                $pdo->commit();
                echo json_encode(['status' => 'success']);
            } catch (Exception $e) {
                $pdo->rollBack();
                throw $e;
            }
            break;

        default:
            echo json_encode(['status' => 'error', 'message' => 'Invalid action']);
    }
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>