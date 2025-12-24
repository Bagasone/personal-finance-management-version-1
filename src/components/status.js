// Components
import icon from './icon.js';

const status = ({ label, value, iconClass }, size = 'sm') => {
  return `
    <section class="
        min-w-full rounded-xl p-3 pr-4 flex justify-between items-center frame frame-lg
        md:p-3.5 lg:p-4 xl:p-4.5 2xl:p-5
        md:pr-4.5 lg:pr-5 xl:pr-5.5 2xl:pr-6">
        <div class="flex flex-col">
            <span class="
                capitalize text-xs 
                md:text-[13px] lg:text-sm xl:text-md 2xl:text-lg">
                ${label}:
            </span>
            <h2 class="
                max-w-[10ch] sub-title text-ellipsis whitespace-nowrap overflow-hidden
                sm:max-w-[20ch] md:max-w-[25] lg:max-w-[30] xl:max-w-[35] 2xl:max-w-[40xh]">
                ${value}
            </h2>
        </div>
        ${iconClass ? icon(iconClass, size) : ''}
    </section>
`;
};

export default status;
