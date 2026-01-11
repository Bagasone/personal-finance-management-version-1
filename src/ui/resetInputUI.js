import { getFormInput, getModalFormInput } from './domVar';

const resetFormUI = () => {
  const inputs = Object.values(getFormInput());

  inputs.forEach((input) => {
    if (input) {
      input.value = '';
      input.classList.remove('invalid');
    }
  });
};

const resetModalFormUI = () => {
  const inputs = Object.values(getModalFormInput());

  inputs.forEach((input) => {
    if (input) {
      input.value = '';
      input.classList.remove('invalid');
    }
  });
};

export { resetFormUI, resetModalFormUI };
