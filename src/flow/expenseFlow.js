import renderPage from '../ui/renderPage';
import handlePopUpUI from '../ui/handlePopUpUI';
import { getExpenseFormInput } from '../ui/domVar';
import { handleExpenseInputUI } from '../ui/handleInputUI';
import { closeModalConfirm, getModalConfirmId } from '../ui/handleModalUI';
import { addExpense, deleteExpenseById } from '../logic/expense';

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

export { addExpenseFlow, confirmDeleteExpenseFlow };
