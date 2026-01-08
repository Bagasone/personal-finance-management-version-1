import { addExpenseFlow, confirmDeleteExpenseFlow } from './expenseFlow';

import handlePopUpUI from '../ui/handlePopUpUI';
import { openModalConfirm } from '../ui/handleModalUI';

const addDataFlow = () => {
  const flowAddData = {
    '/expense': addExpenseFlow,
  };

  const flow = flowAddData[location.pathname];
  if (flow) return flow();
};

const deleteFlow = ({ id, entityName }) => {
  if (!id) return handlePopUpUI(`${entityName} tidak ditemukan!`, 'fail');
  openModalConfirm(id);
};

const confirmDeleteFlow = () => {
  const flowConfirmDelete = {
    '/expense': confirmDeleteExpenseFlow,
  };

  const flow = flowConfirmDelete[location.pathname];
  if (flow) return flow();
};

export { addDataFlow, deleteFlow, confirmDeleteFlow };
