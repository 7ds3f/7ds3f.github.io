function showDivById (id) {
  var div = document.getElementById(id);
  $(div).fadeIn(200);
}

//light toggle
// function lightToggle() {
//   //background
//   var background = document.body;
//   //header
//   var header = document.getElementsByClassName("page-header-content")[0];
//   //other
//   var pageTitle = document.getElementsByClassName("page-title")[0];
//   //footer
//   var footer = document.getElementsByClassName("page-footer")[0];
//   //light toggle
//   var lightToggle = document.getElementsByClassName("light-toggle")[0];
//   //toggle classes
//   header.classList.toggle("page-header-content-dm");
//   background.classList.toggle("body-dm");
//   pageTitle.classList.toggle("page-title-dm");
//   footer.classList.toggle("page-footer-dm");
//   lightToggle.classList.toggle("light-toggle-dm");
// }

function lightToggle() {
  const body = document.documentElement;

  // Toggle light mode class
  body.classList.toggle('light-mode');

  // Save user preference
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Apply saved theme on page load
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light-mode');
  }
  
  showDivById("about");
});