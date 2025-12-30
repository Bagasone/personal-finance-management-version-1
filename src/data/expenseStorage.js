// Daily expense
let dailyExpense = JSON.parse(localStorage.getItem('dailyExpense')) || [];

// Save daily expense
const saveDailyExpense = (newDailyExpense) => {
  localStorage.setItem('dailyExpense', JSON.stringify(newDailyExpense));
  return true;
};

// Get daily expense
const getDailyExpense = () => dailyExpense;

// Total daily expense
const getTotalDailyExpense = () =>
  dailyExpense.reduce((curr, exp) => (curr += exp.price * exp.qty), 0);

// Add new expense
const postExpense = (data) => {
  dailyExpense.push(data);
  return saveDailyExpense(dailyExpense);
};

const deleteExpense = (id) => {
  const newDailyExpense = dailyExpense.filter((item) => item.id !== id);
  if (newDailyExpense) {
    dailyExpense = newDailyExpense;
    return saveDailyExpense(newDailyExpense);
  }
  return false;
};

export { getDailyExpense, getTotalDailyExpense, postExpense, deleteExpense };
