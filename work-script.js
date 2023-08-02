document.addEventListener("DOMContentLoaded", () => {
  const leftButton = document.getElementById("switch-left");
  const rightButton = document.getElementById("switch-right");
  l_selected = true;
  r_selected = false;
  leftButton.classList.toggle("active");

  leftButton.addEventListener("mousedown", () => {
    if (!l_selected) {
      leftButton.classList.toggle("active");
      rightButton.classList.remove("active");
      l_selected = true;
      r_selected = false;
    }
  });

  rightButton.addEventListener("mousedown", () => {
    if (!r_selected) {
      rightButton.classList.toggle("active");
      leftButton.classList.remove("active");
      l_selected = false;
      r_selected = true;
    }
  });
});
