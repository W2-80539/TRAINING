const slides = document.getElementsByClassName("slides");
const left = document.querySelector(".fa-angle-left");
const right = document.querySelector(".fa-angle-right");
const container = document.querySelector(".slider-slides");
let counter = 1;

right.addEventListener("click", () => {
  if (counter < slides.length) {
    container.style.transition = "ease 1s";
    container.style.transform = `translateX(-${40 * counter}%)`;
    counter++;
  } else {
    counter = 0;
    container.style.transition = "ease 1s";
    container.style.transform = `translateX(-${40 * counter}%)`;
    counter++;
  }
});

left.addEventListener("click", () => {
  if (counter > 1) {
    counter--;
    container.style.transition = "ease 1s";
    container.style.transform = `translateX(-${40 * (counter - 1)}%)`;
  } else {
    counter = slides.length;
    container.style.transition = "ease 1s";
    container.style.transform = `translateX(-${40 * (counter - 1)}%)`;
  }
});
