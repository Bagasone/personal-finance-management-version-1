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
  delete: 'ri-delete-bin-2-fill',
  edit: 'ri-edit-box-fill',
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
    id: 'ctg',
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
    placeholder: 'Work',
  },
  {
    label: 'Category',
    id: 'ctg',
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
  xs: 'w-5 h-5 xs:w-6 xs:h-6 lg:w-7.5 lg:h-7.5 2xl:w-9 2xl:h-9 frame-xs',
  sm: 'w-9 h-9 2xl:w-10 2xl:h-10 frame-sm',
  md: 'w-10 h-10 2xl:w-11 2xl:h-11 frame-md',
  lg: 'w-11 h-11 2xl:w-12 2xl:h-12 frame-lg',
  xl: 'w-12 h-12 2xl:w-13 2xl:h-13 frame-xl',
};

const iconSize = {
  xs: 'text-sm xs:text-base lg:text-lg 2xl:text-2xl',
  sm: 'text-lg xs:text-xl lg:text-2xl 2xl:text-3xl',
  md: 'text-2xl lg:text-3xl 2xl:text-4xl',
  lg: 'text-3xl lg:text-4xl 2xl:text-5xl',
  xl: 'text-4xl lg:text-5xl 2xl:text-6xl',
};

// Button data
const btnAdd = {
  label: 'Add',
  iconClass: 'bi bi-plus-circle-fill',
  extraClass: 'mt-3 col-span-2',
  id: 'btn-add',
};

const btnUpdate = {
  label: 'Update',
  iconClass: 'bi bi-plus-circle-fill',
  extraClass: 'mt-3 col-span-2',
  id: 'btn-update',
};

const btnAccept = {
  label: 'Yes',
  iconClass: 'ri-check-fill',
  extraClass: 'text-emerald-600',
  id: 'btn-accept',
};

const btnReject = {
  label: 'No',
  iconClass: 'ri-close-fill',
  extraClass: 'text-rose-600',
  id: 'btn-reject',
};

// Status data
// Balance status
const balanceStatus = {
  label: 'Current Balance',
  iconClass: 'ri-wallet-3-fill',
  placeholder: 'No Balance Today',
};

// Expense status
const expenseStatus = {
  label: 'Current Expense',
  iconClass: 'ri-file-paper-2-fill',
  placeholder: 'No Expense',
};

// Incomes status
const incomeStatus = {
  label: 'Current Income',
  iconClass: 'ri-cash-fill',
  placeholder: 'No Income',
};

// Internationalization
const idCurrencyStandard = {
  locale: 'id-ID',
  currency: 'IDR',
  notation: 'standard',
  displaySymbol: 'symbol',
};

const idCurrencyCompact = {
  locale: 'id-ID',
  currency: 'IDR',
  notation: 'compact',
  displaySymbol: 'narrowSymbol',
};

export {
  links,
  icons,
  expenseForm,
  incomeForm,
  socmed,
  iconContainerSize,
  iconSize,
  btnAdd,
  btnUpdate,
  btnAccept,
  btnReject,
  expenseStatus,
  incomeStatus,
  balanceStatus,
  idCurrencyStandard,
  idCurrencyCompact,
};
