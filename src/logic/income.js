import {
  deleteIncome,
  getDailyIncome,
  postIncome,
  putIncome,
} from '../storage/incomeStorage';

import { descValidation, salaryValidation, ctgValidation } from './validation';

const incomeValidation = (desc, salary, ctg) => ({
  isValidDesc: descValidation(desc),
  isValidSalary: salaryValidation(salary),
  isValidCtg: ctgValidation(ctg),
});

const addIncome = ({ desc, salary, ctg }) => {
  const now = Date.now();

  const newIncome = {
    id: crypto.randomUUID(),
    desc: String(desc),
    salary: Number(salary),
    ctg: String(ctg),
    date: now,
    createdAt: now,
    updatedAt: now,
  };

  const validation = incomeValidation(desc, salary, ctg);
  const isValid = Object.values(validation).every((v) => v.valid);

  if (!isValid) {
    return { validation, ok: false };
  }

  const ok = postIncome(newIncome);
  return { ok, validation };
};

const deleteIncomeById = (id) => {
  if (!id) {
    return { ok: false };
  }

  const ok = deleteIncome(id);
  return { ok };
};

const findEditedIncomeItemById = (id) => {
  const dailyIncome = getDailyIncome();
  const { date, createdAt, updatedAt, ...item } = dailyIncome.find(
    (item) => item.id === id
  );

  if (!item) {
    return { ok: fakse };
  }

  return { ok: true, data: item };
};

const updateIncome = (id, { desc, salary, ctg }) => {
  const now = Date.now();

  const newIncome = {
    desc: String(desc),
    salary: Number(salary),
    ctg: String(ctg),
    updatedAt: now,
  };

  const validation = incomeValidation(desc, salary, ctg);
  const isValid = Object.values(validation).every((v) => v.valid);

  if (!isValid) {
    return { ok: false, validation };
  }

  const ok = putIncome(id, newIncome);
  return { ok, validation };
};

export { addIncome, deleteIncomeById, findEditedIncomeItemById, updateIncome };
