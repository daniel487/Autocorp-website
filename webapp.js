// Hamburger toggle
const nav = document.querySelector('.navbar-bottom');
document.querySelector('.hamburger').onclick = () => {
  nav.classList.toggle('open');
};

// Scroll-up button
const scrollBtn = document.querySelector('.scroll-up-btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) scrollBtn.classList.add('show');
  else scrollBtn.classList.remove('show');
});
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    q.classList.toggle('open');
    let a = q.nextElementSibling;
    if (q.classList.contains('open')) {
      a.style.maxHeight = a.scrollHeight + 'px';
    } else {
      a.style.maxHeight = null;
    }
  });
});
