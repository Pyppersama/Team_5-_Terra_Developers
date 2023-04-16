const perksBtn = document.getElementById("perksBtn");
const perksListContainer = document.querySelector(".perksListWrapper");
const perksArrow = document.getElementById("perksArrow");

let isHidden = false;

perksBtn.addEventListener("click", function () {
  isHidden = !isHidden;
  perksListContainer.classList.toggle("perksListWrapperHidden", isHidden);
  perksArrow.classList.toggle("rotateArrow", isHidden);
});

console.log(isHidden);