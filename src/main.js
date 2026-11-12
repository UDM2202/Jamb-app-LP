import '@fontsource-variable/source-serif-4/wght.css';
import '@fontsource/ibm-plex-sans/latin-400.css';
import '@fontsource/ibm-plex-sans/latin-500.css';
import '@fontsource/ibm-plex-sans/latin-600.css';
import '@fontsource/ibm-plex-mono/latin-400.css';
import '@fontsource/ibm-plex-mono/latin-500.css';

import { mountBeam } from './beam.js';
import { CONTACT_EMAIL } from './site.config.js';

mountBeam();

// Mobile navigation
const toggle = document.querySelector('.nav__toggle');
const list = document.getElementById('nav-list');
if (toggle && list) {
  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    list.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    list.classList.toggle('is-open', open);
  });
  list.addEventListener('click', (event) => {
    if (event.target.closest('a')) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

// Mark the section currently in view in the navigation.
const links = new Map(
  [...document.querySelectorAll('.nav__list a[href^="#"]')].map((a) => [a.getAttribute('href').slice(1), a]),
);
const spy = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const [id, a] of links) {
        if (id === entry.target.id) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      }
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
for (const id of links.keys()) {
  const section = document.getElementById(id);
  if (section) spy.observe(section);
}

// Enquiry form. There is no server behind this page by design: the form
// composes a plain email and hands it to the visitor's own mail client.
const mailLink = document.getElementById('mail-link');
if (mailLink) {
  mailLink.href = `mailto:${CONTACT_EMAIL}`;
  mailLink.textContent = CONTACT_EMAIL;
}

const form = document.getElementById('enquiry');
if (form) {
  const note = document.getElementById('form-note');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalid = [...form.elements].find((f) => f.willValidate && !f.checkValidity());
    for (const f of form.elements) {
      if (f.willValidate) f.toggleAttribute('aria-invalid', !f.checkValidity());
    }
    if (invalid) {
      note.textContent = 'Please add your name and a short description of the problem.';
      invalid.focus();
      return;
    }
    const data = new FormData(form);
    const org = data.get('org') ? ` (${data.get('org')})` : '';
    const subject = `Enquiry: ${data.get('kind')}`;
    const body = `${data.get('message')}\n\n${data.get('name')}${org}`;
    note.textContent = 'Your email application should now be open with the message ready to send.';
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
