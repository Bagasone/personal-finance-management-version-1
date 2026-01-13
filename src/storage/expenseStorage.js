let dailyExpense = JSON.parse(localStorage.getItem('dailyExpense')) || [];

const saveDailyExpense = (newDailyExpense) => {
  if (newDailyExpense) {
    dailyExpense = newDailyExpense;
    localStorage.setItem('dailyExpense', JSON.stringify(newDailyExpense));
    return true;
  }

  return false;
};

const getDailyExpense = () => dailyExpense;

const postExpense = (newExpense) => {
  const newDailyExpense = [...dailyExpense, newExpense];
  return saveDailyExpense(newDailyExpense);
};

const deleteExpense = (id) => {
  const newDailyExpense = dailyExpense.filter((item) => item.id !== id);
  return saveDailyExpense(newDailyExpense);
};

const putExpense = (id, { desc, price, qty, ctg, updatedAt }) => {
  const newDailyExpense = dailyExpense.map((item) =>
    item.id === id ? { ...item, desc, price, ctg, qty, updatedAt } : item
  );
  return saveDailyExpense(newDailyExpense);
};

export { getDailyExpense, postExpense, deleteExpense, putExpense };
