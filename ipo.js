const btnInd = document.querySelector("div > button:first-child");
const btnGrp = document.querySelector("div > button:last-child");
const txtInd = document.querySelector(".solo");
const txtGrp = document.querySelector(".grup");

btnInd.addEventListener("click", () => {
  txtInd.style.display = "flex";
  txtGrp.style.display = "none";

  btnInd.style.background = "black";
  btnGrp.style.background = "transparent";
});

btnGrp.addEventListener("click", () => {
  txtInd.style.display = "none";
  txtGrp.style.display = "flex";

  btnInd.style.background = "transparent";
  btnGrp.style.background = "black";

});