// Validations
const descValidation = (desc) => {
  if (String(desc).trim() === '') {
    return { valid: false, message: 'Description is empty' };
  } else {
    return { valid: true };
  }
};

const priceValidation = (price) => {
  if (Number(price) <= 0) {
    return { valid: false, message: 'Price is less or equal to 0' };
  } else {
    return { valid: true };
  }
};

const qtyValidation = (qty) => {
  if (Number(qty) <= 0) {
    return { valid: false, message: 'Quantity is less or equal to 0' };
  } else {
    return { valid: true };
  }
};

const ctgValidation = (ctg) => {
  if (String(ctg).trim() === '') {
    return { valid: false, message: 'Category is empty' };
  } else {
    return { valid: true };
  }
};

const salaryValidation = (salary) => {
  if (Number(salary) <= 0) {
    return { valid: false, message: 'Salary is less or equal to 0' };
  } else {
    return { valid: true };
  }
};

export {
  descValidation,
  priceValidation,
  qtyValidation,
  salaryValidation,
  ctgValidation,
};
