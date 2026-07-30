// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Highlight the current page in the nav
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });

  // Contact form — static demo only.
  // To make this form actually send messages, connect it to a form service
  // such as Formspree (formspree.io) or Azure Functions + an email API,
  // then replace the code below with a real fetch()/submit call.
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const note = document.querySelector('.form-status');
      if (note) {
        note.textContent = 'Thanks! This form is not yet connected to an email service — for now, please reach out directly via email or LinkedIn below.';
      }
    });
  }
});
