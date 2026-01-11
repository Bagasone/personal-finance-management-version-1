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

  const validation = expenseValidation({ desc, ctg, price, qty });

  const isValid = Object.values(validation).every((v) => v.valid);

  if (!isValid) {
    return { ok: false, validation };
  }

  const ok = postExpense(newExpense);
  return { ok };
};

const findEditedExpenseItemById = (id) => {
  const dailyExpense = getDailyExpense();
  const { date, createdAt, updatedAt, ...item } = dailyExpense.find(
    (item) => item.id === id
  );

  if (!item) {
    return { ok: false };
  }

  return { ok: true, data: item };
};

const deleteExpenseById = (id) => {
  if (!id) {
    return { ok: false };
  }

  const ok = deleteExpense(id);
  return { ok };
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

  const validation = expenseValidation({ desc, ctg, price, qty });

  const isValid = Object.values(validation).every(
    (valdResult) => valdResult.valid
  );

  if (!isValid) {
    return { ok: false, validation };
  }

  const ok = putExpense(id, newExpense);
  return { ok };
};

export {
  addExpense,
  findEditedExpenseItemById,
  deleteExpenseById,
  updateExpense,
};
