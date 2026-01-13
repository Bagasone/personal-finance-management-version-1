import renderPage from '../ui/renderPage';
import handlePopUpUI from '../ui/handlePopUpUI';
import {
  openModalForm,
  openModalConfirm,
  closeModalConfirm,
  closeModalForm,
} from '../ui/handleModalUI';
import { resetFormUI } from '../ui/resetInputUI';
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

import {
  addIncome,
  deleteIncomeById,
  findEditedIncomeItemById,
  updateIncome,
} from '../logic/income';

const addDataFlow = (e) => {
  e.preventDefault();

  const entityName = getEntityNameFromRoute(location.pathname);

  const flowAddData = {
    expense: addExpense,
    income: addIncome,
  };

  const flow = flowAddData[entityName];
  const input = getFormValueByEntity(entityName);

  if (flow) {
    const { validation, ok } = flow(input);

    if (ok) {
      resetFormUI();
      renderPage(location.pathname);
      handlePopUpUI(`${entityName} berhasil ditambahkan!`, 'greenMessage');
    } else {
      handleInputUI(validation);
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

const confirmDeleteFlow = () => {
  const flowConfirmDelete = {
    expense: deleteExpenseById,
    income: deleteIncomeById,
  };
  const id = getItemIdFromModalConfirm();
  const entityName = getEntityNameFromRoute(location.pathname);

  const flow = flowConfirmDelete[entityName];
  if (flow) {
    const { ok } = flow(id);

    if (ok) {
      closeModalConfirm();
      renderPage(location.pathname);
      handlePopUpUI(`${entityName} berhasil dihapus!`, 'redMessage');
    } else {
      handlePopUpUI(`${entityName} gagal dihapus!`, 'redMessage');
    }
  }
};

const editFlow = (e) => {
  const id = getItemIdFromEvent(e);
  const entityName = getEntityNameFromRoute(location.pathname);

  const flowEditData = {
    expense: findEditedExpenseItemById,
    income: findEditedIncomeItemById,
  };

  if (!id) {
    return handlePopUpUI(`${entityName} tidak ditemukan!`, 'redMessage');
  }

  const flow = flowEditData[entityName];
  if (flow) {
    const { ok, data } = flow(id);

    if (ok) {
      openModalForm(data);
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
    income: updateIncome,
  };

  const flow = flowConfirmUpdate[entityName];
  const input = getModalFormValueByEntity(entityName);

  if (flow) {
    const { validation, ok } = flow(id, input);

    if (ok) {
      closeModalForm(); // Having reset modal form UI
      renderPage(location.pathname);
      handlePopUpUI(`${entityName} berhasil diperbarui!`, 'greenMessage');
    } else {
      handleModalInputUI(validation);
    }
  }
};

export { addDataFlow, deleteFlow, editFlow, confirmDeleteFlow, updateFlow };
