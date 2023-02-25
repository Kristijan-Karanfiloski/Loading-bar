const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

counterEl.innerText = "20%";

let index = 0;

updatePercent();

function updatePercent() {
  counterEl.innerText = index + "%";
  barEl.style.width = index + "%";

  index++;

  if (index <= 100) {
    setTimeout(updatePercent, 30);
  }
}
