import { text, button, form } from '../components';
import { btnAccept, btnReject } from '../constants';
import { expenseForm, btnUpdate } from '../constants';

const modal = (type) => {
  return `
  <dialog id="${type}" class="fixed z-2 min-w-full min-h-full bg-gray-50/25">
    ${type === 'modalConfirm' ? modalConfirm() : modalForm()}
  </dialog>
`;
};

const modalConfirm = () => {
  return `
    <div class="
        min-h-40 min-w-[90%] xs:min-w-[50%]
        fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        flex flex-col justify-between items-center gap-5
        bg-gray-100 frame frame-md p-10">
        ${text('Do you want to delete this expense?', 'modal-desc')}
        <div class="grid grid-cols-2 jutify-center items-center gap-5">
            ${button(btnAccept)}
            ${button(btnReject)}
        </div>
    </div>
`;
};

const modalForm = () => {
  return `
    <div class="
        min-w-[90%] sm:min-w-[70%]
        fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        flex flex-col justify-between items-center gap-5
        bg-gray-100 frame frame-md p-10">
        ${form(expenseForm, btnUpdate)}
    </div>
`;
};

export default modal;
