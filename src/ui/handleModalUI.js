import { getDisplaySpan, getModalUI } from './domVar';
import { resetModalFormUI } from './resetInputUI';
import { currencyFormatterInput } from '../helper/formatter';
import { idCurrencyInput } from '../constants';

const openModalForm = ({ id, ...item }) => {
  const { modalFormEl } = getModalUI();
  modalFormEl.dataset.itemId = id;

  for (let key in item) {
    modalFormEl.querySelector(`#${key}`).value = item[key];

    if (key === 'price') {
      setCurrencyInputModal(modalFormEl.querySelector(`#${key}`));
    }

    if (key === 'salary') {
      setCurrencyInputModal(modalFormEl.querySelector(`#${key}`));
    }
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

const handleInputModalDisplay = (e, input) => {
  const { displaySpanModal } = getDisplaySpan();

  if (e.target.closest(`dialog ${input}`)) {
    const inputEl = e.target.closest(`dialog ${input}`);
    setCurrencyInputModal(inputEl, displaySpanModal);
    if (displaySpanModal.textContent.slice(3) === '0') {
      displaySpanModal.textContent = '';
      displaySpanModal.classList.remove('bg-gray-50');
    }
  }
};

const setCurrencyInputModal = (inputEl) => {
  const { displaySpanModal } = getDisplaySpan();

  const valueWithCurrency = currencyFormatterInput(
    idCurrencyInput,
    inputEl.value
  );
  displaySpanModal.textContent = valueWithCurrency;
  displaySpanModal.classList.add('bg-gray-50');
};

export {
  openModalConfirm,
  openModalForm,
  closeModalConfirm,
  closeModalForm,
  handleInputModalDisplay,
};
