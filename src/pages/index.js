// Pages
import notFoundPage from './notFoundPage';
import dashboardPage from './dashboardPage';
import expensePage from './expensePage';
import incomePage from './incomePage';

const pageRoutes = {
  '/': dashboardPage,
  '/expense': expensePage,
  '/income': incomePage,
  '/404': notFoundPage,
};

export default pageRoutes;
