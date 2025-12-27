// Components
import { status, form, lists } from '../components';

// Expenses data
import { expense } from '../data/data.js';
import { getDailyExpense } from '../data/expenseStorage.js';

// Constants
import { expenseForm } from '../constants';

const expensePage = () => {
  const dailyExpense = getDailyExpense();

  return `
    <section class="col-span-12">
      ${status(expense, 'md')}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
      <h2 class="sub-title">Add Expense</h2>
      ${form(expenseForm)}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
      <h2 class="sub-title">List Expenses</h2>
      ${lists(dailyExpense, 'expense')}
    </section>
`;
};

export default expensePage;
