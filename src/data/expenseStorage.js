let dailyExpense = JSON.parse(localStorage.getItem('dailyExpense')) || [];

const getDailyExpense = () => dailyExpense;

const postExpense = (data) => {
  dailyExpense.push(data);
  localStorage.setItem('dailyExpense', JSON.stringify(dailyExpense));
};

export { getDailyExpense, postExpense };
