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

const getSectionUI = () => ({
  contentEl: document.querySelector('#content'),
});

const getLinksUI = () => ({
  linksEl: document.querySelectorAll('.link'),
});

const getIconThemeUI = () => ({
  iconThemeEl: document.querySelector('#btn-theme i'),
});

export {
  getExpenseFormInput,
  getIncomeFormInput,
  getIconThemeUI,
  getPopUpUI,
  getModalUI,
  getSectionUI,
  getLinksUI,
};
