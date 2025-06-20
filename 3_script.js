// === Lumos Website - script.js ===

// Dark Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Calm Modal Trigger
const calmBtn = document.getElementById('calm-btn');
const calmModal = document.getElementById('calm-modal');

calmBtn.addEventListener('click', () => {
  calmModal.style.display = calmModal.style.display === 'block' ? 'none' : 'block';
});

// Emotion Room Navigation (Optional dynamic part)
document.querySelectorAll('[data-room]').forEach(btn => {
  btn.addEventListener('click', () => {
    const room = btn.getAttribute('data-room');
    document.querySelectorAll('.room').forEach(r => r.style.display = 'none');
    if (room === 'lost') document.getElementById('blue-room').style.display = 'block';
    if (room === 'peace') document.getElementById('green-room').style.display = 'block';
    if (room === 'overwhelmed') document.getElementById('beige-room').style.display = 'block';
  });
});

// Journal Save and Burn
function saveJournal() {
  const text = document.getElementById('journal-box').value;
  if (text.trim()) {
    alert('Journal saved (locally). Your feelings matter 💛');
  } else {
    alert("It's empty! Write something from the heart 💬");
  }
}

function burnJournal() {
  const journal = document.getElementById('journal-box');
  journal.value = '';
  alert('Poof! Your thoughts vanished into stardust. ✨');
}
