import { getModalUI, getModalFormInput } from './domVar';
import { resetModalFormUI } from './resetInputUI';

const openModalForm = ({ id, ...item }) => {
  const { modalFormEl } = getModalUI();
  modalFormEl.dataset.itemId = id;

  for (let key in item) {
    modalFormEl.querySelector(`#${key}`).value = item[key];
  }

  modalFormEl.show();
};

const openModalConfirm = (id) => {
  const { modalConfirmEl } = getModalUI();

  modalConfirmEl.dataset.itemId = id;
  modalConfirmEl.show();
};

const closeModalForm = () => {
  const { modalFormEl } = getModalUI();

  resetModalFormUI();

  modalFormEl.dataset.itemId = '';
  modalFormEl.close();
};

const closeModalConfirm = () => {
  const { modalConfirmEl } = getModalUI();
  modalConfirmEl.dataset.itemId = '';
  modalConfirmEl.close();
};

export { openModalConfirm, openModalForm, closeModalConfirm, closeModalForm };
