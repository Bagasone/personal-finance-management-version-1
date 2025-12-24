// Links
const links = [
  { ref: '/', label: 'Dashboard', iconClass: 'ri-pie-chart-2-fill' },
  { ref: '/expense', label: 'Expense', iconClass: 'ri-receipt-fill' },
  { ref: '/income', label: 'Income', iconClass: 'ri-cash-fill' },
  { ref: '', label: 'Sign Out', iconClass: 'ri-user-received-2-fill' },
];

// Categories
const expenseCategories = [
  'food',
  'transport',
  'health',
  'bill',
  'entertainment',
  'other',
];

const incomeCategories = ['fulltime', 'freelance', 'profit', 'other'];

// Icons
const expenseIcons = {
  food: 'ri-restaurant-fill',
  transport: 'ri-taxi-fill',
  health: 'ri-dossier-fill',
  bill: 'ri-bill-fill',
  entertainment: 'ri-slideshow-3-fill',
  other: 'ri-shopping-bag-4-fill',
};

const incomeIcons = {
  fulltime: 'ri-calendar-schedule-fill',
  freelance: 'ri-timer-2-fill',
  profit: 'ri-bar-chart-2-fill',
  other: 'ri-wallet-fill',
};

// Form data
const expenseForm = [
  {
    label: 'Description',
    type: 'text',
    id: 'desc',
    placeholder: 'Coffee',
  },
  {
    label: 'Category',
    id: 'category',
    categories: expenseCategories,
  },
  {
    label: 'Price',
    type: 'number',
    id: 'price',
    placeholder: 'Rp 20.000',
  },
  {
    label: 'Quantity',
    type: 'number',
    id: 'qty',
    placeholder: '3',
  },
];

const incomeForm = [
  {
    label: 'Description',
    type: 'text',
    id: 'desc',
    placeholder: 'Coffee',
  },
  {
    label: 'Category',
    id: 'category',
    categories: incomeCategories,
  },
  {
    label: 'Salary',
    type: 'number',
    id: 'salary',
    placeholder: 'Rp 5.000.000',
  },
];

export { links, expenseIcons, incomeIcons, expenseForm, incomeForm };
