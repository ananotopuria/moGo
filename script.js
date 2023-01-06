`use strict`;

// Accordion section
const toggles = document.querySelectorAll(`.acc-toggle`);
toggles.forEach((toggle) => {
  toggle.addEventListener(`click`, () => {
    toggle.parentNode.classList.toggle(`active`);
  });
});

// Sticky Navigation

const sectionHeroEl = document.querySelector(`.section-hero`);
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add(`sticky`);
    }
    if (ent.isIntersecting) {
      document.body.classList.remove(`sticky`);
    }
  },

  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: `-80px`,
  }
);
obs.observe(sectionHeroEl);

// Smooth scrolling

document
  .querySelector(`.main-nav-list`)
  .addEventListener(`click`, function (e) {
    e.preventDefault();
    // Matching stategy
    if (e.target.classList.contains(`main-nav-link`)) {
      const id = e.target.getAttribute(`href`);
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: `smooth` });
    }
  });

// Button scrolling

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section-work`);

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: `smooth` });
});

// slider
const slider = function () {
  const slides = document.querySelectorAll(`.slide`);

  // const sliderr = document.querySelector(`.slider`);
  // sliderr.style.transform = `scale(0.2)`;
  // sliderr.style.overflow = `visible`;

  const btnLeft = document.querySelector(`.slider__btn--left`);
  const btnRight = document.querySelector(`.slider__btn--right`);

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  const init = function () {
    goToSlide(0);
  };

  init();

  // Event handlers
  btnRight.addEventListener(`click`, nextSlide);
  btnLeft.addEventListener(`click`, prevSlide);

  document.addEventListener(`keydown`, function (e) {
    if (e.key === `ArrowLeft`) prevSlide();
    e.key === `ArrowRight` && nextSlide();
  });
};
slider();
