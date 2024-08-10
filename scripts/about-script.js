function showDivById (id) {
  var div = document.getElementById(id);
  $(div).fadeIn(200);
}

function scrollIndicator(scroll_box_id, scroll_bar_id, scroll_percent_id) {
  var winScroll = document.getElementById(scroll_box_id).scrollTop;
  var height = document.getElementById(scroll_box_id).scrollHeight - document.getElementById(scroll_box_id).clientHeight;
  var scrolled = (winScroll/height)*100;
  var scrolledRound = Math.round(scrolled);
  document.getElementById(scroll_bar_id).style.height = scrolled + "%";
  if (scrolledRound == 0) {
    document.getElementById(scroll_percent_id).innerHTML = "<p2><< scroll</p2>";
    document.getElementById(scroll_bar_id).style.display = "hidden";
  }
  else {
    document.getElementById("experience-scroll-percent").innerHTML = "<p2><< " + scrolledRound + "%</p2>";
    document.getElementById(scroll_bar_id).style.display = "block";
  }
}

//light toggle
function lightToggle() {
  //background
  var background = document.body;
  //header
  var header = document.getElementsByClassName("page-header-content")[0];
  //other
  var pageTitle = document.getElementsByClassName("page-title")[0];
  //footer
  var footer = document.getElementsByClassName("page-footer")[0];
  //light toggle
  var lightToggle = document.getElementsByClassName("light-toggle")[0];
  //toggle classes
  header.classList.toggle("page-header-content-dm");
  background.classList.toggle("body-dm");
  pageTitle.classList.toggle("page-title-dm");
  footer.classList.toggle("page-footer-dm");
  lightToggle.classList.toggle("light-toggle-dm");
}

//light toggle auto
function lightToggleAuto() {
  const now = new Date();
  const hours = now.getHours();
  if (hours < 12) lightToggle();
}

document.addEventListener("DOMContentLoaded", () => {
  showDivById("about");
  //document.getElementById("experience-scroll-box").onscroll = function() {scrollIndicator("experience-scroll-box", "experience-scroll-bar", "experience-scroll-percent")};
});