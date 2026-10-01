const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();


const socialMenu = document.querySelector('.floating-social');
const socialToggle = document.querySelector('.social-toggle');

socialToggle?.addEventListener('click', () => {
  const open = socialMenu.classList.toggle('open');
  socialToggle.setAttribute('aria-expanded', String(open));
});

document.addEventListener('click', (event) => {
  if (socialMenu && !socialMenu.contains(event.target)) {
    socialMenu.classList.remove('open');
    socialToggle?.setAttribute('aria-expanded', 'false');
  }
});
