const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-close");
const navMenu = document.querySelector("#nav-menu");

btnMenu.addEventListener("click", () =>{
  btnMenu.classList.add("show-menu");
  navMenu.classList.add("nav-visible");
});

btnClose.addEventListener("click", () => {
  btnMenu.classList.remove("show-menu");
  navMenu.classList.remove("nav-visible");
});

const arrowDown1 = document.querySelector("#arrow-down-1");
const arrowUp1 = document.querySelector("#arrow-up-1");
const menuSub1 = document.querySelector(".ul-features");

arrowDown1.addEventListener("click", () => {
  arrowDown1.style.display = "none";
  arrowUp1.style.display = "inline";
  menuSub1.style.display = "flex";
});

arrowUp1.addEventListener("click", () => {
  arrowDown1.style.display = "inline";
  arrowUp1.style.display = "none";
  menuSub1.style.display = "none";
}); 

const arrowDown2 = document.querySelector("#arrow-down-2");
const arrowUp2 = document.querySelector("#arrow-up-2");
const menuSub2 = document.querySelector(".ul-company");

arrowDown2.addEventListener("click", () => {
  arrowDown2.style.display = "none";
  arrowUp2.style.display = "inline";
  menuSub2.style.display = "flex";
});

arrowUp2.addEventListener("click", () => {
  arrowDown2.style.display = "inline";
  arrowUp2.style.display = "none";
  menuSub2.style.display = "none";
}); 