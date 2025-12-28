import { postExpense } from '../data/expenseStorage';
import { expenseValidation } from './validation';

const addExpense = () => {
  const descInput = document.querySelector('#desc');
  const ctgInput = document.querySelector('#ctg');
  const priceInput = document.querySelector('#price');
  const qtyInput = document.querySelector('#qty');

  const now = Date.now();

  console.log(crypto.randomUUID());

  const newExpense = {
    id: crypto.randomUUID(),
    desc: descInput.value,
    ctg: ctgInput.value,
    price: +priceInput.value,
    qty: +qtyInput.value,
    date: now,
    createdAt: now,
    updatedAt: now,
  };

  const isValidExpense = expenseValidation(newExpense);

  if (isValidExpense) {
    postExpense(newExpense);
    return true;
  }
};

export { addExpense };
