const getFormInput = () => ({
  descInput: document.querySelector('#desc'),
  ctgInput: document.querySelector('#ctg'),
  priceInput: document.querySelector('#price'),
  salaryInput: document.querySelector('#salary'),
  qtyInput: document.querySelector('#qty'),
});

const getModalFormInput = () => ({
  descInput: document.querySelector('dialog #desc'),
  ctgInput: document.querySelector('dialog #ctg'),
  priceInput: document.querySelector('dialog #price'),
  qtyInput: document.querySelector('dialog #qty'),
  salaryInput: document.querySelector('dialog #salary'),
  displayInput: document.querySelector('dialog #display'),
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

const getDisplaySpan = () => ({
  displaySpan: document.querySelector('#display'),
});

export {
  getFormInput,
  getIconThemeUI,
  getPopUpUI,
  getModalUI,
  getSectionUI,
  getLinksUI,
  getModalFormInput,
  getDisplaySpan,
};
