import renderPage from '../ui/renderPage';
import handlePopUpUI from '../ui/handlePopUpUI';
import { getExpenseFormInput, getExpenseModalFormInput } from '../ui/domVar';
import {
  handleExpenseInputUI,
  handleModalExpenseInputUI,
} from '../ui/handleInputUI';
import {
  closeModalConfirm,
  closeModalForm,
  getModalConfirmId,
  getModalFormId,
} from '../ui/handleModalUI';
import { addExpense, deleteExpenseById, updateExpense } from '../logic/expense';

const addExpenseFlow = () => {
  const { descInput, priceInput, qtyInput, ctgInput } = getExpenseFormInput();

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
  const id = getModalConfirmId();
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
  const { descInput, priceInput, qtyInput, ctgInput } =
    getExpenseModalFormInput();

  const id = getModalFormId();

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
