import { status, form, lists, modal } from '../components';
import {
  getDailyExpense,
  getTotalDailyExpense,
} from '../data/expenseStorage.js';
import { btnAdd, expenseForm, expenseStatus } from '../constants';

const expensePage = () => {
  const dailyExpense = getDailyExpense();
  const totalDailyExpense = getTotalDailyExpense();

  return `
    <section class="col-span-12">
      ${status(expenseStatus, totalDailyExpense, 'md')}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
      <h2 class="sub-title">Add Expense</h2>
      ${form(expenseForm, btnAdd)}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
      <h2 class="sub-title">List Expenses</h2>
      ${lists(dailyExpense, 'expense')}
    </section>
    ${modal('modalForm')}
    ${modal('modalConfirm')}
`;
};

export default expensePage;
