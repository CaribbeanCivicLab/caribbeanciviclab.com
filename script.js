(() => {
  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const sections = document.querySelectorAll(".section, .card, .footer");
  sections.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
    el.style.transition = "opacity 520ms ease, transform 520ms ease";
    el.style.transitionDelay = `${Math.min(i * 60, 360)}ms`;
  });

  window.requestAnimationFrame(() => {
    sections.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  });
})();
