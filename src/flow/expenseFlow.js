import renderPage from '../ui/renderPage';
import handlePopUpUI from '../ui/handlePopUpUI';
import { getModalFormInput, getFormInput, getModalUI } from '../ui/domVar';

import {
  handleExpenseInputUI,
  handleModalExpenseInputUI,
} from '../ui/handleInputUI';

import { closeModalConfirm, closeModalForm } from '../ui/handleModalUI';

import { addExpense, deleteExpenseById, updateExpense } from '../logic/expense';

const addExpenseFlow = () => {
  const { descInput, priceInput, qtyInput, ctgInput } = getFormInput();

  const validationResult = addExpense({
    desc: descInput.value,
    price: priceInput.value,
    qty: qtyInput.value,
    ctg: ctgInput.value,
  });

  handleExpenseInputUI(validationResult);

  if (validationResult.isStoreSuccess) {
    renderPage(location.pathname);
    handlePopUpUI('Expense berhasil ditambahkan!', 'success');
  }
};

const confirmDeleteExpenseFlow = () => {
  const { modalConfirmEl } = getModalUI();

  const id = modalConfirmEl.dataset.id;
  const isDeleted = deleteExpenseById(id);

  if (isDeleted) {
    closeModalConfirm();
    renderPage(location.pathname);
    handlePopUpUI('Expense berhasil dihapus!', 'fail');
  } else {
    handlePopUpUI('Expense gagal dihapus!', 'fail');
  }
};

const confirmUpdateExpenseFlow = () => {
  const { modalFormEl } = getModalUI();
  const { descInput, priceInput, qtyInput, ctgInput } = getModalFormInput();

  const id = modalFormEl.dataset.id;

  const validationResult = updateExpense(id, {
    desc: descInput.value,
    price: priceInput.value,
    qty: qtyInput.value,
    ctg: ctgInput.value,
  });

  handleModalExpenseInputUI(validationResult);

  if (validationResult.isStoreSuccess) {
    renderPage(location.pathname);
    handlePopUpUI('Expense berhasil diperbarui!', 'success');
    closeModalForm();
  }
};

export { addExpenseFlow, confirmDeleteExpenseFlow, confirmUpdateExpenseFlow };
