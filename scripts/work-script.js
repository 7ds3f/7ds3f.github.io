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
      this.style.borderColor = "#00FFC5";
      content.style.borderImage = "linear-gradient(to bottom, rgba(0, 255, 197, 1), rgba(0, 23, 31, 0) 50%) 1";
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
