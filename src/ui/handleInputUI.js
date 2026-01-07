const handleExpenseInputUI = (
  { descInput, priceInput, qtyInput, ctgInput },
  { isValidDesc, isValidPrice, isValidCtg, isValidQty }
) => {
  isValidDesc.valid
    ? descInput.classList.remove('invalid')
    : descInput.classList.add('invalid');

  isValidPrice.valid
    ? priceInput.classList.remove('invalid')
    : priceInput.classList.add('invalid');

  isValidCtg.valid
    ? ctgInput.classList.remove('invalid')
    : ctgInput.classList.add('invalid');

  isValidQty.valid
    ? qtyInput.classList.remove('invalid')
    : qtyInput.classList.add('invalid');
};

const handleIncomeInputUI = (
  { descInput, salaryInput, ctgInput },
  { isValidDesc, isValidSalary, isValidCtg }
) => {
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

export { handleExpenseInputUI, handleIncomeInputUI };
