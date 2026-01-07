const handlePopUpSuccesUI = (el, label) => {
  el.classList.add('success');
  el.classList.add('animate-popup');
  el.querySelector('span').innerText = label;
  setTimeout(() => {
    el.classList.remove('success');
    el.classList.remove('animate-popup');
    el.querySelector('span').innerText = '';
  }, 3000);
  clearTimeout();
};

const handePopUpFailUI = (el, label) => {
  el.classList.add('fail');
  el.classList.add('animate-popup');
  el.querySelector('span').innerText = label;
  setTimeout(() => {
    el.classList.remove('fail');
    el.classList.remove('animate-popup');
    el.querySelector('span').innerText = '';
  }, 3000);
  clearTimeout();
};

export { handlePopUpSuccesUI, handePopUpFailUI };
