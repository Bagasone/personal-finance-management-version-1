// Data
import { expenses, incomes, balance, expense, income } from '../data/data.js';

// Helper
import { sortByHighest } from '../helper';

// Components
import { status, lists } from '../components';

const dashboardPage = () => {
  return `
      <section class="col-span-12 lg:col-span-6">
        ${status(balance, 'md')}
      </section>
      <section class="col-span-6 lg:col-span-3">
        ${status({ ...expense, iconClass: null })}
      </section>
      <section class="col-span-6 lg:col-span-3">
        ${status({ ...income, iconClass: null })}
      </section>
      <section class="col-span-12 flex flex-col gap-3">
        <h2 class="sub-title">Most Highest Expenses:</h2>
        ${lists(sortByHighest(expenses), 'expense')}
      </section>
      <section class="col-span-12 flex flex-col gap-3">
        <h2 class="sub-title">Most Highest Incomes:</h2>
        ${lists(sortByHighest(incomes), 'income')}
      </section>
`;
};

export default dashboardPage;
