import { addExpenseFlow, confirmDeleteExpenseFlow } from './expenseFlow';

import { getModalUI } from '../ui/domVar';
import handlePopUpUI from '../ui/handlePopUpUI';

const addDataFlow = () => {
  const flowAddData = {
    '/expense': addExpenseFlow,
  };

  const flow = flowAddData[location.pathname];
  if (flow) flow();
};

const deleteFlow = ({ id, entityName }) => {
  const { modalConfirmEl } = getModalUI();

  if (!id) {
    handlePopUpUI(`${entityName} tidak ditemukan!`, 'fail');
    return;
  }

  modalConfirmEl.dataset.id = id;
  modalConfirmEl.show();
};

const confirmDeleteFlow = () => {
  const flowConfirmDelete = {
    '/expense': confirmDeleteExpenseFlow,
  };

  const flow = flowConfirmDelete[location.pathname];
  if (flow) flow();
};

const rejectDeleteFlow = () => {
  const { modalConfirmEl } = getModalUI();

  modalConfirmEl.dataset.id = '';
  modalConfirmEl.close();
};

const closeModalFormFlow = () => {
  const { modalFormEl } = getModalUI();

  modalFormEl.dataset.id = '';
  modalFormEl.close();
};

export {
  addDataFlow,
  deleteFlow,
  confirmDeleteFlow,
  rejectDeleteFlow,
  closeModalFormFlow,
};
