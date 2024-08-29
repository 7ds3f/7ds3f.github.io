let lightState = 0;

//light toggle
function lightToggle() {
  if (lightState === 1) lightState = 0;
  else lightState++;
  //background
  var background = document.body;
  //header
  var header = document.getElementsByClassName("page-header-content")[0];
  //other
  //menu
  var pageTitle = document.getElementsByClassName("page-title")[0];
  var switchButtons = document.getElementsByClassName("switch-btn");
  var leftButton = document.getElementById("switch-left");
  var rightButton = document.getElementById("switch-right");
  //code projects
  var codeDisplays = document.getElementsByClassName("code-showcase");
  var p1 = document.getElementById("interactive-data-viz");
  var p2 = document.getElementById("rpi-campus-map");
  var p3 = document.getElementById("n-queen-solver");
  var p4 = document.getElementById("spotify-bot");
  var p5 = document.getElementById("tcp-wordle-server");
  var p6 = document.getElementById("my-website");
  var codeInfoBox = document.getElementById("code-info-box");
  //3d projects
  var galleryDisplays = document.getElementsByClassName("gallery-showcase");
  var designDisplays = document.getElementsByClassName("design-showcase");
  var g1 = document.getElementById("gallery-button-favorites");
  var g2 = document.getElementById("gallery-button-2023");
  var g3 = document.getElementById("gallery-button-2022");
  var g4 = document.getElementById("gallery-button-old");
  var g5 = document.getElementById("triumph-modular");
  var g6 = document.getElementById("guitar-ad");
  var g7 = document.getElementById("darth-croft");
  var g8 = document.getElementById("kara");
  var g9 = document.getElementById("window");
  var g10 = document.getElementById("house");
  //footer
  var footer = document.getElementsByClassName("page-footer")[0];
  //light toggle
  var lightToggle = document.getElementsByClassName("light-toggle")[0];
  //toggle classes
  header.classList.toggle("page-header-content-dm");
  background.classList.toggle("body-dm");
  pageTitle.classList.toggle("page-title-dm");
  for (var i = 0; i < switchButtons.length; i++) {
    switchButtons[i].classList.toggle("switch-btn-dm");
  }
  leftButton.classList.toggle("switch-left-dm");
  rightButton.classList.toggle("switch-right-dm");
  for (var i = 0; i < codeDisplays.length; i++) {
    codeDisplays[i].classList.toggle("code-showcase-dm");
  }
  p1.classList.toggle("interactive-data-viz-dm");
  p2.classList.toggle("rpi-campus-map-dm");
  p3.classList.toggle("n-queen-solver-dm");
  p4.classList.toggle("spotify-bot-dm");
  p5.classList.toggle("tcp-wordle-server-dm");
  p6.classList.toggle("my-website-dm");
  for (var i = 0; i < galleryDisplays.length; i++) {
    galleryDisplays[i].classList.toggle("gallery-showcase-dm");
  }
  g1.classList.toggle("gallery-button-favorites-dm");
  g2.classList.toggle("gallery-button-2023-dm");
  g3.classList.toggle("gallery-button-2022-dm");
  g4.classList.toggle("gallery-button-old-dm");
  for (var i = 0; i < designDisplays.length; i++) {
    designDisplays[i].classList.toggle("design-showcase-dm");
  }
  g5.classList.toggle("triumph-modular-dm");
  g6.classList.toggle("guitar-ad-dm");
  g7.classList.toggle("darth-croft-dm");
  g8.classList.toggle("kara-dm");
  g9.classList.toggle("window-dm");
  g10.classList.toggle("house-dm");
  codeInfoBox.classList.toggle("info-showcase-dm");
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
  //switch functions
  function showDivById (id) {
    var div = document.getElementById(id);
    $(div).fadeIn(200);
  }

  showDivById("code-projects");

  const leftButton = document.getElementById("switch-left");
  const rightButton = document.getElementById("switch-right");
  l_selected = true;
  r_selected = false;
  leftButton.classList.toggle("active");

  leftButton.addEventListener("mousedown", () => {
    if (!l_selected) {
      rightButton.disabled = true;
      leftButton.disabled = true;
      leftButton.classList.toggle("active");
      rightButton.classList.remove("active");
      l_selected = true;
      r_selected = false;

      $(document.getElementById("design-projects")).fadeOut(200, function() {
        showDivById("code-projects");
        rightButton.disabled = false;
        leftButton.disabled = false;
      });
    }
  });

  rightButton.addEventListener("mousedown", () => {
    if (!r_selected) {
      rightButton.disabled = true;
      leftButton.disabled = true;
      rightButton.classList.toggle("active");
      leftButton.classList.remove("active");
      l_selected = false;
      r_selected = true;

      $(document.getElementById("code-projects")).fadeOut(200, function() {
        showDivById("design-projects");
        rightButton.disabled = false;
        leftButton.disabled = false;
      });
    }
  });

  //collapsible functions
  var coll = document.getElementsByClassName("collapsible");
  var col2 = document.getElementsByClassName("gallery-collapsible");
  var start = false;
  var i;

  //gallery collapsibles
  for (i = 0; i < col2.length; i++) {
    col2[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      //gallery-favorites starts open
      if (content.id === "gallery-favorites" && !start) {
        content.style.display = "block";
        start = true;
      }
      if (content.style.display === "block") {
        this.style.borderRadius = "10px 10px 10px 10px";
        content.style.display = "none";
      } else {
        this.style.borderRadius = "10px 10px 0px 0px";
        content.style.display = "block";
      }
    });
    col2[i].addEventListener("mouseover", function() {
      var content = this.nextElementSibling;
      this.style.borderColor = "#3185FC";
      content.style.borderImage = "linear-gradient(to bottom, rgba(49, 133, 252, 1), rgba(0, 23, 31, 0) 50%) 1";
    });
    col2[i].addEventListener("mouseout", function() {
      var content = this.nextElementSibling;
      this.style.borderColor = "#00FFC5";
      content.style.borderImage = "linear-gradient(to bottom, rgba(0, 255, 197, 1), rgba(0, 23, 31, 0) 50%) 1";
    });
  }

  //project collapsibles
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        this.style.borderRadius = "10px 10px 10px 10px";
        content.style.display = "none";
      } else {
        this.style.borderRadius = "10px 10px 0px 0px";
        content.style.display = "block";
      }
    });
    coll[i].addEventListener("mouseover", function() {
      var content = this.nextElementSibling;
      this.style.borderColor = "#3185FC";
      content.style.borderImage = "linear-gradient(to bottom, rgba(49, 133, 252, 1), rgba(0, 23, 31, 0) 50%) 1";
    });
    coll[i].addEventListener("mouseout", function() {
      var content = this.nextElementSibling;
      if (lightState === 0) {
        this.style.borderColor = "var(--dm-green)";
        content.style.borderImage = "linear-gradient(to bottom, var(--dm-green), rgba(0, 23, 31, 0) 50%) 1";
      }
      else if (lightState === 1) {
        this.style.borderColor = "var(--lm-green)";
        content.style.borderImage = "linear-gradient(to bottom, var(--lm-green), rgba(0, 23, 31, 0) 50%) 1";
      }
    });
  }

  //gallery image handler
  document.querySelectorAll(".gallery-img-wrapper").forEach(item => {
    //access image div
    var image = item.children[0];
    //access image info icon
    var infoIcon = item.children[1];
    //access image details div
    var imageDetails = item.children[2];

    //show info icon
    infoIcon.style.display = "none";
    item.addEventListener('mouseover', event => {
      infoIcon.style.display = "block";
    })

    item.addEventListener('mouseout', event => {
      infoIcon.style.display = "none";
    })

    //image states
    var selected = {
      "filter": "opacity(0)",
      "-webkit-filter": "opacity(0)",
    };

    var deselected = {
      "filter": "opacity(1)",
      "-webkit-filter": "opacity(1)",
    };

    //show image details
    Object.assign(image.style, deselected);
    imageDetails.style.display = "none";
    item.addEventListener('click', event => {
      if (imageDetails.style.display === "none") {
        imageDetails.style.display = "block";
        Object.assign(image.style, selected);
      }
      else {
        imageDetails.style.display = "none";
        Object.assign(image.style, deselected);
      }
    })
  })
  
  lightToggleAuto();
});
