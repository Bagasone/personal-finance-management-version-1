import { modal } from '../components';
import { getModalUI } from './domVar';

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

const openModalForm = (id) => {
  const { modalFormEl } = getModalUI();
  modalFormEl.dataset.id = id;
  modalFormEl.show();
};

const openModalConfirm = (id) => {
  const { modalConfirmEl } = getModalUI();
  modalConfirmEl.dataset.id = id;
  modalConfirmEl.show();
};

const closeModalForm = () => {
  const { modalFormEl } = getModalUI();
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
