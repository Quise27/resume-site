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
