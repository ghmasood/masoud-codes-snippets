const root = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  root.dataset.theme = savedTheme;
} else {
  root.dataset.theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    const systemTheme = e.matches ? 'dark' : 'light';
    const savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
      document.documentElement.dataset.theme = systemTheme;
    }
  });
toggleBtn.addEventListener('click', () => {
  const newTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});
