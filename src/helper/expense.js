import { postExpense } from '../data/expenseStorage';
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
    postExpense(newExpense);
  }

  return { isValidDesc, isValidCtg, isValidPrice, isValidQty };
};

export { addExpense };
