const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const dots = document.querySelectorAll(".btn-goto");
const dotContainer = document.querySelectorAll(".btn-container");
const img = document.querySelectorAll(".img");

let curSlide = 0;

const dotChanger = function (num) {
  dots.forEach(function (dot) {
    dot.style.backgroundColor = "#fff";
  });
  document.querySelector(
    `.btn-container button:nth-child(${num})`
  ).style.backgroundColor = "#f59f00";
};

btnNext.addEventListener("click", function () {
  if (curSlide == 3) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  img.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
  dotChanger(curSlide + 1);
});
btnPrev.addEventListener("click", function () {
  if (curSlide == 0) {
    curSlide = 3;
  } else {
    curSlide--;
  }
  img.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });

  dotChanger(curSlide + 1);
});
