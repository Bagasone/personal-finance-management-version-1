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

const expenseValidation = ({ desc, ctg, price, qty }) => ({
  isValidDesc: descValidation(desc),
  isValidPrice: priceValidation(price),
  isValidQty: qtyValidation(qty),
  isValidCtg: ctgValidation(ctg),
});

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
  if (isStoreSuccess) {
    return { ...validationResult, isStoreSuccess };
  }
};

const findEditedExpenseItemById = (id) => {
  const dailyExpense = getDailyExpense();
  const { date, createdAt, updatedAt, ...item } = dailyExpense.find(
    (item) => item.id === id
  );

  return item;
};

const deleteExpenseById = (id) => deleteExpense(id);

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
  if (isStoreSuccess) {
    return { ...validationResult, isStoreSuccess };
  }
};

export {
  addExpense,
  findEditedExpenseItemById,
  deleteExpenseById,
  updateExpense,
};
