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
