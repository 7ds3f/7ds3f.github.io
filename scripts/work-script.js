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
  if (!img) return;
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
        if (window.refreshGallery) window.refreshGallery();
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

/* ============================================================
   MODERN 3D RENDER GALLERY
   ============================================================ */

// Render data. f=featured, c=commercial, v=youtube id (video), link=project anchor.
const RENDERS = [
  // --- Featured ---
  { t: "Eve", y: "2023", src: "media/3d/2023/eve-1.jpg", f: true, ack: "Foliage Models — Botaniq Blender Addon · Background Image — Ashley Adamant" },
  { t: "Amplifier", y: "2021", src: "media/3d/old/amplifier.jpg", f: true },
  { t: "Topdown", y: "2023", src: "media/3d/2023/topdown.jpg", c: true, link: "#triumph-modular" },
  { t: "Window", y: "2021", src: "media/3d/old/window-1.jpg", f: true, link: "#window" },
  { t: "Prototype (WIP)", y: "2024", src: "media/3d/2024/prototype-1.webp", f: true, ack: "Humanoid — MakeHuman · Some textures from Poliigon.com" },
  { t: "Trailer Interior", y: "2022", src: "media/3d/2022/triumph-interior.webp", f: true, c: true, link: "#triumph-modular" },
  { t: "Light", y: "2021", src: "media/3d/old/light-1.jpg", f: true, ack: "Some models from BlenderKit · Some textures from Textures.com and Poliigon.com" },
  { t: "Portals", y: "2023", src: "media/3d/2023/portals.jpg", f: true, ack: "Foliage Models — Botaniq · Bike Model — Traffiq · Some textures from Poliigon.com" },
  { t: "RPI Bridge", y: "2021", src: "media/3d/old/rpi-bridge.jpg", f: true, ack: "Foliage Models — Botaniq · Human Model — NumikPopulate · Some textures from Textures.com and Poliigon.com" },
  { t: "Guitar", y: "2022", src: "media/3d/2022/guitar.jpg", f: true, ack: "Plant Models — Botaniq · Some textures from Poliigon.com" },
  { t: "Generator", y: "2023", src: "media/3d/2023/generator.png", f: true, c: true, link: "#triumph-modular" },
  { t: "Saber", y: "2024", src: "", f: true, v: "Rf-Ntse3ISg" },

  // --- 2024 ---
  { t: "Abell 39", y: "2024", src: "media/3d/2024/abell39-1.webp", ack: "Man — RenderPeople · Astronaut — Sketchfab · Some models from BlenderKit" },
  { t: "VFX Project", y: "2024", src: "", v: "3piQztIwVG4" },
  { t: "VFX Project", y: "2024", src: "", v: "hgsc9Ey5olY" },
  { t: "VFX Project", y: "2024", src: "", v: "QxTjw3raX_k" },

  // --- 2023 ---
  { t: "Soda Bottle", y: "2023", src: "media/3d/2023/soda-bottle.jpg" },
  { t: "Crappy Robot", y: "2023", src: "media/3d/2023/robot.jpg" },
  { t: "Primitives", y: "2023", src: "media/3d/2023/primitives.jpg" },
  { t: "Mountaintop", y: "2023", src: "media/3d/2023/mountaintop.jpg", ack: "Foliage & Rock Models — Botaniq · Human Model — Humano3D · Some textures from Poliigon.com" },
  { t: "Guitar Ad", y: "2023", src: "media/3d/2023/guitar-water-2.jpg", link: "#guitar-ad" },
  { t: "Air Purifier", y: "2023", src: "media/3d/2023/air-purifier.png", c: true, link: "#triumph-modular" },

  // --- 2022 ---
  { t: "Supercharger", y: "2022", src: "media/3d/2022/supercharger.jpg", ack: "Human Model — RenderPeople" },
  { t: "Railcar", y: "2022", src: "media/3d/2022/rail-car-1.jpg", ack: "Foliage & Tree Models — Botaniq · Canoe Model — Traffiq · Human Models — Humano3D · Some textures from Textures.com and Poliigon.com" },
  { t: "Find Home", y: "2022", src: "media/3d/2022/lost-rain.jpg", ack: "Human Model — Humano3D · Rain Generator — Baga Rain Generator · Some textures from Textures.com and Poliigon.com" },
  { t: "Coffee Maker", y: "2022", src: "media/3d/2022/coffee-maker.png", c: true, link: "#triumph-modular" },
  { t: "Exterior", y: "2022", src: "media/3d/2022/exterior.jpg", f: true, c: true, link: "#triumph-modular" },
  { t: "Station", y: "2022", src: "media/3d/old/station.jpg", ack: "Human Model — RenderPeople · Some textures from Textures.com and Poliigon.com" },

  // --- 2021 ---
  { t: "Sand", y: "2021", src: "media/3d/old/sand.jpg" },
  { t: "Soda Can", y: "2021", src: "media/3d/old/soda-can.jpg" },
  { t: "Phone Booth", y: "2021", src: "media/3d/old/phone-booth.jpg", ack: "Plant Models — Botaniq · Reference Image — Ed Deasy · Some textures from Textures.com and Poliigon.com" },
  { t: "Love", y: "2021", src: "media/3d/old/love.jpg", ack: "Human Model — MakeHuman · Some textures from Textures.com" },
  { t: "Lighthouse", y: "2021", src: "media/3d/old/lighthouse-1.jpg", ack: "Grass Models — Botaniq · Some textures from Textures.com and Poliigon.com" },
  { t: "Garden", y: "2021", src: "media/3d/old/garden.jpg", ack: "Foliage & Tree Models — Botaniq · Some textures from Textures.com and Poliigon.com" },
  { t: "Classic", y: "2021", src: "media/3d/old/classic.jpg" },
  { t: "Air Balloon", y: "2021", src: "media/3d/old/air-balloon.jpg", ack: "Human Model — MakeHuman · Some textures from Textures.com" },

  // --- 2020 & earlier ---
  { t: "Spill", y: "2020", src: "media/3d/old/water.jpg" },
  { t: "Sound", y: "2020", src: "media/3d/old/sound.jpg" },
  { t: "Nature", y: "2020", src: "media/3d/old/nature.jpg", ack: "Some textures from Textures.com and Poliigon.com" },
  { t: "Rush Hour", y: "2020", src: "media/3d/old/rush-hour-1.jpg", ack: "Some textures from Textures.com and Poliigon.com" },
  { t: "Rainy", y: "2020", src: "media/3d/old/rainy-1.jpg", ack: "Human Model — Humano3D · Some textures from Textures.com and Poliigon.com" },
  { t: "Plant Protection", y: "2020", src: "media/3d/old/plant.jpg", ack: "Plant Models — Botaniq · Human Model — Humano3D · Some textures from Textures.com and Poliigon.com" },
  { t: "New", y: "2020", src: "media/3d/old/new.jpg", ack: "Human Models — RenderPeople · Some textures from Textures.com and Poliigon.com" },
  { t: "Lookout", y: "2020", src: "media/3d/old/lighthouse-3.jpg", ack: "Some textures from Textures.com" },
  { t: "Lost", y: "2020", src: "media/3d/old/lost-1.jpg", ack: "Human Model — Humano3D · Some textures from Textures.com and Poliigon.com" },
  { t: "Zoom 2.0", y: "2020", src: "media/3d/old/hand.jpg", ack: "Hand Model — Sketchfab · Some textures from Textures.com and Poliigon.com" },
  { t: "Aliens", y: "2020", src: "media/3d/old/aliens-1.jpg" },
  { t: "Beach House", y: "2020", src: "media/3d/old/beach-house.jpg", ack: "Some textures from Textures.com and Poliigon.com" },
  { t: "Vision", y: "2019", src: "media/3d/old/vision.jpg" },
  { t: "Tree", y: "2019", src: "media/3d/old/tree.jpg" },
  { t: "Shards", y: "2019", src: "media/3d/old/shards.jpg" },
  { t: "Lantern", y: "2019", src: "media/3d/old/lantern.jpg" },
  { t: "House", y: "2019", src: "media/3d/old/house-1.jpg", link: "#house" },
  { t: "City Views", y: "2019", src: "media/3d/old/city-views.jpg", ack: "Plant Models — CGTrader · Some textures from Textures.com and Poliigon.com" },
  { t: "Dash", y: "2019", src: "media/3d/old/dash.jpg" },
  { t: "Breathe", y: "2019", src: "media/3d/old/breathe.jpg" },
  { t: "Bars", y: "2019", src: "media/3d/old/bars.jpg" },
  { t: "Lighter", y: "2018", src: "media/3d/old/lighter.jpg" },
  { t: "Fade", y: "2018", src: "media/3d/old/fade.jpg", ack: "Some textures from Textures.com and Poliigon.com" },
  { t: "Livingroom", y: "2018", src: "media/3d/old/chairs.jpg", ack: "Some textures from Poliigon.com" },
  { t: "Buoy", y: "2018", src: "media/3d/old/buoy.jpg" },
  { t: "Army Radio", y: "2018", src: "media/3d/old/army-radio.jpg" },
  { t: "Two Chairs", y: "2017", src: "media/3d/old/two-chairs.jpg" },
  { t: "Modern Architecture", y: "2017", src: "media/3d/old/modern-arch.jpg", ack: "Some textures from Poliigon.com" },
  { t: "Modern Apartment", y: "2017", src: "media/3d/old/modern-apartment.jpg", ack: "Some textures from Poliigon.com" },
  { t: "Mannequin", y: "2017", src: "media/3d/old/mannequin.jpg", ack: "Some textures from Poliigon.com" },
  { t: "Bulb", y: "2017", src: "media/3d/old/bulb.jpg" },
  { t: "Barn", y: "2017", src: "media/3d/old/barn.jpg", ack: "Some textures from Poliigon.com" },
];

function ytThumb(id) {
  return "https://img.youtube.com/vi/" + id + "/hqdefault.jpg";
}

function initRenderGallery() {
  const grid = document.getElementById("render-grid");
  if (!grid) return;

  const emptyMsg = document.getElementById("render-empty");
  const filterBar = document.getElementById("render-filters");
  const toggleBtn = document.getElementById("render-toggle");
  const lightbox = document.getElementById("lightbox");
  const lbMedia = document.getElementById("lightbox-media");
  const lbMeta = document.getElementById("lightbox-meta");
  const lbClose = document.getElementById("lightbox-close");
  const lbPrev = document.getElementById("lightbox-prev");
  const lbNext = document.getElementById("lightbox-next");

  let currentList = [];
  let activeList = [];
  let currentIdx = -1;
  let currentFilter = "all";
  let expanded = false;

  function collapsedLimit() {
    return window.matchMedia("(min-width: 641px)").matches ? 15 : 8;
  }

  function matches(item, filter) {
    switch (filter) {
      case "all": return true;
      case "featured": return !!item.f;
      case "commercial": return !!item.c;
      case "earlier": return item.y !== "" && parseInt(item.y, 10) <= 2020;
      default: return item.y === filter;
    }
  }

  function buildCard(item, idx) {
    const card = document.createElement("figure");
    card.className = "render-card";
    card.setAttribute("data-idx", idx);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    const img = document.createElement("img");
    img.decoding = "async";
    img.src = item.v ? ytThumb(item.v) : item.src;
    img.alt = item.t;
    img.addEventListener("load", () => setCardSpan(card));
    img.addEventListener("error", () => setCardSpan(card));
    card.appendChild(img);

    if (item.v) {
      const badge = document.createElement("span");
      badge.className = "render-card-badge";
      badge.innerHTML = "&#9654;";
      card.appendChild(badge);
    }
    if (item.c) {
      const tag = document.createElement("span");
      tag.className = "render-card-tag";
      tag.textContent = "Commercial";
      card.appendChild(tag);
    }

    const cap = document.createElement("figcaption");
    cap.className = "render-card-cap";
    const title = document.createElement("span");
    title.className = "render-card-title";
    title.textContent = item.t;
    const year = document.createElement("span");
    year.className = "render-card-year";
    year.textContent = item.y || (item.v ? "Video" : "");
    cap.appendChild(title);
    cap.appendChild(year);
    card.appendChild(cap);

    card.addEventListener("click", () => openLightbox(currentList, idx));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(currentList, idx); }
    });
    return card;
  }

  function setCardSpan(card) {
    const img = card.querySelector("img");
    if (!img || !img.naturalWidth) return;
    const cs = getComputedStyle(grid);
    const rowH = parseFloat(cs.gridAutoRows) || 1;
    const gap = parseFloat(cs.columnGap) || 8;
    const h = card.getBoundingClientRect().height;
    if (!h) return;
    const span = Math.max(1, Math.ceil((h + gap) / rowH));
    card.style.gridRowEnd = "span " + span;
  }

  function relayout() {
    Array.prototype.forEach.call(grid.children, setCardSpan);
  }

  function updateToggle() {
    if (!toggleBtn) return;
    if (currentList.length <= collapsedLimit()) {
      toggleBtn.hidden = true;
    } else {
      toggleBtn.hidden = false;
      toggleBtn.textContent = expanded
        ? "Show fewer"
        : "Show all";
    }
  }

  function renderGrid(filter) {
    currentFilter = filter;
    currentList = RENDERS.filter((it) => matches(it, filter));
    const shown = expanded ? currentList.length : Math.min(collapsedLimit(), currentList.length);
    grid.innerHTML = "";
    for (let idx = 0; idx < shown; idx++) {
      grid.appendChild(buildCard(currentList[idx], idx));
    }
    if (emptyMsg) emptyMsg.hidden = currentList.length !== 0;
    updateToggle();
    requestAnimationFrame(relayout);
  }

  function refreshLayout() {
    const target = Math.min(collapsedLimit(), currentList.length);
    if (!expanded && grid.children.length !== target) {
      renderGrid(currentFilter);
    } else {
      relayout();
    }
  }
  window.refreshGallery = refreshLayout;

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshLayout, 150);
  });

  function openLightbox(list, idx) {
    activeList = list;
    currentIdx = idx;
    const item = list[idx];
    if (!item) return;

    lbMedia.innerHTML = "";
    if (item.v) {
      const wrap = document.createElement("div");
      wrap.className = "iframe-wrapper";
      const frame = document.createElement("iframe");
      frame.title = item.t;
      frame.frameBorder = "0";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      frame.allowFullscreen = true;
      frame.src = "https://www.youtube-nocookie.com/embed/" + item.v + "?autoplay=1&rel=0&playlist=" + item.v + "&loop=1";
      wrap.appendChild(frame);
      lbMedia.appendChild(wrap);
    } else {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.t;
      lbMedia.appendChild(img);
    }

    lbMeta.innerHTML = "";
    const h = document.createElement("h1");
    h.textContent = item.t;
    lbMeta.appendChild(h);
    if (item.y) {
      const yr = document.createElement("div");
      yr.className = "lb-year";
      yr.textContent = item.c ? "Triumph Modular · " + item.y : item.y;
      lbMeta.appendChild(yr);
    }
    if (item.ack) {
      const ack = document.createElement("div");
      ack.className = "lb-ack";
      ack.textContent = item.ack;
      lbMeta.appendChild(ack);
    }
    if (item.link) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lb-detail";
      btn.textContent = "View project details";
      btn.addEventListener("click", () => openProject(item.link));
      lbMeta.appendChild(btn);
    }

    const single = list.length <= 1;
    lbPrev.hidden = single;
    lbNext.hidden = single;

    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lb-open");
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    lbMedia.innerHTML = "";
    document.body.classList.remove("lb-open");
    currentIdx = -1;
  }

  function step(delta) {
    if (currentIdx < 0 || activeList.length === 0) return;
    const next = (currentIdx + delta + activeList.length) % activeList.length;
    openLightbox(activeList, next);
  }

  function openProject(anchorId) {
    const el = document.querySelector(anchorId);
    closeLightbox();
    if (!el) return;
    const head = el.classList.contains("project-head") ? el : el.querySelector(".project-head");
    if (head && !head.classList.contains("open")) head.click();
    (head || el).scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Filter chip clicks
  if (filterBar) {
    filterBar.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      filterBar.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      expanded = false;
      renderGrid(chip.getAttribute("data-filter"));
    });
  }

  // Show all / show fewer
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      expanded = !expanded;
      renderGrid(currentFilter);
      if (!expanded && filterBar) {
        filterBar.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Lightbox controls
  lbClose.addEventListener("click", closeLightbox);
  lbPrev.addEventListener("click", () => step(-1));
  lbNext.addEventListener("click", () => step(1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  document.querySelectorAll(".project").forEach((proj) => {
    const head = proj.querySelector(".project-head");
    const body = proj.querySelector(".project-body");
    const doToggle = () => {
      if (!head) return;
      const open = head.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
      if (body) body.hidden = !open;
    };
    if (proj.classList.contains("repo")) {
      proj.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        if (e.target.closest(".project-body")) return;
        doToggle();
      });
    } else if (head) {
      head.addEventListener("click", doToggle);
    }

    const imgs = proj.querySelectorAll(".feature-media img");
    const list = Array.prototype.map.call(imgs, (im) => ({
      t: im.getAttribute("data-title") || im.alt || "",
      y: im.getAttribute("data-year") || "",
      src: im.src
    }));
    imgs.forEach((im, i) => {
      im.addEventListener("click", () => openLightbox(list, i));
    });
  });

  renderGrid("featured");
}

document.addEventListener("DOMContentLoaded", initRenderGallery);
