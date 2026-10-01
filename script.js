document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const socialMenu = document.querySelector('.floating-social');
  const socialToggle = document.querySelector('.social-toggle');

  socialToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = socialMenu.classList.toggle('open');
    socialToggle.setAttribute('aria-expanded', String(open));
    socialToggle.querySelector('.social-toggle-icon').textContent = open ? '×' : '☰';
  });

  document.addEventListener('click', (event) => {
    if (socialMenu && !socialMenu.contains(event.target)) {
      socialMenu.classList.remove('open');
      socialToggle?.setAttribute('aria-expanded', 'false');
      const icon = socialToggle?.querySelector('.social-toggle-icon');
      if (icon) icon.textContent = '☰';
    }
  });
});