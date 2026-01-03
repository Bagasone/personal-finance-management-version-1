import './app.css';
import 'remixicon/fonts/remixicon.css';

import { addExpense, deleteExpenseById } from './app/expense.js';
import { dashboardPage, expensePage, incomePage, notFoundPage } from './pages';
import { toggleActive, getTheme, toggleTheme, routePage } from './helper';
import { navbar, sidebar, text, link, popup, modal } from './components';
import { socmed } from './constants';

// Routing pages
const routes = {
  '/': dashboardPage,
  '/expense': expensePage,
  '/income': incomePage,
  '/404': notFoundPage,
};

// Root element
const app = document.getElementById('app');
app.innerHTML = `
<div class="
  max-w-screen min-h-screen py-6 px-6
  flex flex-col gap-5 items-center
  font-[Poppins] tracking-tighter text-gray-900 bg-gray-100
  transition-all duration-300 ease-in-out
  sm:px-18 md:px-20 lg:px-22 xl:px-24 2xl:p-26
  dark:bg-gray-900 dark:text-gray-200">
  <header id="header" class="relative z-1 min-w-full">
    ${navbar()}
  </header>
  <main id="main" class="
    min-w-full grid grid-cols-12 gap-5 pt-12 
    sm:pt-14 md:pt-18 lg:pt-20 xl:pt-22 2xl:pt-12">
    <div id="sidebar" class="relative z-1 md:col-span-2">
      ${sidebar()}
    </div>
    <div id="content" class="
      relative z-0
      col-span-12 md:col-span-10
      min-w-full grid grid-cols-12 gap-6
      md:gap-x-6.5 lg:gap-x-7 xl:gap-x-7.5 2xl:gap-x-8
      md:gap-y-8 lg:gap-y-10 xl:gap-y-12 2xl:gap-y-14">
    </div>
  </main>
  <footer class="
    min-w-full pt-5 text-center
    max-md:pb-16
    md:pl-22 lg:pl-24 xl:pl-26 2xl:pl-28">
    ${text(`© Create by ${link(socmed)} with full of 💖 - 2025`)}
  </footer>
  ${popup()}
  ${modal('modalForm')}
  ${modal('modalConfirm')}
</div>
`;

// Variables
const appEl = document.querySelector('#app');
const headerEl = document.querySelector('#header');
const sidebarEl = document.querySelector('#sidebar');
const contentEl = document.querySelector('#content');
const popupMessage = document.querySelector('#popupMessage');
const iconTheme = document.querySelector('#toggle i');

// Render
const render = (path) => {
  routePage(contentEl, routes, path);
  toggleActive(path);
};

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme ? theme : getTheme();

  if (document.documentElement.dataset.theme === 'light') {
    iconTheme.classList.add('ri-moon-clear-fill');
    iconTheme.classList.remove('ri-sun-fill');

    iconTheme.classList.add('text-violet-800');
    iconTheme.classList.remove('text-amber-400');
  }

  if (document.documentElement.dataset.theme === 'dark') {
    iconTheme.classList.remove('ri-moon-clear-fill');
    iconTheme.classList.add('ri-sun-fill');

    iconTheme.classList.remove('text-violet-800');
    iconTheme.classList.add('text-amber-400');
  }
};

// Initial page
window.addEventListener('load', () => {
  render(location.pathname);
  setTheme();
});

// Functionalities in header
headerEl.addEventListener('click', (e) => {
  // Toggle theme page
  const toggle = e.target.closest('#toggle');
  if (toggle) {
    e.preventDefault();
    let currentTheme = toggleTheme(document.documentElement.dataset.theme);
    setTheme(currentTheme);
  }
});

// Functionalitis in sidebar
sidebarEl.addEventListener('click', (e) => {
  // Navigation between page
  const link = e.target.closest('.link');
  if (link) {
    e.preventDefault();
    render(link.getAttribute('href'));
  }
});

// Functionalities in content
appEl.addEventListener('click', (e) => {
  const modalConfirm = document.querySelector('#modalConfirm');
  const modalForm = document.querySelector('#modalForm');

  // Adding data
  const btnAdd = e.target.closest('#btn-add');
  if (btnAdd) {
    e.preventDefault();

    // Adding expense
    if (location.pathname === '/expense') {
      const descInput = document.querySelector('#desc');
      const ctgInput = document.querySelector('#ctg');
      const priceInput = document.querySelector('#price');
      const qtyInput = document.querySelector('#qty');

      const rawExpense = {
        desc: descInput.value,
        ctg: ctgInput.value,
        price: priceInput.value,
        qty: qtyInput.value,
      };

      const {
        isValidDesc,
        isValidPrice,
        isValidQty,
        isValidCtg,
        isStoreSuccess,
      } = addExpense(rawExpense);

      if (
        isValidDesc &&
        isValidPrice &&
        isValidQty &&
        isValidCtg &&
        isStoreSuccess
      ) {
        render(location.pathname);
        popupMessage.classList.add('success');
        popupMessage.classList.add('animate-popup');
        popupMessage.querySelector('span').innerText =
          'Expense berhasil ditambahkan!';
        setTimeout(() => {
          popupMessage.classList.remove('success');
          popupMessage.classList.remove('animate-popup');
          popupMessage.querySelector('span').innerText = '';
        }, 3000);
        clearTimeout();
      } else {
        isValidDesc
          ? descInput.classList.remove('invalid')
          : descInput.classList.add('invalid');

        isValidPrice
          ? priceInput.classList.remove('invalid')
          : priceInput.classList.add('invalid');

        isValidCtg
          ? ctgInput.classList.remove('invalid')
          : ctgInput.classList.add('invalid');

        isValidQty
          ? qtyInput.classList.remove('invalid')
          : qtyInput.classList.add('invalid');
      }
    }
  }

  // Delete data
  const btnDelete = e.target.closest('.btn-delete');
  if (btnDelete) {
    // Delete expense
    const expenseList = e.target.closest('li');

    if (location.pathname === '/expense') {
      const currentExpenseId = expenseList.dataset.idExpense;
      if (currentExpenseId) {
        modalConfirm.dataset.idExpense = currentExpenseId;
        modalConfirm.show();
      } else {
        popupMessage.classList.add('fail');
        popupMessage.classList.add('animate-popup');
        popupMessage.querySelector('span').innerText =
          'Expense tidak ditemukan!';
        setTimeout(() => {
          popupMessage.classList.remove('fail');
          popupMessage.classList.remove('animate-popup');
          popupMessage.querySelector('span').innerText = '';
        }, 3000);
      }
    }
  }

  // Confirm
  const btnAccept = e.target.closest('#btn-accept');
  if (btnAccept) {
    // Confirm delete expense
    if (location.pathname === '/expense') {
      const isDeleted = deleteExpenseById(modalConfirm.dataset.idExpense);
      if (isDeleted) {
        modalConfirm.dataset.idExpense = '';
        modalConfirm.close();
        render(location.pathname);
        popupMessage.classList.add('fail');
        popupMessage.classList.add('animate-popup');
        popupMessage.querySelector('span').innerText =
          'Expense berhasil dihapus!';
        setTimeout(() => {
          popupMessage.classList.remove('fail');
          popupMessage.classList.remove('animate-popup');
          popupMessage.querySelector('span').innerText = '';
        }, 3000);
        clearTimeout();
      }
    }
  }

  // Reject
  const btnReject = e.target.closest('#btn-reject');
  if (btnReject) {
    modalConfirm.dataset.idExpense = '';
    modalConfirm.close();
  }

  // Edit data
  const btnEdit = e.target.closest('.btn-edit');
  if (btnEdit) {
    modalForm.show();
  }
});

// Save the history of the page
window.addEventListener('popstate', () => render(location.pathname));
