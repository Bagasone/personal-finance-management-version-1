import renderPage from './renderPage';
import toggleActive from './toggleActive';

const switchPage = (e, link) => {
  e.preventDefault();
  const path = link.getAttribute('href');

  renderPage(path);
  toggleActive(path);
};

export default switchPage;
