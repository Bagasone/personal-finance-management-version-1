import {
  getDailyExpense,
  postExpense,
  deleteExpense,
  putExpense,
} from '../storage/expenseStorage';

import {
  descValidation,
  priceValidation,
  qtyValidation,
  ctgValidation,
} from './validation';

const expenseValidation = ({ desc, ctg, price, qty }) => {
  let validationResult = {
    isValidDesc: descValidation(desc),
    isValidPrice: priceValidation(price),
    isValidQty: qtyValidation(qty),
    isValidCtg: ctgValidation(ctg),
  };

  return validationResult;
};

const addExpense = ({ desc, ctg, price, qty }) => {
  const now = Date.now();

  const newExpense = {
    id: crypto.randomUUID(),
    desc: String(desc),
    ctg: String(ctg),
    price: Number(price),
    qty: Number(qty),
    date: now,
    createdAt: now,
    updatedAt: now,
  };

  const validationResult = expenseValidation({ desc, ctg, price, qty });

  for (let key in validationResult) {
    if (!validationResult[key].valid) return validationResult;
  }

  const isStoreSuccess = postExpense(newExpense);
  return { ...validationResult, isStoreSuccess };
};

const findExpenseById = (id) => {
  const dailyExpense = getDailyExpense();
  return dailyExpense.find((item) => item.id === id);
};

const deleteExpenseById = (id) => {
  const isExpenseExist = findExpenseById(id);
  if (isExpenseExist) {
    return deleteExpense(id);
  } else {
    return false;
  }
};

const updateExpense = (id, { desc, price, qty, ctg }) => {
  const now = Date.now();

  const newExpense = {
    desc: String(desc),
    ctg: String(ctg),
    price: Number(price),
    qty: Number(qty),
    updatedAt: now,
  };

  const validationResult = expenseValidation({ desc, ctg, price, qty });

  for (let key in validationResult) {
    if (!validationResult[key].valid) return validationResult;
  }

  const isStoreSuccess = putExpense(id, newExpense);
  return { ...validationResult, isStoreSuccess };
};

export { addExpense, findExpenseById, deleteExpenseById, updateExpense };
