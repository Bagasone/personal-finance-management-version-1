// Daily expense
let dailyExpense = JSON.parse(localStorage.getItem('dailyExpense')) || [];

// Get daily expense
const getDailyExpense = () => dailyExpense;

// Total daily expense
const getTotalDailyExpense = () =>
  dailyExpense.reduce((curr, exp) => (curr += exp.price * exp.qty), 0);

// Add new expense
const postExpense = (data) => {
  dailyExpense.push(data);
  localStorage.setItem('dailyExpense', JSON.stringify(dailyExpense));
};

export { getDailyExpense, getTotalDailyExpense, postExpense };
