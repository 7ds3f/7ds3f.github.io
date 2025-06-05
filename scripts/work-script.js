// Dark/Light mode toggle
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

// Fades in content
function showDivById(id) {
  var div = document.getElementById(id);
  $(div).fadeIn(200);
}

// Scroll button display
function scrollFunction(scrollcontainer) {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    scrollcontainer.style.display = "block";
  } else {
    scrollcontainer.style.display = "none";
  }
}

// Scroll to top
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// 3D splash image handler
function updateImage() {
  const img = document.getElementById("splash-image");
  if (window.matchMedia("(max-aspect-ratio: 16/9)").matches) {
      img.src = "media/3d/mp3_player_comp_vert.png";
  } else {
      img.src = "media/3d/mp3_player_comp.png";
  }
}

window.addEventListener("resize", updateImage);
window.addEventListener("load", updateImage);

// On page load
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved theme on page load
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light-mode');
  }

  // Fade in content
  showDivById("design-projects");

  // Display scroll button
  let scroll_button = document.getElementById("scroll-container");
  window.onscroll = function() {scrollFunction(scroll_button)};

  // Project switch handler
  const leftButton = document.getElementById("switch-left");
  const rightButton = document.getElementById("switch-right");
  l_selected = false;
  r_selected = true;
  rightButton.classList.toggle("active");

  leftButton.addEventListener("mousedown", () => {
    if (!l_selected) {
      rightButton.disabled = true;
      leftButton.disabled = true;
      leftButton.classList.toggle("active");
      rightButton.classList.remove("active");
      l_selected = true;
      r_selected = false;

      $(document.getElementById("design-projects")).fadeOut(200, function () {
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

      $(document.getElementById("code-projects")).fadeOut(200, function () {
        showDivById("design-projects");
        rightButton.disabled = false;
        leftButton.disabled = false;
      });
    }
  });

  // Collapsible functions
  var coll = document.getElementsByClassName("collapsible");
  var col2 = document.getElementsByClassName("gallery-collapsible");
  var start = false;
  var i;

  // Gallery collapsibles
  for (i = 0; i < col2.length; i++) {
    col2[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      // Gallery-favorites starts open
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
    col2[i].addEventListener("mouseover", function () {
      var content = this.nextElementSibling;
      this.style.borderColor = "var(--dm-blue)";
      content.style.borderImage = "linear-gradient(to bottom, var(--dm-blue), rgba(0, 23, 31, 0) 50%) 1";
    });
    col2[i].addEventListener("mouseout", function () {
      var content = this.nextElementSibling;
      this.style.borderColor = "var(--dm-green)";
      content.style.borderImage = "linear-gradient(to bottom, var(--dm-green), rgba(0, 23, 31, 0) 50%) 1";
    });
  }

  // Project collapsibles
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
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
    coll[i].addEventListener("mouseover", function () {
      var content = this.nextElementSibling;
      this.style.borderColor = "var(--dm-blue)";
      content.style.borderImage = "linear-gradient(to bottom, var(--dm-blue), rgba(0, 23, 31, 0) 50%) 1";
    });
    coll[i].addEventListener("mouseout", function () {
      var content = this.nextElementSibling;
      this.style.borderColor = "var(--dm-green)";
      content.style.borderImage = "linear-gradient(to bottom, var(--dm-green), rgba(0, 23, 31, 0) 50%) 1";
    });
  }

  // Gallery image handler
  document.querySelectorAll(".gallery-img-wrapper").forEach(item => {
    // Access image div
    var image = item.children[0];
    // Access image info icon
    var infoIcon = item.children[1];
    // Access image details div
    var imageDetails = item.children[2];

    // Show info icon
    infoIcon.style.display = "none";
    item.addEventListener('mouseover', event => {
      infoIcon.style.display = "block";
    })

    item.addEventListener('mouseout', event => {
      infoIcon.style.display = "none";
    })

    // Image states
    var selected = {
      "filter": "opacity(0)",
      "-webkit-filter": "opacity(0)",
    };

    var deselected = {
      "filter": "opacity(1)",
      "-webkit-filter": "opacity(1)",
    };

    // Show image details
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
});
