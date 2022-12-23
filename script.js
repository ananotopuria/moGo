// Accordion section
const toggles = document.querySelectorAll(`.acc-toggle`);
toggles.forEach((toggle) => {
  toggle.addEventListener(`click`, () => {
    toggle.parentNode.classList.toggle(`active`);
  });
});
