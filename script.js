// simple mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const body = document.body;

menuBtn.addEventListener('click', () => {
  body.classList.toggle('nav-open');

  const expanded = body.classList.contains('nav-open');
  menuBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
});
