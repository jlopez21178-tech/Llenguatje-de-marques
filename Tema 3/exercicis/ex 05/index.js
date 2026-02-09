const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
const navMenu = document.querySelector("#nav-menu");

mobileMenuBtn.addEventListener("click", () => { console.log("holis")
  
  navMenu.classList.toggle("nav-visible");
  
});