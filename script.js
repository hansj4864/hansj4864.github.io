/**
 * Edit these values before publishing. Leave empty if the information is not public.
 */
const profile = {
  githubUrl: '', // e.g. 'https://github.com/your-id'
  email: '', // e.g. 'yourname@example.com'
};

const buttons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

const githubLinks = document.querySelectorAll('[data-github-link]');
githubLinks.forEach((link) => {
  if (profile.githubUrl) {
    link.href = profile.githubUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.removeAttribute('aria-disabled');
  } else {
    link.addEventListener('click', (event) => event.preventDefault());
    link.title = 'script.js에서 GitHub 주소를 설정하세요.';
  }
});

document.querySelectorAll('[data-email-link]').forEach((link) => {
  if (profile.email) {
    link.href = `mailto:${profile.email}`;
  } else {
    link.href = '#contact';
    link.title = 'script.js에서 이메일 주소를 설정하세요.';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
