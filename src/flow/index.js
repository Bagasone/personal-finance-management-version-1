import renderPage from '../ui/renderPage';
import handlePopUpUI from '../ui/handlePopUpUI';
import {
  openModalForm,
  openModalConfirm,
  closeModalConfirm,
  closeModalForm,
} from '../ui/handleModalUI';

import { handleInputUI, handleModalInputUI } from '../ui/handleInputUI';

import {
  getFormValueByEntity,
  getModalFormValueByEntity,
} from '../ui/getInputValue';

import {
  getItemIdFromEvent,
  getItemIdFromModalConfirm,
  getItemIdFromModalForm,
} from '../ui/getDataAttr';
import { getEntityNameFromRoute } from '../ui/getRoute';
import {
  addExpense,
  deleteExpenseById,
  findEditedExpenseItemById,
  updateExpense,
} from '../logic/expense';

const addDataFlow = (e) => {
  e.preventDefault();

  const entityName = getEntityNameFromRoute(location.pathname);

  const flowAddData = {
    expense: addExpense,
  };

  const flow = flowAddData[entityName];
  const input = getFormValueByEntity(entityName);

  if (flow) {
    const result = flow(input);
    handleInputUI(result);

    if (result.isStoreSuccess) {
      renderPage(location.pathname);
      handlePopUpUI(`${entityName} berhasil ditambahkan!`, 'greenMessage');
    }
  }
};

const deleteFlow = (e) => {
  const id = getItemIdFromEvent(e);
  const entityName = getEntityNameFromRoute(location.pathname);

  if (!id) {
    return handlePopUpUI(`${entityName} tidak ditemukan!`, 'redMessage');
  }

  openModalConfirm(id);
};

const editFlow = (e) => {
  const id = getItemIdFromEvent(e);
  const entityName = getEntityNameFromRoute(location.pathname);

  const flowEditData = {
    expense: findEditedExpenseItemById,
  };

  if (!id) {
    return handlePopUpUI(`${entityName} tidak ditemukan!`, 'redMessage');
  }

  const flow = flowEditData[entityName];
  if (flow) {
    const result = flow(id);

    if (result) {
      openModalForm(result);
    } else {
      handlePopUpUI(`${entityName} tidak ditemukan!`, 'redMessage');
    }
  }
};

const updateFlow = (e) => {
  e.preventDefault();

  const id = getItemIdFromModalForm();
  const entityName = getEntityNameFromRoute(location.pathname);

  const flowConfirmUpdate = {
    expense: updateExpense,
  };

  const flow = flowConfirmUpdate[entityName];
  const input = getModalFormValueByEntity(entityName);

  if (flow) {
    const result = flow(id, input);
    handleModalInputUI(result);

    if (result.isStoreSuccess) {
      renderPage(location.pathname);
      handlePopUpUI(`${entityName} berhasil diperbarui!`, 'greenMessage');
      closeModalForm();
    }
  }
};

const confirmDeleteFlow = () => {
  const flowConfirmDelete = {
    expense: deleteExpenseById,
  };
  const id = getItemIdFromModalConfirm();
  const entityName = getEntityNameFromRoute(location.pathname);

  const flow = flowConfirmDelete[entityName];
  if (flow) {
    const result = flow(id);

    if (result) {
      closeModalConfirm();
      renderPage(location.pathname);
      handlePopUpUI(`${entityName} berhasil dihapus!`, 'redMessage');
    } else {
      handlePopUpUI(`${entityName} gagal dihapus!`, 'redMessage');
    }
  }
};

export { addDataFlow, deleteFlow, editFlow, confirmDeleteFlow, updateFlow };
