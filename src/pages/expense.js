// Components
import status from '../components/status.js';
import form from '../components/form.js';
import lists from '../components/lists.js';

// Expenses data
import { expenses } from '../data/data.js';

const expensePage = () => {
  return `
    <section class="col-span-12">
      ${status('Current Expense', 'Rp 500.000', 'ri-file-paper-2-fill', 'md')}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
      <h2 class="sub-title">Add Expense</h2>
      ${form('expense', [
        'food',
        'transport',
        'work',
        'health',
        'bill',
        'entertainment',
        'other',
      ])}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
      <h2 class="sub-title">List Expenses</h2>
      ${lists(expenses, 'expense')}
    </section>
`;
};

export default expensePage;
