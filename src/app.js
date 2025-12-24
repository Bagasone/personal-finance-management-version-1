// Styles
import './index.css';

// Icons
import 'remixicon/fonts/remixicon.css';

// Helper
import { renderPage, toggleActive, toggleTheme } from './helper';

// Pages
import { notFoundPage, dashboardPage, expensePage, incomePage } from './pages';

// Components
import { navbar, sidebar, text, link } from './components';

// Constants
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
  <header class="min-w-full">
    ${navbar()}
  </header>
  <main class="
    min-w-full grid grid-cols-12 gap-5 pt-12 
    sm:pt-14 md:pt-18 lg:pt-20 xl:pt-22 2xl:pt-12">
    <div class="md:col-span-2">
      ${sidebar()}
    </div>
    <div id="content" class="
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
</div>
`;

// Initial page
window.addEventListener('load', () => {
  renderPage(routes, location.pathname);
  toggleActive(document.querySelector('.link'));
  toggleTheme(document.querySelector('#toggle i'));
});

// Navigation between page
document.querySelectorAll('aside .link').forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();

    const path = e.getAttribute('href');
    toggleActive(e);
    renderPage(routes, path);
  });
});

// Save the history of the page
window.addEventListener('popstate', () => {
  document.getElementById('content').innerHTML = routes[location.pathname]();
});

// Toggle theme
document.querySelector('#toggle').addEventListener('click', function () {
  toggleTheme(document.querySelector('#toggle i'));
});
