import { getFormInput, getModalFormInput } from './domVar';

const handleExpenseInputUI = ({
  isValidDesc,
  isValidPrice,
  isValidCtg,
  isValidQty,
}) => {
  const { descInput, priceInput, qtyInput, ctgInput } = getFormInput();

  isValidDesc.valid
    ? descInput.classList.remove('invalid')
    : descInput.classList.add('invalid');

  isValidPrice?.valid
    ? priceInput.classList.remove('invalid')
    : priceInput.classList.add('invalid');

  isValidCtg?.valid
    ? ctgInput.classList.remove('invalid')
    : ctgInput.classList.add('invalid');

  isValidQty.valid
    ? qtyInput.classList.remove('invalid')
    : qtyInput.classList.add('invalid');
};

const handleIncomeInputUI = ({ isValidDesc, isValidSalary, isValidCtg }) => {
  const { descInput, ctgInput, salaryInput } = getFormInput();

  isValidDesc.valid
    ? descInput.classList.remove('invalid')
    : descInput.classList.add('invalid');

  isValidSalary.valid
    ? salaryInput.classList.remove('invalid')
    : salaryInput.classList.add('invalid');

  isValidCtg.valid
    ? ctgInput.classList.remove('invalid')
    : ctgInput.classList.add('invalid');
};

const handleModalExpenseInputUI = ({
  isValidDesc,
  isValidPrice,
  isValidCtg,
  isValidQty,
}) => {
  const { descInput, priceInput, qtyInput, ctgInput } = getModalFormInput();

  isValidDesc.valid
    ? descInput.classList.remove('invalid')
    : descInput.classList.add('invalid');

  isValidPrice?.valid
    ? priceInput.classList.remove('invalid')
    : priceInput.classList.add('invalid');

  isValidCtg?.valid
    ? ctgInput.classList.remove('invalid')
    : ctgInput.classList.add('invalid');

  isValidQty.valid
    ? qtyInput.classList.remove('invalid')
    : qtyInput.classList.add('invalid');
};

const handleModalIncomeInputUI = ({
  isValidDesc,
  isValidSalary,
  isValidCtg,
}) => {
  const { descInput, ctgInput, salaryInput } = getModalFormInput();

  isValidDesc.valid
    ? descInput.classList.remove('invalid')
    : descInput.classList.add('invalid');

  isValidSalary.valid
    ? salaryInput.classList.remove('invalid')
    : salaryInput.classList.add('invalid');

  isValidCtg.valid
    ? ctgInput.classList.remove('invalid')
    : ctgInput.classList.add('invalid');
};

export {
  handleExpenseInputUI,
  handleIncomeInputUI,
  handleModalExpenseInputUI,
  handleModalIncomeInputUI,
};
