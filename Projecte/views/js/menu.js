
// Mostrar imagen de los platos
const plates = document.querySelectorAll(".menu article");

plates.forEach(plate => {
  const image = plate.querySelector("img");
  
  plate.addEventListener("click", () => {
    
    image.classList.toggle("img-show");

  });
});

// Mostrar filtros de los platos
const btnFilter = document.querySelector(".categorias li:first-child button")
const filter = document.querySelector(".filtro")

btnFilter.addEventListener("click", () => {

  filter.classList.toggle("filter-show");

});

// mostrar platos segun categoria
const btnStarter =document.querySelector(".filtro li:nth-child(2) button");
const btnFirst = document.querySelector(".filtro li:nth-child(3) button");
const btnSecond = document.querySelector(".filtro li:nth-child(4) button");
const btnDessert = document.querySelector(".filtro li:nth-child(5) button");

const starter = document.querySelectorAll(".entrante");
const first = document.querySelectorAll(".primero");
const second = document.querySelectorAll(".segundo");
const dessert = document.querySelectorAll(".postre");

btnStarter.addEventListener("click", () => {

  starter.forEach(start => {
    start.classList.toggle("starter-show");
  })

});


