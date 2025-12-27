const expenseValidation = ({ desc, ctg, price, qty }) => {
  let isValid = true;

  if (descValidation(desc)) isValid = false;

  if (ctgValidation(ctg)) isValid = false;

  if (priceValidation(price)) isValid = false;

  if (qtyValidation(qty)) isValid = false;

  return isValid;
};

const incomeValidation = ({ desc, ctg, salary }) => {
  let isValid = true;

  if (descValidation(desc)) isValid = false;

  if (ctgValidation(ctg)) isValid = false;

  if (salaryValidation(salary)) isValid = false;

  return isValid;
};

// Validations
const descValidation = (desc) => {
  const descInput = document.querySelector('#desc');

  if (desc.trim() === '') {
    descInput.classList.add('invalid');
    return true;
  }

  descInput.classList.remove('invalid');
};

const priceValidation = (price) => {
  const priceInput = document.querySelector('#price');

  if (price <= 0) {
    priceInput.classList.add('invalid');
    return true;
  }

  priceInput.classList.remove('invalid');
};

const qtyValidation = (qty) => {
  const qtyInput = document.querySelector('#qty');

  if (qty <= 0) {
    qtyInput.classList.add('invalid');
    return true;
  }

  qtyInput.classList.remove('invalid');
};

const ctgValidation = (ctg) => {
  const ctgInput = document.querySelector('#ctg');

  if (ctg.trim() === '') {
    ctgInput.classList.add('invalid');
    return true;
  }

  ctgInput.classList.remove('invalid');
};

const salaryValidation = (salary) => {
  const salaryInput = document.querySelector('#salary');

  if (salary <= 0) {
    salaryInput.classList.add('invalid');
    return true;
  }

  salaryInput.classList.remove('invalid');
};

export { expenseValidation, incomeValidation };
