document.addEventListener("DOMContentLoaded", () => {
  function showDivById (id) {
    var div = document.getElementById(id);
    $(div).fadeIn(200);
  }

  showDivById("about");
});
