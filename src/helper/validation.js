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
  if (desc.trim() === '') return true;
};

const priceValidation = (price) => {
  if (price <= 0) return true;
};

const qtyValidation = (qty) => {
  if (qty <= 0) return true;
};

const ctgValidation = (ctg) => {
  if (ctg.trim() === '') return true;
};

const salaryValidation = (salary) => {
  if (salary <= 0) return true;
};

export {
  descValidation,
  priceValidation,
  qtyValidation,
  salaryValidation,
  ctgValidation,
};
