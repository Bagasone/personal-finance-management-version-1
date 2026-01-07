import './app.css';
import 'remixicon/fonts/remixicon.css';

import renderUI, { initUI, renderPage, toggleActive } from './ui';
import { addExpense, deleteExpenseById } from './logic/expense.js';
import pageRoutes from './pages';
import { handleExpenseInputUI } from './ui/handleInputUI.js';
import { handlePopUpSuccesUI, handePopUpFailUI } from './ui/handlePopUpUI.js';
import {
  getExpenseFormInput,
  getIncomeFormInput,
  getPopUpUI,
  getModalUI,
} from './ui/domVar.js';

// Root element
const app = document.getElementById('app');
app.innerHTML = renderUI();

// Variables
const { appEl, headerEl, sidebarEl, contentEl, iconThemeEl } = initUI();

const render = (path) => {
  renderPage(contentEl, pageRoutes, path);
  toggleActive(path);
};

// Initial page
window.addEventListener('load', () => {
  render(location.pathname);
});

// Functionalities in header
headerEl.addEventListener('click', (e) => {
  // Toggle theme page
  const toggle = e.target.closest('#toggle');
  if (toggle) {
    e.preventDefault();
  }
});

// Functionalitis in sidebar
sidebarEl.addEventListener('click', (e) => {
  // Navigation between page
  const link = e.target.closest('.link');
  if (link) {
    e.preventDefault();
    render(link.getAttribute('href'));
  }
});

// Functionalities in app
appEl.addEventListener('click', (e) => {
  const { popUpEl } = getPopUpUI();
  const { modalConfirmEl, modalFormEl } = getModalUI();

  // Adding data
  const btnAdd = e.target.closest('#btn-add');
  if (btnAdd) {
    e.preventDefault();
    // Adding expense
    if (location.pathname === '/expense') {
      const { descInput, priceInput, qtyInput, ctgInput } =
        getExpenseFormInput();

      const validationResult = addExpense({
        desc: descInput.value,
        price: priceInput.value,
        qty: qtyInput.value,
        ctg: ctgInput.value,
      });

      handleExpenseInputUI(
        { descInput, priceInput, qtyInput, ctgInput },
        validationResult
      );

      if (validationResult.isStoreSuccess) {
        render(location.pathname);
        handlePopUpSuccesUI(popUpEl, 'Expense berhasil ditambahkan!');
      }
    }
  }

  // Delete data
  const btnDelete = e.target.closest('.btn-delete');
  if (btnDelete) {
    // Delete expense
    const expenseList = e.target.closest('li');

    if (location.pathname === '/expense') {
      const currentExpenseId = expenseList.dataset.idExpense;
      if (currentExpenseId) {
        modalConfirmEl.dataset.idExpense = currentExpenseId;
        modalConfirmEl.show();
      } else {
        handePopUpFailUI(popUpEl, 'Expense tidak ditemukan!');
      }
    }
  }

  // Confirm
  const btnAccept = e.target.closest('#btn-accept');
  if (btnAccept) {
    // Confirm delete expense
    if (location.pathname === '/expense') {
      const isDeleted = deleteExpenseById(modalConfirmEl.dataset.idExpense);
      if (isDeleted) {
        modalConfirmEl.dataset.idExpense = '';
        modalConfirmEl.close();
        render(location.pathname);
        handePopUpFailUI(popUpEl, 'Expense berhasil dihapus!');
      }
    }
  }

  // Reject
  const btnReject = e.target.closest('#btn-reject');
  if (btnReject) {
    modalConfirmEl.dataset.idExpense = '';
    modalConfirmEl.close();
  }

  // Edit data
  const btnEdit = e.target.closest('.btn-edit');
  if (btnEdit) {
    modalFormEl.show();
  }

  // Close modal
  const btnClose = e.target.closest('.btn-close');
  if (btnClose) {
    modalFormEl.dataset.idExpense = '';
    modalFormEl.close();
  }

  // Close modal outside the modal form
  if (modalConfirmEl.open || modalFormEl.open) {
    if (e.target.closest('dialog') !== e.target.closest('#modalConfirm form')) {
      modalConfirmEl.close();
      modalConfirmEl.dataset.idExpense = '';
    }

    if (e.target.closest('dialog') !== e.target.closest('#modalForm form')) {
      modalFormEl.close();
      modalFormEl.dataset.idExpense = '';
    }
  }
});

// Save the history of the page
window.addEventListener('popstate', () => render(location.pathname));
