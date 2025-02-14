// Dark/Light mode toggle
function lightToggle() {
  const body = document.documentElement;
  var selfPortrait = document.getElementsByClassName("portrait-wrapper")[0];

  // Toggle light mode class
  body.classList.toggle('light-mode');

  // Save user preference
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    selfPortrait.children[0].src = "media/self-portrait-lm.png";
  } else {
    localStorage.setItem('theme', 'dark');
    selfPortrait.children[0].src = "media/self-portrait.png";
  }
}

// Fades in content
function showDivById (id) {
  var div = document.getElementById(id);
  $(div).fadeIn(200);
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved theme on page load
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light-mode');
    var selfPortrait = document.getElementsByClassName("portrait-wrapper")[0];
    selfPortrait.children[0].src = "media/self-portrait-lm.png";
  }

  // Fade in content
  showDivById("contact");
});
