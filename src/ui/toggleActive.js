const toggleActive = (path) => {
  document.querySelectorAll('.link').forEach((e) => {
    e.getAttribute('href') === path
      ? e.classList.add('active')
      : e.classList.remove('active');
  });
};

export { toggleActive };
