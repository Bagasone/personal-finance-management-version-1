import { getFormInput, getModalFormInput } from './domVar';

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

export { handleInputUI, handleModalInputUI };
