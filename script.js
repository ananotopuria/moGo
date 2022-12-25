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
