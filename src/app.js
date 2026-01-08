import './app.css';
import 'remixicon/fonts/remixicon.css';

import renderUI from './ui';
import renderPage from './ui/renderPage.js';
import toggleActive from './ui/toggleActive.js';
import { toggleTheme, setTheme } from './ui/toggleTheme.js';
import {
  addDataFlow,
  closeModalFormFlow,
  confirmDeleteFlow,
  deleteFlow,
  rejectDeleteFlow,
} from './flow/index.js';

// Root element
const appEl = document.getElementById('app');
appEl.innerHTML = renderUI();

// Initial page
window.addEventListener('load', () => {
  renderPage(location.pathname);
  toggleActive(location.pathname);
  setTheme();
});

// Functionalities in app
appEl.addEventListener('click', (e) => {
  // Switch between page
  const link = e.target.closest('#sidebar .link');
  if (link) {
    e.preventDefault();
    const path = link.getAttribute('href');
    renderPage(path);
    toggleActive(path);
  }

  // Toggle theme
  const btnTheme = e.target.closest('#btn-theme');
  if (btnTheme) toggleTheme();

  // Add data flow
  const btnAdd = e.target.closest('#btn-add');
  if (btnAdd) {
    e.preventDefault();
    addDataFlow(location.pathname);
  }

  // Delete data flow
  const btnDelete = e.target.closest('.btn-delete');
  if (btnDelete) {
    // Delete expense
    const id = btnDelete.closest('li').dataset.itemId;
    const entityName = location.pathname.slice(1);
    deleteFlow({ id, entityName });
  }

  // Confirmation delete data
  const btnAcceptDelete = e.target.closest('#btn-accept');
  if (btnAcceptDelete) confirmDeleteFlow();

  // Reject delete data
  const btnRejectDelete = e.target.closest('#btn-reject');
  if (btnRejectDelete) rejectDeleteFlow();

  // // Close modal form
  // const btnClose = e.target.closest('.btn-close');
  // if (btnClose) closeModalFormFlow();
});

// Save the history of the page
window.addEventListener('popstate', () => renderPage(location.pathname));
