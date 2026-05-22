/* =========================================================
   CONCRECIA — Navegação flutuante (scroll-spy)
   ========================================================= */

(function() {
  'use strict';

  const navItems = document.querySelectorAll('.nav__item');
  const sections = Array.from(navItems).map(a => {
    const id = a.getAttribute('data-target');
    return id ? document.getElementById(id) : null;
  }).filter(Boolean);

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const setActive = (id) => {
    navItems.forEach(item => {
      item.classList.toggle('is-active', item.getAttribute('data-target') === id);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    // pega a entrada mais visível dentre as que estão intersectando
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible.length > 0) {
      setActive(visible[0].target.id);
    }
  }, {
    rootMargin: '-30% 0px -55% 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
  });

  sections.forEach(s => observer.observe(s));

  // smooth click handlers (já gerenciados via CSS scroll-behavior, mas garantimos foco)
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const id = item.getAttribute('data-target');
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActive(id);
        history.replaceState(null, '', '#' + id);
      }
    });
  });
})();
