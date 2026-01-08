import { getExpenseFormInput, getModalUI } from '../ui/domVar';
import { handleExpenseInputUI } from '../ui/handleInputUI';
import handlePopUpUI from '../ui/handlePopUpUI';
import { addExpense, deleteExpenseById } from '../logic/expense';
import renderPage from '../ui/renderPage';

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
  const { modalConfirmEl } = getModalUI();

  const id = modalConfirmEl.dataset.id;
  const isDeleted = deleteExpenseById(id);

  if (isDeleted) {
    modalConfirmEl.dataset.id = '';
    modalConfirmEl.close();
    renderPage(location.pathname);
    handlePopUpUI('Expense berhasil dihapus!', 'fail');
  } else {
    handlePopUpUI('Expense gagal dihapus!', 'fail');
  }
};

export { addExpenseFlow, confirmDeleteExpenseFlow };
