import profile from '../assets/images/profile.jpg';

// Expenses data
const expenses = [
  {
    desc: 'Coffee',
    category: 'food',
    price: 20000,
    qty: 3,
    date: Date.now(),
  },
  {
    desc: 'Taxi',
    category: 'transport',
    price: 50000,
    qty: 1,
    date: Date.now(),
  },
  {
    desc: 'Computer',
    category: 'other',
    price: 20000000,
    qty: 1,
    date: Date.now(),
  },
];

// Incomes data
const incomes = [
  {
    desc: 'Software Engineer',
    category: 'fulltime',
    salary: 20000000,
    date: Date.now(),
  },
  {
    desc: 'Create Profile Company Web',
    category: 'freelance',
    salary: 500000,
    date: Date.now(),
  },
  {
    desc: 'Personal Finance Management',
    category: 'profit',
    salary: 5000000,
    date: Date.now(),
  },
];

// Balance data
const balance = {
  label: 'Current Balance',
  value: 'Rp 20.000.000',
  iconClass: 'ri-wallet-3-fill',
};

// Expense data
const expense = {
  label: 'Current Expense',
  value: 'Rp 500.000',
  iconClass: 'ri-file-paper-2-fill',
};

// Incomes data
const income = {
  label: 'Current Income',
  value: 'Rp 20.500.000',
  iconClass: 'ri-cash-fill',
};

// User
const user = {
  name: 'Bagas Saputra',
  profileImg: profile,
};

export { expenses, incomes, user, balance, expense, income };
