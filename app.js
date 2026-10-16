'use strict';
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  menu.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menu.classList.toggle('is-open', isOpen);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('click', e => {
  if (!e.target.closest('.header')) closeMenu();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.classList.contains('is-open')) { closeMenu(); menuToggle.focus(); }
});
const desktopQuery = window.matchMedia('(min-width: 641px)');
desktopQuery.addEventListener('change', closeMenu);
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
function createWhatsAppMessage({name = '', occasion = '', date = '', service = ''}) {
  const lines = ['Olá, Paula! Conheci seu trabalho pelo site.'];
  if (name.trim()) lines.push(`Meu nome é ${name.trim()}.`);
  if (occasion) lines.push(`Ocasião: ${occasion}.`);
  if (date && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [y, m, d] = date.split('-');
    lines.push(`Data: ${d}/${m}/${y}.`);
  }
  if (service) lines.push(`Tenho interesse em: ${service}.`);
  lines.push('Gostaria de consultar sua disponibilidade e saber mais sobre o atendimento.');
  return lines.join('\n');
}
form.addEventListener('submit', () => {
  form.elements.text.value = createWhatsAppMessage({
    name: document.getElementById('name').value,
    occasion: document.getElementById('occasion').value,
    date: document.getElementById('event-date').value,
    service: document.getElementById('service').value
  });
});
const lightbox = document.getElementById('lightbox');
const galleryButtons = [...document.querySelectorAll('.gallery-item')];
let currentPhoto = 0;
let photoTrigger = null;
function setPhoto(index) {
  currentPhoto = (index + galleryButtons.length) % galleryButtons.length;
  const item = galleryButtons[currentPhoto];
  const image = document.getElementById('lightbox-image');
  image.src = item.dataset.image;
  image.alt = item.querySelector('img').alt;
  document.getElementById('lightbox-caption').textContent = item.dataset.caption;
}
galleryButtons.forEach((button, index) => button.addEventListener('click', () => {
  photoTrigger = button;
  setPhoto(index);
  lightbox.showModal();
  document.body.classList.add('modal-open');
}));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => setPhoto(currentPhoto - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => setPhoto(currentPhoto + 1));
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    const r = lightbox.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) lightbox.close();
  }
});
lightbox.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {e.preventDefault(); setPhoto(currentPhoto + 1);}
  if (e.key === 'ArrowLeft') {e.preventDefault(); setPhoto(currentPhoto - 1);}
});
lightbox.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  photoTrigger?.focus();
});

// Filtro interativo e animação suave na seção de avaliações
const reviewFilterBtns = document.querySelectorAll('.review-filter-btn');
const reviewCards = document.querySelectorAll('.review-card');

reviewFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    reviewFilterBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const filter = btn.dataset.filter;

    reviewCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.classList.remove('is-hidden');
        card.style.animation = 'none';
        card.offsetHeight; // trigger reflow
        card.style.animation = 'reviewFadeIn 0.35s ease forwards';
      } else {
        card.classList.add('is-hidden');
      }
    });
  });
});

