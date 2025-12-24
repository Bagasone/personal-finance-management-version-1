// Data
import { expenses, incomes } from '../data/data.js';

// Helper
import { sortByHighest } from '../helper/sort.js';

// Components
import lists from '../components/lists.js';
import status from '../components/status.js';

const dashboardPage = () => {
  return `
      <section class="col-span-12 lg:col-span-6">
        ${status('Current Balance', 'Rp 20.000.000', 'ri-wallet-3-fill', 'md')}
      </section>
      <section class="col-span-6 lg:col-span-3">
        ${status('Current Expense', 'Rp 500 Ribu', '')}
      </section>
      <section class="col-span-6 lg:col-span-3">
        ${status('Current Income', 'Rp 20,5 Juta', '')}
      </section>
      <section class="col-span-12 flex flex-col gap-3">
        <h2 class="sub-title">Most Highest Expenses:</h2>
        ${lists(sortByHighest(expenses, 'price'), 'expense')}
      </section>
      <section class="col-span-12 flex flex-col gap-3">
        <h2 class="sub-title">Most Highest Incomes:</h2>
        ${lists(sortByHighest(incomes), 'income')}
      </section>
`;
};

export default dashboardPage;
