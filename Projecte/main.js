// Lector scroll

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const bckImg = document.querySelector(".background-prin");
  const prinText = document.querySelector(".principal-text");
  const opi = this.document.querySelector(".opiniones");
  const platEstrella = this.document.querySelector(".plato-estrella");

  const blurValue = Math.min(scrollY / 20, 15);
  bckImg.style.filter = `blur(${blurValue}px)`;

  if (scrollY > 50) {
    prinText.style.opacity = "1";
  } else {
    prinText.style.opacity = "0";
  }

  if (scrollY > 200) {
    opi.style.opacity = "1";
  } else {
    opi.style.opacity = "0";
  }

  if (scrollY > 300) {
    platEstrella.style.opacity = "1";
  } else {
    platEstrella.style.opacity = "0";
  }
});

//
