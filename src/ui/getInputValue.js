import { getFormInput, getModalFormInput } from './domVar';

const getFormValueByEntity = (entity) => {
  const { descInput, priceInput, qtyInput, salaryInput, ctgInput } =
    getFormInput();

  if (entity === 'expense')
    return {
      desc: descInput.value,
      price: priceInput.value,
      qty: qtyInput.value,
      ctg: ctgInput.value,
    };

  if (entity === 'income')
    return {
      desc: descInput.value,
      salary: salaryInput.value,
      ctg: ctgInput.value,
    };
};

const getModalFormValueByEntity = (entity) => {
  const { descInput, priceInput, qtyInput, salaryInput, ctgInput } =
    getModalFormInput();

  if (entity === 'expense')
    return {
      desc: descInput.value,
      price: priceInput.value,
      qty: qtyInput.value,
      ctg: ctgInput.value,
    };

  if (entity === 'income')
    return {
      desc: descInput.value,
      salary: salaryInput.value,
      ctg: ctgInput.value,
    };
};

export { getFormValueByEntity, getModalFormValueByEntity };
