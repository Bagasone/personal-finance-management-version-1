import {
  getDailyExpense,
  postExpense,
  deleteExpense,
} from '../data/expenseStorage';
import {
  descValidation,
  priceValidation,
  qtyValidation,
  ctgValidation,
} from '../helper/validation';

const expenseValidation = ({ desc, ctg, price, qty }) => {
  let validationResult = {
    isValidDesc: true,
    isValidPrice: true,
    isValidQty: true,
    isValidCtg: true,
  };

  if (descValidation(desc)) validationResult.isValidDesc = false;
  if (ctgValidation(ctg)) validationResult.isValidCtg = false;
  if (priceValidation(price)) validationResult.isValidPrice = false;
  if (qtyValidation(qty)) validationResult.isValidQty = false;

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
  const isExpenseExist = findExpenseById(id);
  if (isExpenseExist) {
    return deleteExpense(id);
  } else {
    return false;
  }
};

export { addExpense, findExpenseById, deleteExpenseById };
