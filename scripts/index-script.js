function applyIconTheme(isLight) {
    var codeAnimation = document.getElementById("code-animation");
    var squareAnimation = document.getElementById("square-animation");
    if (codeAnimation) codeAnimation.src = isLight ? "media/code-lm.webp" : "media/code.webp";
    if (squareAnimation) squareAnimation.src = isLight ? "media/square-lm.webp" : "media/square.webp";
}

function lightToggle() {
    const root = document.documentElement;
    root.classList.toggle('light-mode');
    const isLight = root.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    applyIconTheme(isLight);
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('light-mode');
        applyIconTheme(true);
    }
});
