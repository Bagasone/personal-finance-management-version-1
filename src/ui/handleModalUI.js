import {
  getExpenseModalFormInput,
  getIncomeFormInput,
  getModalUI,
} from './domVar';

const getModalFormId = () => {
  const { modalFormEl } = getModalUI();
  const id = modalFormEl.dataset.id;
  return id;
};

const getModalConfirmId = () => {
  const { modalConfirmEl } = getModalUI();
  const id = modalConfirmEl.dataset.id;
  return id;
};

const openModalForm = ({ id, ...inputData }) => {
  const { modalFormEl } = getModalUI();
  modalFormEl.dataset.id = id;

  for (let key in inputData) {
    modalFormEl.querySelector(`#${key}`).value = inputData[key];
  }

  modalFormEl.show();
};

const openModalConfirm = (id) => {
  const { modalConfirmEl } = getModalUI();
  modalConfirmEl.dataset.id = id;
  modalConfirmEl.show();
};

const closeModalForm = (type) => {
  const { modalFormEl } = getModalUI();
  const { descInput, priceInput, qtyInput, ctgInput } =
    getExpenseModalFormInput();

  // const { salaryInput } = getIncomeFormInput();

  descInput.value = '';
  priceInput.value = '';
  qtyInput.value = '';
  ctgInput.value = '';

  modalFormEl.dataset.id = '';
  modalFormEl.close();
};

const closeModalConfirm = () => {
  const { modalConfirmEl } = getModalUI();
  modalConfirmEl.dataset.id = '';
  modalConfirmEl.close();
};

export {
  getModalConfirmId,
  getModalFormId,
  openModalConfirm,
  openModalForm,
  closeModalConfirm,
  closeModalForm,
};
