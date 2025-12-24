// Links
const links = [
  { ref: '/', label: 'Dashboard', iconClass: 'ri-pie-chart-2-fill' },
  { ref: '/expense', label: 'Expense', iconClass: 'ri-receipt-fill' },
  { ref: '/income', label: 'Income', iconClass: 'ri-cash-fill' },
  { ref: '', label: 'Sign Out', iconClass: 'ri-user-received-2-fill' },
];

// Social media link
const socmed = {
  ref: 'https://www.instagram.com/bagasaputra666/',
  label: 'Bagas Saputra',
};

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
const icons = {
  food: 'ri-restaurant-fill',
  transport: 'ri-taxi-fill',
  health: 'ri-dossier-fill',
  bill: 'ri-bill-fill',
  entertainment: 'ri-slideshow-3-fill',
  fulltime: 'ri-calendar-schedule-fill',
  freelance: 'ri-timer-2-fill',
  profit: 'ri-bar-chart-2-fill',
  other: 'ri-shopping-bag-4-fill',
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

// Icons size class
const iconContainerSize = {
  xs: 'w-6 h-6 lg:w-7.5 lg:h-7.5 2xl:w-9 2xl:h-9 frame-xs',
  sm: 'w-9 h-9 2xl:w-10 2xl:h-10 frame-sm',
  md: 'w-10 h-10 2xl:w-11 2xl:h-11 frame-md',
  lg: 'w-11 h-11 2xl:w-12 2xl:h-12 frame-lg',
  xl: 'w-12 h-12 2xl:w-13 2xl:h-13 frame-xl',
};

const iconSize = {
  xs: 'text-base lg:text-lg 2xl:text-2xl',
  sm: 'text-xl lg:text-2xl 2xl:text-3xl',
  md: 'text-2xl lg:text-3xl 2xl:text-4xl',
  lg: 'text-3xl lg:text-4xl 2xl:text-5xl',
  xl: 'text-4xl lg:text-5xl 2xl:text-6xl',
};

export {
  links,
  icons,
  expenseForm,
  incomeForm,
  socmed,
  iconContainerSize,
  iconSize,
};
