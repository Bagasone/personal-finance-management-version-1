import { postExpense } from '../data/expenseStorage';
import { expenseValidation } from './validation';

const addExpense = () => {
  const descInput = document.querySelector('#desc');
  const ctgInput = document.querySelector('#ctg');
  const priceInput = document.querySelector('#price');
  const qtyInput = document.querySelector('#qty');

  const newExpense = {
    id: Math.round(100 * Math.random()) * Date.now(),
    desc: descInput.value,
    ctg: ctgInput.value,
    price: +priceInput.value,
    qty: +qtyInput.value,
    date: Date.now(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  const isValidExpense = expenseValidation(newExpense);

  if (isValidExpense) {
    postExpense(newExpense);
  }
};

export { addExpense };
