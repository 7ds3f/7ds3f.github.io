//light toggle
// function lightToggle() {
//     //background
//     var background = document.body;
//     //header
//     var header = document.getElementsByClassName("page-header-content")[0];
//     //other
//     var homeCenter = document.getElementsByClassName("home-center")[0];
//     var homeMenuContainer = document.getElementsByClassName("home-menu-container")[0];
//     var codeAnimation = document.getElementById("code-animation");
//     var squareAnimation = document.getElementById("square-animation");
//     //footer
//     var footer = document.getElementsByClassName("page-footer")[0];
//     //light toggle
//     var lightToggle = document.getElementsByClassName("light-toggle")[0];
//     //toggle classes
//     header.classList.toggle("page-header-content-dm");
//     background.classList.toggle("body-dm");
//     homeCenter.classList.toggle("home-center-dm");
//     homeMenuContainer.classList.toggle("home-menu-container-dm");
//     //image switch
//     codeCurrentImage = (codeCurrentImage === "media/code.webp") ? "media/code-lm.webp" : "media/code.webp";
//     squareCurrentImage = (squareCurrentImage === "media/square.webp") ? "media/square-lm.webp" : "media/square.webp";
//     codeAnimation.src = codeCurrentImage;
//     squareAnimation.src = squareCurrentImage;
//     footer.classList.toggle("page-footer-dm");
//     lightToggle.classList.toggle("light-toggle-dm");
// }

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

    lightToggle.classList.toggle("light-toggle-dm");
}

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