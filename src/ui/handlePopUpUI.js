import { getPopUpUI } from './domVar';

const handlePopUpUI = (label, type) => {
  const { popUpEl } = getPopUpUI();

  popUpEl.classList.add(type);
  popUpEl.classList.add('animate-popup');
  popUpEl.querySelector('span').innerText = label;

  setTimeout(() => {
    popUpEl.classList.remove(type);
    popUpEl.classList.remove('animate-popup');
    popUpEl.querySelector('span').innerText = '';
  }, 3000);

  clearTimeout();
};

export default handlePopUpUI;
