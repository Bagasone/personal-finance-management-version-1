// Route pages
function routePage(mainElement, routes, path = '/') {
  if (window.location.pathname !== path)
    setTimeout(() => mainElement.classList.add('animate-slide'), 0);
  // Save route in window history
  window.history.pushState({}, path, window.location.origin + path);

  mainElement.classList.remove('animate-slide');

  // Return the correct page based on current pathname
  return (mainElement.innerHTML = routes[path]
    ? routes[path]()
    : routes['/404']());
}

export default routePage;
