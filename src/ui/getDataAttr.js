import { getModalUI } from './domVar';

const getItemIdFromEvent = (e) => {
  const item = e.target.closest('li');
  return item ? item.dataset.itemId : null;
};

const getItemIdFromModalConfirm = () => {
  const { modalConfirmEl } = getModalUI();
  return modalConfirmEl ? modalConfirmEl.dataset.itemId : null;
};

const getItemIdFromModalForm = () => {
  const { modalFormEl } = getModalUI();
  return modalFormEl ? modalFormEl.dataset.itemId : null;
};

export {
  getItemIdFromEvent,
  getItemIdFromModalConfirm,
  getItemIdFromModalForm,
};
