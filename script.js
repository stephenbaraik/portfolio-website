const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item) => observer.observe(item));

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const trackableLinks = document.querySelectorAll('[data-track]');
trackableLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'click', {
        event_category: 'engagement',
        event_label: link.getAttribute('data-track'),
      });
    }
  });
});

const inquiryForm = document.querySelector('[data-track-form="inquiry_form"]');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'generate_lead', {
        method: 'form_submit',
      });
    }
  });
}
