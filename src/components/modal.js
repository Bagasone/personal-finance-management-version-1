import { text, button } from '../components';
import { btnYes, btnNo } from '../constants';

const modalConfirm = () => {
  return `
  <dialog id="modal-confirm" class="fixed min-w-full min-h-full bg-gray-50/25">
    <div class="
        min-h-40 min-w-[90%] xs:min-w-[50%]
        fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        flex flex-col justify-between items-center gap-5
        bg-gray-100 frame frame-md p-10">
        ${text('Do you want to delete this expense?', 'modal-desc')}
        <div class="grid grid-cols-2 jutify-center items-center gap-5">
            ${button(btnYes)}
            ${button(btnNo)}
        </div>
    </div>
  </dialog>
`;
};

export { modalConfirm };
