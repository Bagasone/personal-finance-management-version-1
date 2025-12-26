function renderPage(routes, path = '/') {
  if (window.location.pathname !== path)
    setTimeout(() => content.classList.add('animate-slide'), 0);

  // Save route in window history
  window.history.pushState({}, path, window.location.origin + path);

  const content = document.getElementById('content');
  content.classList.remove('animate-slide');

  // Return the correct page based on current pathname
  return (content.innerHTML = routes[path] ? routes[path]() : routes['/404']());
}

export default renderPage;
