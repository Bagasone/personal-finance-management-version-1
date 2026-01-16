import { getFormInput, getModalFormInput, getDisplaySpan } from './domVar';
import { currencyFormatterInput } from '../helper/formatter';
import { idCurrencyInput } from '../constants';

const handleModalInputUI = ({
  isValidDesc,
  isValidPrice,
  isValidQty,
  isValidSalary,
  isValidCtg,
}) => {
  const { descInput, priceInput, qtyInput, ctgInput, salaryInput } =
    getModalFormInput();

  if (isValidDesc) {
    isValidDesc?.valid
      ? descInput.classList.remove('invalid')
      : descInput.classList.add('invalid');
  }

  if (isValidPrice) {
    isValidPrice?.valid
      ? priceInput.classList.remove('invalid')
      : priceInput.classList.add('invalid');
  }

  if (isValidQty) {
    isValidQty.valid
      ? qtyInput.classList.remove('invalid')
      : qtyInput.classList.add('invalid');
  }

  if (isValidSalary) {
    isValidSalary?.valid
      ? salaryInput.classList.remove('invalid')
      : salaryInput.classList.add('invalid');
  }

  if (isValidCtg) {
    isValidCtg?.valid
      ? ctgInput.classList.remove('invalid')
      : ctgInput.classList.add('invalid');
  }
};

const handleInputUI = ({
  isValidDesc,
  isValidPrice,
  isValidQty,
  isValidSalary,
  isValidCtg,
}) => {
  const { descInput, priceInput, qtyInput, ctgInput, salaryInput } =
    getFormInput();

  if (isValidDesc) {
    isValidDesc?.valid
      ? descInput.classList.remove('invalid')
      : descInput.classList.add('invalid');
  }

  if (isValidPrice) {
    isValidPrice?.valid
      ? priceInput.classList.remove('invalid')
      : priceInput.classList.add('invalid');
  }

  if (isValidQty) {
    isValidQty.valid
      ? qtyInput.classList.remove('invalid')
      : qtyInput.classList.add('invalid');
  }

  if (isValidSalary) {
    isValidSalary?.valid
      ? salaryInput.classList.remove('invalid')
      : salaryInput.classList.add('invalid');
  }

  if (isValidCtg) {
    isValidCtg?.valid
      ? ctgInput.classList.remove('invalid')
      : ctgInput.classList.add('invalid');
  }
};

const handleInputDisplay = (e, input) => {
  const { displaySpan } = getDisplaySpan();

  if (e.target.closest(input)) {
    const inputEl = e.target.closest(input);
    const valueWithCurrency = currencyFormatterInput(
      idCurrencyInput,
      inputEl.value
    );

    displaySpan.textContent = valueWithCurrency;
    displaySpan.classList.add('bg-gray-50');
    if (displaySpan.textContent.slice(3) === '0') {
      displaySpan.textContent = '';
      displaySpan.classList.remove('bg-gray-50');
    }
  }
};

export { handleInputUI, handleModalInputUI, handleInputDisplay };
