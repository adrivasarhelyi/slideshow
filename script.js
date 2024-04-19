'use strict';

// Selecting elements

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn-left');
const btnRight = document.querySelector('.slider__btn-right');
const dotContainer = document.querySelector('.dots');

// Neccessary variables and functions

let currentSlide = 0;
const maxSlide = slides.length;

const slideFunction = function (slide) {
  slides.forEach(
    (slide, index) => (slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
  );
};
slideFunction(0);

const rightSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0
  } else {
    currentSlide++;
  };
  slideFunction(currentSlide);
};

const leftSlide = function () {
  if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
  } else {
      currentSlide--;
  };
  slideFunction(currentSlide);
};

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
  });
};
createDots();

// slider.style.transform = 'scale(0.35) translateX(-900px)';
// slider.style.overflow = 'visible';

// Implementing the buttons

btnRight.addEventListener('click', rightSlide);
btnLeft.addEventListener('click', leftSlide);

// Attaching keyboard events

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowLeft') {
    leftSlide();
  };
  if (e.key === 'ArrowRight') {
    rightSlide();
  };
});

// Implementing the dots

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    currentSlide = e.target.dataset.slide;
    slideFunction(currentSlide);
  };
});