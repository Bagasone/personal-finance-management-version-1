// Components
import { status, form, lists } from '../components';

// Incomes data
import { incomes, income } from '../data/data.js';

// Constants
import { incomeForm } from '../constants';

const incomePage = () => {
  return `
    <section class="col-span-12">
        ${status(income, 'md')}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
        <h2 class="sub-title">Add Income</h2>
        ${form(incomeForm)}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
        <h2 class="sub-title">List Incomes</h2>
        ${lists(incomes, 'income')}
    </section>
`;
};

export default incomePage;
