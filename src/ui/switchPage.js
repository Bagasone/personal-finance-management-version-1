import renderPage from './renderPage';
import toggleActive from './toggleActive';

const switchPage = (e) => {
  e.preventDefault();
  const path = e.target.closest('#sidebar .link').getAttribute('href');

  renderPage(path);
  toggleActive(path);
};

export default switchPage;
