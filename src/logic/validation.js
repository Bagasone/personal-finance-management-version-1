// const incomeValidation = ({ desc, ctg, salary }) => {
//   let isValidDesc = true;
//   let isValidCtg = true;
//   let isValidSalary = true;

//   if (descValidation(desc)) isValidDesc = false;

//   if (ctgValidation(ctg)) isValidCtg = false;

//   if (salaryValidation(salary)) isValidSalary;

//   return { isValidDesc, isValidCtg, isValidSalary };
// };

// Validations
const descValidation = (desc) => {
  if (desc.trim() === '') {
    return { valid: false, message: 'Description is empty' };
  } else {
    return { valid: true };
  }
};

const priceValidation = (price) => {
  if (price <= 0) {
    return { valid: false, message: 'Price is less or equal to 0' };
  } else {
    return { valid: true };
  }
};

const qtyValidation = (qty) => {
  if (qty <= 0) {
    return { valid: false, message: 'Quantity is less or equal to 0' };
  } else {
    return { valid: true };
  }
};

const ctgValidation = (ctg) => {
  if (ctg.trim() === '') {
    return { valid: false, message: 'Category is empty' };
  } else {
    return { valid: true };
  }
};

const salaryValidation = (salary) => {
  if (salary <= 0) {
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
