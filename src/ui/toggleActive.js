import { getLinksUI } from './domVar';

const toggleActive = (path) => {
  const { linksEl } = getLinksUI();

  linksEl.forEach((e) => {
    e.getAttribute('href') === path
      ? e.classList.add('active')
      : e.classList.remove('active');
  });
};

export default toggleActive;
