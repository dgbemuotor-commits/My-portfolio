document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    const open = links?.classList.toggle('open') ?? false;
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => links?.classList.remove('open'));
  });

  const socialMenu = document.querySelector('.floating-social');
  const socialToggle = document.querySelector('.social-toggle');

  if (socialMenu && socialToggle) {
    socialToggle.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const open = socialMenu.classList.toggle('open');
      socialToggle.setAttribute('aria-expanded', String(open));
      socialToggle.setAttribute('aria-label', open ? 'Close social media menu' : 'Open social media menu');
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const scrollTop = document.querySelector('.scroll-top');
  const updateScrollButton = () => {
    scrollTop?.classList.toggle('visible', window.scrollY > 400);
  };
  updateScrollButton();
  window.addEventListener('scroll', updateScrollButton, { passive: true });

  scrollTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});