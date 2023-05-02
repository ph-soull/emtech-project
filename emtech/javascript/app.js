const menuBtn = document.getElementById("js-navbar-toggle");
const menu = document.getElementById("js-menu");

menuBtn.addEventListener("click", () => {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
