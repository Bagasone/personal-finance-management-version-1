// Validations
const descValidation = (desc) => {
  if (String(desc).trim() === '') {
    return { valid: false, message: 'EMPTY_STRING' };
  }

  return { valid: true, message: '' };
};

const priceValidation = (price) => {
  if (isNaN(Number(price))) {
    return { valid: false, message: 'NOT_A_NUMBER' };
  }

  if (Number(price) <= 0) {
    return { valid: false, message: 'INVALID_NUMBER' };
  }

  return { valid: true, message: '' };
};

const qtyValidation = (qty) => {
  if (isNaN(Number(qty))) {
    return { valid: false, message: 'NOT_A_NUMBER' };
  }
  if (Number(qty) <= 0) {
    return { valid: false, message: 'INVALID_NUMBER' };
  }

  return { valid: true, message: '' };
};

const ctgValidation = (ctg) => {
  if (String(ctg).trim() === '') {
    return { valid: false, message: 'EMPTY_STRING' };
  }

  return { valid: true, message: '' };
};

const salaryValidation = (salary) => {
  if (isNaN(Number(salary))) {
    return { valid: false, message: 'NOT_A_NUMBER' };
  }

  if (Number(salary) <= 0) {
    return { valid: false, message: 'INVALID_NUMBER' };
  }

  return { valid: true, message: '' };
};

export {
  descValidation,
  priceValidation,
  qtyValidation,
  salaryValidation,
  ctgValidation,
};
