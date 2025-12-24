function renderPage(routes, path = '/') {
  // Save route in window history
  window.history.pushState({}, path, window.location.origin + path);

  // Return the correct page based on current pathname
  return (document.getElementById('content').innerHTML = routes[path]
    ? routes[path]()
    : routes['/404']());
}

export default renderPage;
