import './app.css';
import 'remixicon/fonts/remixicon.css';

import renderUI from './ui';
import renderPage from './ui/renderPage.js';
import toggleActive from './ui/toggleActive.js';
import { toggleTheme, setTheme } from './ui/toggleTheme.js';
import {
  addDataFlow,
  confirmDeleteFlow,
  deleteFlow,
  editFlow,
  updateFlow,
} from './flow/index.js';
import { closeModalConfirm, closeModalForm } from './ui/handleModalUI.js';

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
    const id = btnDelete.closest('li').dataset.itemId;
    const entityName = location.pathname.slice(1);
    deleteFlow({ id, entityName });
  }

  // Edit data flow
  const btnEdit = e.target.closest('.btn-edit');
  if (btnEdit) {
    const id = btnEdit.closest('li').dataset.itemId;
    const entityName = location.pathname.slice(1);
    editFlow({ id, entityName });
  }

  // Confirmation delete data
  const btnAcceptDelete = e.target.closest('#btn-accept');
  if (btnAcceptDelete) confirmDeleteFlow();

  // Update data
  const btntUpdate = e.target.closest('#btn-update');
  if (btntUpdate) {
    e.preventDefault();
    updateFlow();
  }

  // Reject delete data / Close modal confirm
  const btnRejectDelete = e.target.closest('#btn-reject');
  if (btnRejectDelete) closeModalConfirm();

  // Close modal form
  const btnCloseModalForm = e.target.closest('#btn-close');
  if (btnCloseModalForm) closeModalForm();
});

// Save the history of the page
window.addEventListener('popstate', () => renderPage(location.pathname));
