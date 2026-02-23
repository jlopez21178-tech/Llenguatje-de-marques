// Menu
const btnMenu = document.querySelector(".btn-menu");
const navMenu = document.querySelector("header nav");
const btnClose = document.querySelector(".btn-close");

btnMenu.addEventListener("click", () => {
  navMenu.style.display = "flex";
  btnMenu.style.display = "none";
  btnClose.style.display = "flex";
});

btnClose.addEventListener("click", () => {
  navMenu.style.display = "none";
  btnClose.style.display = "none";
  btnMenu.style.display = "flex";
})
// 