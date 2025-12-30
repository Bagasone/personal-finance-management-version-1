const toggleTheme = () => {
  let isDark = document.documentElement.dataset.theme;
  const iconTheme = document.querySelector('#toggle i');
  if (isDark !== 'dark') {
    document.documentElement.dataset.theme = 'dark';
    iconTheme.classList.remove('ri-moon-clear-fill');
    iconTheme.classList.add('ri-sun-fill');

    iconTheme.classList.remove('text-violet-800');
    iconTheme.classList.add('text-amber-400');
  } else {
    document.documentElement.dataset.theme = 'light';
    iconTheme.classList.add('ri-moon-clear-fill');
    iconTheme.classList.remove('ri-sun-fill');

    iconTheme.classList.add('text-violet-800');
    iconTheme.classList.remove('text-amber-400');
  }
};

const toggleActive = (path) => {
  document.querySelectorAll('.link').forEach((e) => {
    e.getAttribute('href') === path
      ? e.classList.add('active')
      : e.classList.remove('active');
  });
};

export { toggleTheme, toggleActive };
