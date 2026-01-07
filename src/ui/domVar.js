const initUI = () => {
  // Variables
  const appEl = document.querySelector('#app');
  const headerEl = document.querySelector('#header');
  const sidebarEl = document.querySelector('#sidebar');
  const contentEl = document.querySelector('#content');
  const iconThemeEl = document.querySelector('#toggle i');

  return {
    appEl,
    headerEl,
    sidebarEl,
    contentEl,
    iconThemeEl,
  };
};

const getExpenseFormInput = () => ({
  descInput: document.querySelector('#desc'),
  ctgInput: document.querySelector('#ctg'),
  priceInput: document.querySelector('#price'),
  qtyInput: document.querySelector('#qty'),
});

const getIncomeFormInput = () => ({
  descInput: document.querySelector('#desc'),
  ctgInput: document.querySelector('#ctg'),
  salaryInput: document.querySelector('#salary'),
});

const getPopUpUI = () => ({
  popUpEl: document.querySelector('#popUp'),
});

const getModalUI = () => ({
  modalConfirmEl: document.querySelector('#modalConfirm'),
  modalFormEl: document.querySelector('#modalForm'),
});

export default initUI;
export { getExpenseFormInput, getIncomeFormInput, getPopUpUI, getModalUI };
