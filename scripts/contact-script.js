let portraitCurrentImage = "media/self-portrait.png";

//light toggle
function lightToggle() {
  //background
  var background = document.body;
  //header
  var header = document.getElementsByClassName("page-header-content")[0];
  //other
  var pageTitle = document.getElementsByClassName("page-title")[0];
  var infoBoxes = document.getElementsByClassName("info-text");
  var selfPortrait = document.getElementsByClassName("portrait-wrapper")[0];
  //footer
  var footer = document.getElementsByClassName("page-footer")[0];
  //light toggle
  var lightToggle = document.getElementsByClassName("light-toggle")[0];
  //toggle classes
  header.classList.toggle("page-header-content-dm");
  background.classList.toggle("body-dm");
  pageTitle.classList.toggle("page-title-dm");
  for (var i = 0; i < infoBoxes.length; i++) {
    infoBoxes[i].classList.toggle("info-text-dm");
  }
  //image switch
  portraitCurrentImage = (portraitCurrentImage === "media/self-portrait.png") ? "media/self-portrait-lm.png" : "media/self-portrait.png";
  selfPortrait.classList.toggle("portrait-wrapper-dm");
  selfPortrait.children[0].src = portraitCurrentImage;
  footer.classList.toggle("page-footer-dm");
  lightToggle.classList.toggle("light-toggle-dm");
}

//light toggle auto
function lightToggleAuto() {
  const now = new Date();
  const hours = now.getHours();
  if (hours >= 8 && hours < 20) lightToggle();
}

document.addEventListener("DOMContentLoaded", () => {
  function showDivById (id) {
    var div = document.getElementById(id);
    $(div).fadeIn(200);
  }

  lightToggleAuto();
  showDivById("contact");
});
