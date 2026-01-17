// Components
import icon from './icon.js';

const status = ({ label, iconClass, placeholder }, value, size = 'sm', extraClass = '') => {
  return `
    <section class="
        min-w-full rounded-xl p-3 pr-4 flex justify-between items-center frame frame-lg
        md:p-3.5 lg:p-4 xl:p-4.5 2xl:p-5
        md:pr-4.5 lg:pr-5 xl:pr-5.5 2xl:pr-6">
        <div class="flex flex-col min-w-[90%]">
            <span class="
                capitalize text-xs font-semibold
                md:text-[13px] lg:text-sm xl:text-md 2xl:text-lg">
                ${label}:
            </span>
            <h2 class="
                max-w-full sub-title capitalize text-ellipsis whitespace-nowrap overflow-hidden ${extraClass}">
                ${value <= 0 ? placeholder : value}
            </h2>
        </div>
        <div class="${extraClass}">
            ${iconClass ? icon(iconClass, size) : ''}
        </div>
    </section>
`;
};

export default status;
