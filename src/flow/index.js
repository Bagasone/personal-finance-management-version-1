import {
  addExpenseFlow,
  confirmDeleteExpenseFlow,
  confirmUpdateExpenseFlow,
} from './expenseFlow';

import handlePopUpUI from '../ui/handlePopUpUI';
import {
  getModalFormId,
  openModalConfirm,
  openModalForm,
} from '../ui/handleModalUI';
import { findExpenseById } from '../logic/expense';
import { getModalUI } from '../ui/domVar';

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

const editFlow = ({ id, entityName }) => {
  const flowEditData = {
    '/expense': findExpenseById,
  };

  if (!id) return handlePopUpUI(`${entityName} tidak ditemukan`, 'fail');

  const flow = flowEditData[location.pathname];
  if (flow) {
    const { createdAt, updatedAt, date, ...editedData } = flow(id);
    openModalForm(editedData);
  }
};

const updateFlow = () => {
  const flowConfirmUpdate = {
    '/expense': confirmUpdateExpenseFlow,
  };

  const flow = flowConfirmUpdate[location.pathname];
  if (flow) {
    flow();
  }
};

const confirmDeleteFlow = () => {
  const flowConfirmDelete = {
    '/expense': confirmDeleteExpenseFlow,
  };

  const flow = flowConfirmDelete[location.pathname];
  if (flow) return flow();
};

export { addDataFlow, deleteFlow, editFlow, confirmDeleteFlow, updateFlow };
