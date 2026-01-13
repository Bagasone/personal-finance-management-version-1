let dailyIncome = JSON.parse(localStorage.getItem('dailyIncome')) || [];

const saveDailyIncome = (newDailyIncome) => {
  if (newDailyIncome) {
    dailyIncome = newDailyIncome;
    localStorage.setItem('dailyIncome', JSON.stringify(newDailyIncome));
    return true;
  }

  return false;
};

const getDailyIncome = () => dailyIncome;

const postIncome = (newIncome) => {
  const newDailyIncome = [...dailyIncome, newIncome];
  return saveDailyIncome(newDailyIncome);
};

const deleteIncome = (id) => {
  const newDailyIncome = dailyIncome.filter((item) => item.id !== id);
  return saveDailyIncome(newDailyIncome);
};

const putIncome = (id, { desc, salary, ctg, updatedAt }) => {
  const newDailyIncome = dailyIncome.map((item) =>
    item.id === id ? { ...item, desc, salary, ctg, updatedAt } : item
  );
  return saveDailyIncome(newDailyIncome);
};

export { getDailyIncome, postIncome, deleteIncome, putIncome };
