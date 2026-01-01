const getTheme = () => JSON.parse(localStorage.getItem('theme')) || 'light';

const toggleTheme = (currentTheme) => {
  let theme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', JSON.stringify(theme));
  return theme;
};

export { getTheme, toggleTheme };
