import {
  balanceStatus,
  incomeStatus,
  expenseStatus,
  idCurrencyStandard,
  idCurrencyCompact,
} from '../constants';
import { getDailyExpense } from '../storage/expenseStorage.js';
import { getDailyIncome } from '../storage/incomeStorage.js';
import { status, lists } from '../components';
import { currencyFormatter } from '../helper/formatter.js';

const dashboardPage = () => {
  const dailyExpense = getDailyExpense();
  const totalDailyExpense = dailyExpense.reduce(
    (acc, curr) => acc + curr.qty * curr.price,
    0
  );
  const formattedDailyExpense = currencyFormatter(
    idCurrencyCompact,
    totalDailyExpense
  );

const dailyIncome = getDailyIncome();
  const totalDailyIncome = dailyIncome.reduce(
    (acc, curr) => acc + curr.salary,
    0
  );

  const formattedDailyIncome = currencyFormatter(
    idCurrencyCompact,
    totalDailyIncome
  );

  const balance = totalDailyIncome - totalDailyExpense;
  const formattedBalance = currencyFormatter(idCurrencyStandard, balance);

  return `
      <section class="col-span-12 lg:col-span-6">
        ${status(balanceStatus, formattedBalance, 'md')}
      </section>
      <section class="col-span-6 lg:col-span-3">
        ${status({ ...expenseStatus, iconClass: null }, formattedDailyExpense)}
      </section>
      <section class="col-span-6 lg:col-span-3">
        ${status({ ...incomeStatus, iconClass: null }, formattedDailyIncome)}
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
