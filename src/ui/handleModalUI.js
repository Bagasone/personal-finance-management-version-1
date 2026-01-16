import { getDisplaySpan, getModalUI } from './domVar';
import { resetModalFormUI } from './resetInputUI';
import { currencyFormatterInput } from '../helper/formatter';
import { idCurrencyInput } from '../constants';

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

const handleInputDisplay = (e, inputId, entityName) => {
  const { displaySpan } = getDisplaySpan();

  if (e.target.closest(inputId[entityName])) {
    const input = e.target.closest(inputId[entityName]);
    const valueWithCurrency = currencyFormatterInput(
      idCurrencyInput,
      input.value
    );

    displaySpan.textContent = valueWithCurrency;
    displaySpan.classList.add('bg-gray-50');
    if (displaySpan.textContent.slice(3) === '0') {
      displaySpan.textContent = '';
      displaySpan.classList.remove('bg-gray-50');
    }
  }
};

export {
  openModalConfirm,
  openModalForm,
  closeModalConfirm,
  closeModalForm,
  handleInputDisplay,
};
