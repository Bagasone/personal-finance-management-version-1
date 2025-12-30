import {
  getDailyExpense,
  postExpense,
  deleteExpense,
} from '../data/expenseStorage';
import { expenseValidation } from './validation';

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

  const { isValidDesc, isValidCtg, isValidPrice, isValidQty } =
    expenseValidation(newExpense);

  if (isValidDesc && isValidCtg && isValidPrice && isValidQty) {
    const isStoreSuccess = postExpense(newExpense);
    return {
      isValidDesc,
      isValidCtg,
      isValidPrice,
      isValidQty,
      isStoreSuccess,
    };
  }

  return { isValidDesc, isValidCtg, isValidPrice, isValidQty };
};

const findExpenseById = (id) => {
  const dailyExpense = getDailyExpense();
  return dailyExpense.find((item) => item.id === id);
};

const deleteExpenseById = (id) => {
  const isDeleted = deleteExpense(id);
  return isDeleted;
};

export { addExpense, findExpenseById, deleteExpenseById };
