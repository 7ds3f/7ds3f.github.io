// Dark/Light mode toggle
function lightToggle() {
    const body = document.documentElement;
    var codeAnimation = document.getElementById("code-animation");
    var squareAnimation = document.getElementById("square-animation");

    // Toggle light mode class
    body.classList.toggle('light-mode');

    // Save user preference
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        codeAnimation.src = "media/code-lm.webp";
        squareAnimation.src = "media/square-lm.webp";
    } else {
        localStorage.setItem('theme', 'dark');
        codeAnimation.src = "media/code.webp";
        squareAnimation.src = "media/square.webp";
    }
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
    // Apply saved theme on page load
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('light-mode');
        var codeAnimation = document.getElementById("code-animation");
        var squareAnimation = document.getElementById("square-animation");
        codeAnimation.src = "media/code-lm.webp";
        squareAnimation.src = "media/square-lm.webp";
    }
});