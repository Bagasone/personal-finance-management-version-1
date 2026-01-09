// Daily expense
let dailyExpense = JSON.parse(localStorage.getItem('dailyExpense')) || [];

// Save daily expense
const saveDailyExpense = (newDailyExpense) => {
  if (newDailyExpense) {
    dailyExpense = newDailyExpense;
    localStorage.setItem('dailyExpense', JSON.stringify(newDailyExpense));
    return true;
  }

  return false;
};

// Get daily expense
const getDailyExpense = () => dailyExpense;

// Total daily expense
const getTotalDailyExpense = () =>
  dailyExpense.reduce((curr, exp) => (curr += exp.price * exp.qty), 0);

// Add new expense
const postExpense = (data) => {
  const newDailyExpense = dailyExpense.slice();
  newDailyExpense.push(data);

  return saveDailyExpense(newDailyExpense);
};

const putExpense = (id, { desc, price, qty, ctg, updatedAt }) => {
  const newDailyExpense = dailyExpense.map((item) =>
    item.id === id ? { ...item, desc, price, ctg, qty, updatedAt } : item
  );

  return saveDailyExpense(newDailyExpense);
};

const deleteExpense = (id) => {
  const newDailyExpense = dailyExpense.filter((item) => item.id !== id);
  return saveDailyExpense(newDailyExpense);
};

export {
  getDailyExpense,
  getTotalDailyExpense,
  postExpense,
  deleteExpense,
  putExpense,
};
