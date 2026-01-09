import {
  addExpenseFlow,
  confirmDeleteExpenseFlow,
  confirmUpdateExpenseFlow,
} from './expenseFlow';

import handlePopUpUI from '../ui/handlePopUpUI';
import { openModalConfirm, openModalForm } from '../ui/handleModalUI';
import { findExpenseById } from '../logic/expense';

const addDataFlow = (e) => {
  e.preventDefault();

  const flowAddData = {
    '/expense': addExpenseFlow,
  };

  const flow = flowAddData[location.pathname];
  if (flow) {
    return flow();
  }
};

const deleteFlow = (targetedEl) => {
  const id = targetedEl.closest('li').dataset.itemId;
  const entityName = location.pathname.slice(1);

  if (!id) {
    return handlePopUpUI(`${entityName} tidak ditemukan!`, 'fail');
  }

  openModalConfirm(id);
};

const editFlow = (targetedEl) => {
  const id = targetedEl.closest('li').dataset.itemId;
  const entityName = location.pathname.slice(1);

  const flowEditData = {
    '/expense': findExpenseById,
  };

  if (!id) {
    return handlePopUpUI(`${entityName} tidak ditemukan`, 'fail');
  }

  const flow = flowEditData[location.pathname];
  if (flow) {
    const { createdAt, updatedAt, date, ...editedData } = flow(id);
    return openModalForm(editedData);
  }
};

const updateFlow = (e) => {
  e.preventDefault();

  const flowConfirmUpdate = {
    '/expense': confirmUpdateExpenseFlow,
  };

  const flow = flowConfirmUpdate[location.pathname];
  if (flow) {
    return flow();
  }
};

const confirmDeleteFlow = () => {
  const flowConfirmDelete = {
    '/expense': confirmDeleteExpenseFlow,
  };

  const flow = flowConfirmDelete[location.pathname];
  if (flow) {
    return flow();
  }
};

export { addDataFlow, deleteFlow, editFlow, confirmDeleteFlow, updateFlow };
