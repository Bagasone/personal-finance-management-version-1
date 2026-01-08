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

const getExpenseModalFormInput = () => {
  const { modalFormEl } = getModalUI();

  return {
    descInput: modalFormEl.querySelector('#desc'),
    ctgInput: modalFormEl.querySelector('#ctg'),
    priceInput: modalFormEl.querySelector('#price'),
    qtyInput: modalFormEl.querySelector('#qty'),
  };
};

const getIncomeModalFormInput = () => {
  const { modalFormEl } = getModalUI();

  return {
    descInput: modalFormEl.querySelector('#desc'),
    ctgInput: modalFormEl.querySelector('#ctg'),
    salaryInput: modalFormEl.querySelector('#salary'),
  };
};
export {
  getExpenseFormInput,
  getIncomeFormInput,
  getIconThemeUI,
  getPopUpUI,
  getModalUI,
  getSectionUI,
  getLinksUI,
  getExpenseModalFormInput,
  getIncomeModalFormInput,
};
