// Components
import status from '../components/status.js';
import form from '../components/form.js';
import lists from '../components/lists.js';

// Incomes data
import { incomes } from '../data/data.js';

const incomePage = () => {
  return `
    <section class="col-span-12">
        ${status('Current Income', 'Rp 20.500.000', 'ri-cash-fill', 'md')}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
        <h2 class="sub-title">Add Income</h2>
        ${form('income', ['fulltime', 'freelance', 'profit', 'other'])}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
        <h2 class="sub-title">List Incomes</h2>
        ${lists(incomes, 'income')}
    </section>
`;
};

export default incomePage;
