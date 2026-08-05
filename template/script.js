// ============================================================
//  Dark mode toggle - Lesson 5
//  Read this top to bottom. Every line is commented.
//  JavaScript writes comments as // like this. Same idea as
//  HTML's <!-- --> and CSS's /* */. Yet another syntax.
// ============================================================

// 1. Find the button in the page.
//    It looks for id="dark-mode-toggle". If your button doesn't have
//    that exact id, this line finds nothing and the file stops here.
const toggleButton = document.getElementById('dark-mode-toggle');

// 2. Wait for someone to click it, then run the code inside.
toggleButton.addEventListener('click', function () {

  // 3. Put the class "dark" on the page - or take it off if it's
  //    already there. That's what "toggle" means: flip it.
  //    This one class is what switches every dark: style on your page.
  document.documentElement.classList.toggle('dark');

  // 4. Change the button's own label so it always says what it
  //    will do NEXT, not what it just did.
  if (document.documentElement.classList.contains('dark')) {
    toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
  }
});

// ==========================================
// ONLY ADD YOUR OWN CODE BELOW THIS LINE
// ==========================================

// RANDOM DOG ----------------------------------------------

document.getElementById('dog-btn').addEventListener('click', function () {

  // 1. Ask the dog service for a random photo.
  fetch('https://hp-api.onrender.com/api/characters')

    // 2. When it answers, unpack the response into usable data.
    .then(function (response) { return response.json(); })

    // 3. Now we have the data — put the photo on the page.
    .then(function (data) {
      const dogImg = document.getElementById('dog-img');
      dogImg.src = data[0].image;          // the photo's web address
      dogImg.classList.remove('hidden');  // reveal it
    });
});

// REMEMBER THE VISITOR ------------------------------------

const greeting = document.getElementById('greeting');

// 1. When the page loads, check the notebook for a saved name.
const savedName = localStorage.getItem('visitorName');
if (savedName) {
  greeting.textContent = 'Welcome back, ' + savedName + '! 👋';
}

// 2. When they click Save, write their name into the notebook.
document.getElementById('name-save').addEventListener('click', function () {
  const name = document.getElementById('name-input').value;
  localStorage.setItem('visitorName', name);          // save it
  greeting.textContent = 'Welcome back, ' + name + '! 👋';
});


function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // 12-hour format with AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 

    // Force hours, minutes, and seconds to always have 2 digits (e.g., "05")
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

    const clockElement = document.getElementById('live-clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

// Run immediately and update every second
updateClock();
setInterval(updateClock, 1000);

const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
    { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" }
];

document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');
    const quoteBtn = document.getElementById('quote-btn');

    function getRandomQuote() {
        if (!quoteText) return;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const selectedQuote = quotes[randomIndex];
        quoteText.textContent = `"${selectedQuote.text}" — ${selectedQuote.author}`;
    }

    if (quoteBtn) {
        quoteBtn.addEventListener('click', getRandomQuote);
    }
});