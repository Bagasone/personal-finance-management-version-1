const getFormInput = () => ({
  descInput: document.querySelector('#desc'),
  ctgInput: document.querySelector('#ctg'),
  priceInput: document.querySelector('#price'),
  salaryInput: document.querySelector('#salary'),
  qtyInput: document.querySelector('#qty'),
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

const getModalFormInput = () => {
  const { modalFormEl } = getModalUI();

  return {
    descInput: modalFormEl.querySelector('#desc'),
    ctgInput: modalFormEl.querySelector('#ctg'),
    priceInput: modalFormEl.querySelector('#price'),
    qtyInput: modalFormEl.querySelector('#qty'),
    salaryInput: modalFormEl.querySelector('#salary'),
  };
};

export {
  getFormInput,
  getIconThemeUI,
  getPopUpUI,
  getModalUI,
  getSectionUI,
  getLinksUI,
  getModalFormInput,
};
