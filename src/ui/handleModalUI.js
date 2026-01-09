import { getModalUI, getModalFormInput } from './domVar';

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

const closeModalForm = () => {
  const { modalFormEl } = getModalUI();

  const { descInput, ctgInput, priceInput, qtyInput, salaryInput } =
    getModalFormInput();

  if (descInput) descInput.value = '';
  if (priceInput) priceInput.value = '';
  if (qtyInput) qtyInput.value = '';
  if (salaryInput) salaryInput.value = '';
  if (ctgInput) ctgInput.value = '';

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
