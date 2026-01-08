import pageRoutes from '../pages';
import { getSectionUI } from './domVar';

// Route pages
function renderPage(path = '/') {
  const { contentEl } = getSectionUI();

  if (window.location.pathname !== path) {
    // Save route in window history
    window.history.pushState({}, path, window.location.origin + path);

    setTimeout(() => contentEl.classList.add('animate-slide'), 0);
  }

  contentEl.classList.remove('animate-slide');

  // Return the correct page based on current pathname
  return (contentEl.innerHTML = pageRoutes[path]
    ? pageRoutes[path]()
    : pageRoutes['/404']());
}

export default renderPage;
