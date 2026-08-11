function applyPortraitTheme(isLight) {
  var portrait = document.getElementById("self-portrait");
  if (portrait) portrait.src = isLight ? "media/self-portrait-lm.png" : "media/self-portrait.png";
}

function lightToggle() {
  const root = document.documentElement;
  root.classList.toggle('light-mode');
  const isLight = root.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  applyPortraitTheme(isLight);
}

function showDivById(id) {
  var div = document.getElementById(id);
  if (div) $(div).fadeIn(200);
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light-mode');
    applyPortraitTheme(true);
  }
  showDivById("contact");
});
