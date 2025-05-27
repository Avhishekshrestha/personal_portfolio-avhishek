<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Fee Management System</title>
    <style>
        /* Original CSS from index.html remains unchanged */
        :root {
            --primary-color: #3498db;
            --secondary-color: #2980b9;
            --success-color: #2ecc71;
            --danger-color: #e74c3c;
            --warning-color: #f39c12;
            --light-color: #ecf0f1;
            --dark-color: #34495e;
            --white: #fff;
            --gray: #95a5a6;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f5f7fa;
            color: var(--dark-color);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            background-color: var(--primary-color);
            color: var(--white);
            padding: 20px 0;
            margin-bottom: 30px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        header h1 {
            text-align: center;
            font-size: 2.5rem;
        }

        .dashboard {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 20px;
        }

        .sidebar {
            background-color: var(--white);
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .sidebar h2 {
            color: var(--primary-color);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--light-color);
        }

        .nav-menu {
            list-style: none;
        }

        .nav-menu li {
            margin-bottom: 10px;
        }

        .nav-menu a {
            display: block;
            padding: 10px 15px;
            color: var(--dark-color);
            text-decoration: none;
            border-radius: 5px;
            transition: all 0.3s ease;
        }

        .nav-menu a:hover, .nav-menu a.active {
            background-color: var(--primary-color);
            color: var(--white);
        }

        .main-content {
            background-color: var(--white);
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .section-title {
            color: var(--primary-color);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--light-color);
        }

        .action-bar {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .btn-primary {
            background-color: var(--primary-color);
            color: var(--white);
        }

        .btn-primary:hover {
            background-color: var(--secondary-color);
        }

        .btn-success {
            background-color: var(--success-color);
            color: var(--white);
        }

        .btn-success:hover {
            background-color: #27ae60;
        }

        .btn-danger {
            background-color: var(--danger-color);
            color: var(--white);
        }

        .btn-danger:hover {
            background-color: #c0392b;
        }

        .search-box {
            padding: 10px;
            border: 1px solid var(--light-color);
            border-radius: 5px;
            width: 300px;
        }

        .table-container {
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid var(--light-color);
        }

        th {
            background-color: var(--primary-color);
            color: var(--white);
            font-weight: 600;
        }

        tr:hover {
            background-color: rgba(52, 152, 219, 0.1);
        }

        .status-paid {
            background-color: rgba(46, 204, 113, 0.2);
            color: var(--success-color);
            padding: 5px 10px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.8rem;
        }

        .status-unpaid {
            background-color: rgba(231, 76, 60, 0.2);
            color: var(--danger-color);
            padding: 5px 10px;
            border-radius: 20px;
            font-weight: 600;
            font-size: 0.8rem;
        }

        .action-btns {
            display: flex;
            gap: 5px;
        }

        .action-btn {
            padding: 5px 10px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 0.8rem;
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: var(--white);
            padding: 30px;
            border-radius: 5px;
            width: 500px;
            max-width: 90%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--light-color);
        }

        .modal-header h2 {
            color: var(--primary-color);
        }

        .close-btn {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--gray);
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 600;
            color: var(--dark-color);
        }

        .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid var(--light-color);
            border-radius: 5px;
            font-size: 1rem;
        }

        .form-control:focus {
            outline: none;
            border-color: var(--primary-color);
        }

        .form-row {
            display: flex;
            gap: 15px;
        }

        .form-row .form-group {
            flex: 1;
        }

        .modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid var(--light-color);
        }

        .stats-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }

        .stat-card {
            background-color: var(--white);
            border-radius: 5px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .stat-card h3 {
            color: var(--gray);
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .stat-card p {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
        }

        .paid-stat {
            color: var(--success-color) !important;
        }

        .unpaid-stat {
            color: var(--danger-color) !important;
        }

        .class-filter {
            margin-bottom: 20px;
        }

        .class-filter select {
            padding: 10px;
            border: 1px solid var(--light-color);
            border-radius: 5px;
            background-color: var(--white);
        }

        @media (max-width: 992px) {
            .dashboard {
                grid-template-columns: 1fr;
            }

            .stats-cards {
                grid-template-columns: 1fr;
            }

            .action-bar {
                flex-direction: column;
                gap: 10px;
            }

            .search-box {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Student Fee Management System</h1>
            <div style="text-align: right;">
                <span style="color: var(--white);"><?php echo htmlspecialchars($_SESSION['email']); ?></span>
                <a href="logout.php" class="btn btn-danger" style="margin-left: 10px;">Logout</a>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="dashboard">
            <aside class="sidebar">
                <h2>Navigation</h2>
                <ul class="nav-menu">
                    <li><a href="#" class="active">Dashboard</a></li>
                    <li><a href="#">Students</a></li>
                    <li><a href="#">Fee Structure</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </aside>

            <main class="main-content">
                <h2 class="section-title">Student Fee Records</h2>

                <div class="stats-cards">
                    <div class="stat-card">
                        <h3>Total Students</h3>
                        <p id="total-students">0</p>
                    </div>
                    <div class="stat-card">
                        <h3>Paid Fees</h3>
                        <p id="paid-fees" class="paid-stat">0</p>
                    </div>
                    <div class="stat-card">
                        <h3>Unpaid Fees</h3>
                        <p id="unpaid-fees" class="unpaid-stat">0</p>
                    </div>
                </div>

                <div class="action-bar">
                    <div class="class-filter">
                        <select id="class-filter">
                            <option value="all">All Classes</option>
                            <option value="nursery">Nursery</option>
                            <option value="kg">KG</option>
                            <option value="1">Class 1</option>
                            <option value="2">Class 2</option>
                            <option value="3">Class 3</option>
                            <option value="4">Class 4</option>
                            <option value="5">Class 5</option>
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" class="search-box" id="search-box" placeholder="Search students...">
                        <button class="btn btn-primary" id="add-student-btn">Add Student</button>
                    </div>
                </div>

                <div class="table-container">
                    <table id="students-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Fee Amount</th>
                                <th>Paid Amount</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="students-table-body">
                            <!-- Student data will be inserted here by JavaScript -->
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>

    <!-- Add/Edit Student Modal -->
    <div class="modal" id="student-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modal-title">Add New Student</h2>
                <button class="close-btn" id="close-modal">×</button>
            </div>
            <form id="student-form">
                <input type="hidden" id="student-id">
                <div class="form-row">
                    <div class="form-group">
                        <label for="first-name">First Name</label>
                        <input type="text" id="first-name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="last-name">Last Name</label>
                        <input type="text" id="last-name" class="form-control" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="class">Class</label>
                        <select id="class" class="form-control" required>
                            <option value="">Select Class</option>
                            <option value="nursery">Nursery</option>
                            <option value="kg">KG</option>
                            <option value="1">Class 1</option>
                            <option value="2">Class 2</option>
                            <option value="3">Class 3</option>
                            <option value="4">Class 4</option>
                            <option value="5">Class 5</option>
                            <option value="6">Class 6</option>
                            <option value="7">Class 7</option>
                            <option value="8">Class 8</option>
                            <option value="9">Class 9</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="fee-amount">Fee Amount (₹)</label>
                        <input type="number" id="fee-amount" class="form-control" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="paid-amount">Paid Amount (₹)</label>
                        <input type="number" id="paid-amount" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="due-date">Due Date</label>
                        <input type="date" id="due-date" class="form-control" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="status">Payment Status</label>
                    <select id="status" class="form-control" required>
                        <option value="paid">Paid</option>
                        <option value="unpaid">Unpaid</option>
                        <option value="partial">Partial</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id="cancel-btn">Cancel</button>
                    <button type="submit" class="btn btn-success" id="save-btn">Save</button>
                </div>
            </form>
        </div>
    </div>

    <!-- Payment Modal -->
    <div class="modal" id="payment-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Record Payment</h2>
                <button class="close-btn" id="close-payment-modal">×</button>
            </div>
            <form id="payment-form">
                <input type="hidden" id="payment-student-id">
                <div class="form-group">
                    <label for="student-name">Student Name</label>
                    <input type="text" id="student-name" class="form-control" readonly>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="total-fee">Total Fee (₹)</label>
                        <input type="number" id="total-fee" class="form-control" readonly>
                    </div>
                    <div class="form-group">
                        <label for="paid-so-far">Paid So Far (₹)</label>
                        <input type="number" id="paid-so-far" class="form-control" readonly>
                    </div>
                </div>
                <div class="form-group">
                    <label for="payment-amount">Payment Amount (₹)</label>
                    <input type="number" id="payment-amount" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="payment-date">Payment Date</label>
                    <input type="date" id="payment-date" class="form-control" required>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id="cancel-payment-btn">Cancel</button>
                    <button type="submit" class="btn btn-success" id="save-payment-btn">Record Payment</button>
                </div>
            </form>
        </div>
    </div>

    <script>
        // JavaScript from previous response (unchanged)
        // DOM Elements
        const studentsTableBody = document.getElementById('students-table-body');
        const studentModal = document.getElementById('student-modal');
        const paymentModal = document.getElementById('payment-modal');
        const studentForm = document.getElementById('student-form');
        const paymentForm = document.getElementById('payment-form');
        const addStudentBtn = document.getElementById('add-student-btn');
        const closeModalBtn = document.getElementById('close-modal');
        const closePaymentModalBtn = document.getElementById('close-payment-modal');
        const cancelBtn = document.getElementById('cancel-btn');
        const cancelPaymentBtn = document.getElementById('cancel-payment-btn');
        const searchBox = document.getElementById('search-box');
        const classFilter = document.getElementById('class-filter');
        const totalStudentsEl = document.getElementById('total-students');
        const paidFeesEl = document.getElementById('paid-fees');
        const unpaidFeesEl = document.getElementById('unpaid-fees');

        // Current student being edited
        let currentStudentId = null;
        let students = [];

        // Initialize the app
        function init() {
            fetchStudents();
            setupEventListeners();
        }

        // Set up event listeners
        function setupEventListeners() {
            addStudentBtn.addEventListener('click', openAddStudentModal);
            closeModalBtn.addEventListener('click', closeStudentModal);
            closePaymentModalBtn.addEventListener('click', closePaymentModal);
            cancelBtn.addEventListener('click', closeStudentModal);
            cancelPaymentBtn.addEventListener('click', closePaymentModal);
            studentForm.addEventListener('submit', handleStudentFormSubmit);
            paymentForm.addEventListener('submit', handlePaymentFormSubmit);
            searchBox.addEventListener('input', filterStudents);
            classFilter.addEventListener('change', filterStudents);

            window.addEventListener('click', (e) => {
                if (e.target === studentModal) closeStudentModal();
                if (e.target === paymentModal) closePaymentModal();
            });
        }

        // Fetch students from backend
        async function fetchStudents() {
            try {
                const response = await fetch('api.php?action=get_students');
                if (!response.ok) throw new Error('Failed to fetch students');
                students = await response.json();
                renderStudentsTable();
                updateStats();
            } catch (error) {
                console.error('Error fetching students:', error);
                alert('Failed to load student data. Please try again.');
            }
        }

        // Render students table
        function renderStudentsTable(studentsToRender = students) {
            studentsTableBody.innerHTML = '';

            if (studentsToRender.length === 0) {
                studentsTableBody.innerHTML = '<tr><td colspan="8" style="text-align: center;">No students found</td></tr>';
                return;
            }

            studentsToRender.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.first_name} ${student.last_name}</td>
                    <td>${formatClassName(student.class)}</td>
                    <td>₹${parseFloat(student.fee_amount).toFixed(2)}</td>
                    <td>₹${parseFloat(student.paid_amount).toFixed(2)}</td>
                    <td>${formatDate(student.due_date)}</td>
                    <td><span class="status-${student.status}">${formatStatus(student.status)}</span></td>
                    <td>
                        <div class="action-btns">
                            <button class="btn btn-primary action-btn edit-btn" data-id="${student.id}">Edit</button>
                            <button class="btn btn-success action-btn payment-btn" data-id="${student.id}">Payment</button>
                            <button class="btn btn-danger action-btn delete-btn" data-id="${student.id}">Delete</button>
                        </div>
                    </td>
                `;
                studentsTableBody.appendChild(row);
            });

            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const studentId = parseInt(e.target.getAttribute('data-id'));
                    openEditStudentModal(studentId);
                });
            });

            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const studentId = parseInt(e.target.getAttribute('data-id'));
                    openPaymentModal(studentId);
                });
            });

            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const studentId = parseInt(e.target.getAttribute('data-id'));
                    deleteStudent(studentId);
                });
            });
        }

        // Format class name for display
        function formatClassName(className) {
            if (className === 'nursery') return 'Nursery';
            if (className === 'kg') return 'KG';
            return `Class ${className}`;
        }

        // Format date for display
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        // Format status for display
        function formatStatus(status) {
            return status.charAt(0).toUpperCase() + status.slice(1);
        }

        // Filter students
        function filterStudents() {
            const searchTerm = searchBox.value.toLowerCase();
            const selectedClass = classFilter.value;

            const filteredStudents = students.filter(student => {
                const fullName = `${student.first_name} ${student.last_name}`.toLowerCase();
                const matchesSearch = fullName.includes(searchTerm) || student.id.toString().includes(searchTerm);
                const matchesClass = selectedClass === 'all' || student.class === selectedClass;
                return matchesSearch && matchesClass;
            });

            renderStudentsTable(filteredStudents);
        }

        // Update statistics
        function updateStats() {
            totalStudentsEl.textContent = students.length;
            const paidStudents = students.filter(s => s.status === 'paid').length;
            paidFeesEl.textContent = paidStudents;
            const unpaidStudents = students.filter(s => s.status === 'unpaid').length;
            unpaidFeesEl.textContent = unpaidStudents;
        }

        // Open add student modal
        function openAddStudentModal() {
            currentStudentId = null;
            document.getElementById('modal-title').textContent = 'Add New Student';
            document.getElementById('student-id').value = '';
            studentForm.reset();
            studentModal.style.display = 'flex';
        }

        // Open edit student modal
        function openEditStudentModal(studentId) {
            currentStudentId = studentId;
            const student = students.find(s => s.id === studentId);

            if (student) {
                document.getElementById('modal-title').textContent = 'Edit Student';
                document.getElementById('student-id').value = student.id;
                document.getElementById('first-name').value = student.first_name;
                document.getElementById('last-name').value = student.last_name;
                document.getElementById('class').value = student.class;
                document.getElementById('fee-amount').value = student.fee_amount;
                document.getElementById('paid-amount').value = student.paid_amount;
                document.getElementById('due-date').value = student.due_date;
                document.getElementById('status').value = student.status;
                studentModal.style.display = 'flex';
            }
        }

        // Handle student form submission
        async function handleStudentFormSubmit(e) {
            e.preventDefault();

            const studentData = {
                id: currentStudentId,
                first_name: document.getElementById('first-name').value.trim(),
                last_name: document.getElementById('last-name').value.trim(),
                class: document.getElementById('class').value,
                fee_amount: parseFloat(document.getElementById('fee-amount').value) || 0,
                paid_amount: parseFloat(document.getElementById('paid-amount').value) || 0,
                due_date: document.getElementById('due-date').value,
                status: document.getElementById('status').value
            };

            // Client-side validation
            if (!studentData.first_name || !studentData.last_name) {
                alert('First name and last name are required.');
                return;
            }
            if (!studentData.class) {
                alert('Please select a class.');
                return;
            }
            if (studentData.fee_amount < 0 || studentData.paid_amount < 0) {
                alert('Fee and paid amounts cannot be negative.');
                return;
            }
            if (!studentData.due_date) {
                alert('Please select a due date.');
                return;
            }

            try {
                const response = await fetch(`api.php?action=${currentStudentId ? 'update_student' : 'add_student'}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(studentData)
                });
                const result = await response.json();

                if (result.status === 'success') {
                    closeStudentModal();
                    fetchStudents();
                } else {
                    alert('Error: ' + result.message);
                }
            } catch (error) {
                console.error('Error submitting student form:', error);
                alert('An error occurred while saving the student. Please try again.');
            }
        }

        // Open payment modal
        function openPaymentModal(studentId) {
            const student = students.find(s => s.id === studentId);

            if (student) {
                document.getElementById('payment-student-id').value = student.id;
                document.getElementById('student-name').value = `${student.first_name} ${student.last_name}`;
                document.getElementById('total-fee').value = parseFloat(student.fee_amount).toFixed(2);
                document.getElementById('paid-so-far').value = parseFloat(student.paid_amount).toFixed(2);
                document.getElementById('payment-amount').value = '';
                document.getElementById('payment-date').value = '';
                paymentModal.style.display = 'flex';
            }
        }

        // Handle payment form submission
        async function handlePaymentFormSubmit(e) {
            e.preventDefault();

            const paymentData = {
                id: parseInt(document.getElementById('payment-student-id').value),
                payment_amount: parseFloat(document.getElementById('payment-amount').value) || 0,
                payment_date: document.getElementById('payment-date').value
            };

            // Client-side validation
            if (paymentData.payment_amount <= 0) {
                alert('Payment amount must be greater than zero.');
                return;
            }
            if (!paymentData.payment_date) {
                alert('Please select a payment date.');
                return;
            }

            try {
                const response = await fetch('api.php?action=record_payment', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(paymentData)
                });
                const result = await response.json();

                if (result.status === 'success') {
                    closePaymentModal();
                    fetchStudents();
                } else {
                    alert('Error: ' + result.message);
                }
            } catch (error) {
                console.error('Error submitting payment form:', error);
                alert('An error occurred while recording the payment. Please try again.');
            }
        }

        // Close student modal
        function closeStudentModal() {
            studentModal.style.display = 'none';
        }

        // Close payment modal
        function closePaymentModal() {
            paymentModal.style.display = 'none';
        }

        // Delete student
        async function deleteStudent(studentId) {
            if (confirm('Are you sure you want to delete this student?')) {
                try {
                    const response = await fetch(`api.php?action=delete_student&id=${studentId}`);
                    const result = await response.json();

                    if (result.status === 'success') {
                        fetchStudents();
                    } else {
                        alert('Error: ' + result.message);
                    }
                } catch (error) {
                    console.error('Error deleting student:', error);
                    alert('An error occurred while deleting the student. Please try again.');
                }
            }
        }

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
    </script>
</body>
</html>