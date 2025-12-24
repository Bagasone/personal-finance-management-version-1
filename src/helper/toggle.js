const toggleTheme = (el) => {
  let isDark = document.documentElement.dataset.theme;
  if (isDark !== 'dark') {
    document.documentElement.dataset.theme = 'dark';
    el.classList.remove('ri-moon-clear-fill');
    el.classList.add('ri-sun-fill');

    el.classList.remove('text-violet-800');
    el.classList.add('text-amber-400');
  } else {
    document.documentElement.dataset.theme = 'light';
    el.classList.add('ri-moon-clear-fill');
    el.classList.remove('ri-sun-fill');

    el.classList.add('text-violet-800');
    el.classList.remove('text-amber-400');
  }
};

const toggleActive = (el) => {
  document.querySelectorAll('.link').forEach((e) => {
    e.classList.remove('active');
  });

  el.classList.add('active');
};

export { toggleTheme, toggleActive };
