/* ============================================
   VALENTINE WEBSITE - JAVASCRIPT
   ============================================ */
// Valentine Days Data
const daysData = [
  { emoji: "🌹", date: "Feb 7", title: "Rose Day", message: "Kritika, every rose reminds me of your beautiful smile 🌹 You are the most precious flower in my garden of life.", surprise: "🌹🌹🌹 Roses for my Rose! 🌹🌹🌹" },
  { emoji: "💝", date: "Feb 8", title: "Propose Day", message: "From this day, I promise my heart belongs only to you. Every beat whispers your name 💝", surprise: "💍 Will you be mine forever? 💍" },
  { emoji: "🍫", date: "Feb 9", title: "Chocolate Day", message: "Life became sweeter the moment you came into my world. You are the sweetest thing in my life 🍫", surprise: "🍫🍫🍫 Sweet as your love! 🍫🍫🍫" },
  { emoji: "🧸", date: "Feb 10", title: "Teddy Day", message: "If hugs were gifts, I would give you infinite ones. You're my forever cuddle partner 🧸", surprise: "🧸 Hug me tight! 🧸" },
  { emoji: "🤝", date: "Feb 11", title: "Promise Day", message: "I promise to walk beside you in every step of life. To love you, cherish you, and protect you always 🤝", surprise: "🤝 Hand in hand forever! 🤝" },
  { emoji: "🤗", date: "Feb 12", title: "Hug Day", message: "Your arms feel like my safest home. Every hug from you heals my soul 🤗", surprise: "🤗 Warm hugs from my heart! 🤗" },
  { emoji: "💋", date: "Feb 13", title: "Kiss Day", message: "Every moment with you feels magical. Your kiss is the seal of our eternal love 💋", surprise: "💋💋💋 Sweet kisses for you! 💋💋💋" }
];

// Password for early access
const PASSWORD = "kritikabudi";

// Function to check if a day is unlocked
function isDayUnlocked(dayIndex) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-based
  const currentDay = now.getDate();

  // Assuming 2026 for Valentine days
  const year = 2026;
  const month = 1; // February is 1 (0-based)
  const day = 7 + dayIndex; // Feb 7 to 14

  if (currentYear > year || (currentYear === year && currentMonth > month) || (currentYear === year && currentMonth === month && currentDay >= day)) {
    return true;
  }
  return false;
}

// Function to prompt for password
function promptPassword() {
  const password = prompt("This day is not yet unlocked. Enter password to access:");
  return password === PASSWORD;
}

// Function to check and show day message
function checkAndShowDayMessage(index) {
  if (isDayUnlocked(index)) {
    showDayMessage(index);
  } else {
    if (promptPassword()) {
      showDayMessage(index);
    } else {
      alert("Incorrect password. Try again later!");
    }
  }
}

// Function to check and open proposal
function checkAndOpenProposal() {
  const proposalIndex = 7; // Feb 14 is index 7 (0-based from Feb 7)
  if (isDayUnlocked(proposalIndex)) {
    openProposal();
  } else {
    if (promptPassword()) {
      openProposal();
    } else {
      alert("Incorrect password. Try again later!");
    }
  }
}
// Music state
let isMuted = true;
let bgMusic;
// ============================================
// FLOATING HEARTS
// ============================================
function createFloatingHearts() {
  const container = document.getElementById('floating-hearts');
  const hearts = ['❤️', '💕', '💗', '💖', '💓'];
  
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDelay = Math.random() * 8 + 's';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    container.appendChild(heart);
  }
}
// ============================================
// MUSIC TOGGLE
// ============================================
function toggleMusic() {
  const muteIcon = document.getElementById('muteIcon');
  const volumeIcon = document.getElementById('volumeIcon');

  if (!bgMusic) {
    bgMusic = document.getElementById('bgMusic');
  }

  if (isMuted) {
    bgMusic.play().catch(e => console.log('Audio play failed:', e));
    muteIcon.style.display = 'none';
    volumeIcon.style.display = 'block';
  } else {
    bgMusic.pause();
    muteIcon.style.display = 'block';
    volumeIcon.style.display = 'none';
  }
  isMuted = !isMuted;
}
// ============================================
// DAY MESSAGE MODAL
// ============================================
function showDayMessage(index) {
  const day = daysData[index];
  const surpriseDiv = document.getElementById('daySurprise');
  surpriseDiv.textContent = day.surprise;
  surpriseDiv.className = 'day-surprise';

  document.getElementById('modalEmoji').textContent = day.emoji;
  document.getElementById('modalDate').textContent = day.date;
  document.getElementById('modalTitle').textContent = day.title;
  document.getElementById('modalMessage').textContent = day.message;

  openModal('dayModal');
}
// ============================================
// PROPOSAL MODAL
// ============================================
let proposalStage = 0;
function openProposal() {
  proposalStage = 0;
  hideAllProposalStages();
  document.getElementById('proposalStage1').classList.remove('hidden');
  openModal('proposalModal');
  
  // Stage transitions
  setTimeout(() => nextProposalStage(), 1500);
  setTimeout(() => nextProposalStage(), 3500);
  setTimeout(() => nextProposalStage(), 5500);
}
function nextProposalStage() {
  proposalStage++;
  hideAllProposalStages();
  
  const stage = document.getElementById('proposalStage' + (proposalStage + 1));
  if (stage) {
    stage.classList.remove('hidden');
  }
}
function hideAllProposalStages() {
  for (let i = 1; i <= 5; i++) {
    const stage = document.getElementById('proposalStage' + i);
    if (stage) stage.classList.add('hidden');
  }
}
function sayYes() {
  // Create confetti
  createConfetti();
  
  // Show final stage
  hideAllProposalStages();
  document.getElementById('proposalStage5').classList.remove('hidden');
}
function createConfetti() {
  const container = document.getElementById('confetti');
  container.innerHTML = '';
  
  const colors = ['#ff6b9d', '#ffd700', '#ff85a2', '#ffc0cb', '#ffb6c1', '#e11d48'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    container.appendChild(confetti);
  }
}
// ============================================
// LOVE LETTER MODAL
// ============================================
function openLetter() {
  openModal('letterModal');
  
  // Animate envelope opening
  setTimeout(() => {
    document.getElementById('envelopeFlap').classList.add('open');
  }, 300);
  
  setTimeout(() => {
    document.getElementById('letterPaper').classList.add('show');
  }, 800);
}
// ============================================
// MODAL UTILITIES
// ============================================
function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
  document.body.style.overflow = '';
  
  // Reset letter modal
  if (modalId === 'letterModal') {
    document.getElementById('envelopeFlap').classList.remove('open');
    document.getElementById('letterPaper').classList.remove('show');
  }
  
  // Reset proposal modal
  if (modalId === 'proposalModal') {
    proposalStage = 0;
    document.getElementById('confetti').innerHTML = '';
  }
}
// Close modal on outside click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    const modalId = e.target.id;
    closeModal(modalId);
  }
});
// ============================================
// SCROLL ANIMATIONS
// ============================================
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.day-card, .timeline-item, .gallery-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => observer.observe(el));
}
// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  createFloatingHearts();
  handleScrollAnimations();
  
  // Add scroll reveal to timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'all 0.6s ease ' + (index * 0.2) + 's';
  });
  
  // Reveal on scroll
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });
  
  timelineItems.forEach(item => timelineObserver.observe(item));
});