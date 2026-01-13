import { balanceStatus, incomeStatus, expenseStatus } from '../constants';
import { getDailyExpense } from '../storage/expenseStorage.js';
import { getDailyIncome } from '../storage/incomeStorage.js';
import { status, lists } from '../components';

const dashboardPage = () => {
  const dailyExpense = getDailyExpense();
  const totalDailyExpense = dailyExpense.reduce(
    (acc, curr) => acc + curr.qty * curr.price,
    0
  );

  const dailyIncome = getDailyIncome();
  const totalDailyIncome = dailyIncome.reduce(
    (acc, curr) => acc + curr.salary,
    0
  );

  return `
      <section class="col-span-12 lg:col-span-6">
        ${status(balanceStatus, 'Rp 20.000.000', 'md')}
      </section>
      <section class="col-span-6 lg:col-span-3">
        ${status({ ...expenseStatus, iconClass: null }, totalDailyExpense)}
      </section>
      <section class="col-span-6 lg:col-span-3">
        ${status({ ...incomeStatus, iconClass: null }, totalDailyIncome)}
      </section>
      <section class="col-span-12 flex flex-col gap-3">
        <h2 class="sub-title">Most Highest Expenses:</h2>
        ${lists(dailyExpense, 'expense')}
      </section>
      <section class="col-span-12 flex flex-col gap-3">
        <h2 class="sub-title">Most Highest Incomes:</h2>
        ${lists(dailyIncome, 'income')}
      </section>
`;
};

export default dashboardPage;
