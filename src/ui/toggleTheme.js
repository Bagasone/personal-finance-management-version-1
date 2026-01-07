const getTheme = () => JSON.parse(localStorage.getItem('theme')) || 'light';

const toggleTheme = (currentTheme) => {
  let theme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', JSON.stringify(theme));
  return theme;
};

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme ? theme : getTheme();

  if (document.documentElement.dataset.theme === 'light') {
    iconThemeEl.classList.add('ri-moon-clear-fill');
    iconThemeEl.classList.remove('ri-sun-fill');

    iconThemeEl.classList.add('text-violet-800');
    iconThemeEl.classList.remove('text-amber-400');
  }

  if (document.documentElement.dataset.theme === 'dark') {
    iconThemeEl.classList.remove('ri-moon-clear-fill');
    iconThemeEl.classList.add('ri-sun-fill');

    iconThemeEl.classList.remove('text-violet-800');
    iconThemeEl.classList.add('text-amber-400');
  }
};

export { getTheme, toggleTheme };
