import { status, form, lists } from '../components';
import { incomes } from '../data/data.js';
import { btnAdd, incomeForm, incomeStatus } from '../constants';

const incomePage = () => {
  return `
    <section class="col-span-12">
        ${status(incomeStatus, 'Rp 20.500.00', 'md')}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
        <h2 class="sub-title">Add Income</h2>
        ${form(incomeForm, btnAdd)}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
        <h2 class="sub-title">List Incomes</h2>
        ${lists(incomes, 'income')}
    </section>
`;
};

export default incomePage;
