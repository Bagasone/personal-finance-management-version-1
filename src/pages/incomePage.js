import { status, form, lists, modal } from '../components';
import { btnAdd, incomeForm, incomeStatus } from '../constants';
import { getDailyIncome } from '../storage/incomeStorage';

const incomePage = () => {
  const dailyIncome = getDailyIncome();
  const totalDailyIncome = dailyIncome.reduce(
    (acc, curr) => acc + curr.salary,
    0
  );

  return `
    <section class="col-span-12">
        ${status(incomeStatus, totalDailyIncome, 'md')}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
        <h2 class="sub-title">Add Income</h2>
        ${form(incomeForm, btnAdd)}
    </section>
    <section class="col-span-12 flex flex-col gap-2.5 2xl:gap-3">
        <h2 class="sub-title">List Incomes</h2>
        ${lists(dailyIncome, 'income')}
    </section>
    ${modal('modalForm', incomeForm)}
    ${modal('modalConfirm')}
`;
};

export default incomePage;
