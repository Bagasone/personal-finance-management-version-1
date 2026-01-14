import { status, form, lists, modal } from '../components';
import { getDailyExpense } from '../storage/expenseStorage.js';
import {
  btnAdd,
  expenseForm,
  expenseStatus,
  idCurrencyStandard,
} from '../constants';
import { currencyFormatter } from '../helper/formatter.js';

const expensePage = () => {
  const dailyExpense = getDailyExpense();
  const totalDailyExpense = dailyExpense.reduce(
    (acc, curr) => acc + curr.qty * curr.price,
    0
  );

  const formattedDailyExpense = currencyFormatter(
    idCurrencyStandard,
    totalDailyExpense
  );

  return `
    <section class="col-span-12">
      ${status(expenseStatus, formattedDailyExpense, 'md')}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
      <h2 class="sub-title">Add Expense</h2>
      ${form(expenseForm, btnAdd)}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
      <h2 class="sub-title">List Expenses</h2>
      ${lists(dailyExpense, 'expense')}
    </section>
    ${modal('modalForm', expenseForm)}
    ${modal('modalConfirm')}
`;
};

export default expensePage;
