// Components
import { icon, text } from '../components';

// Constants
import { icons } from '../constants/index.js';

const lists = (data, type) => {
  return `
    <ul class="
      min-w-full pt-3 pb-4 px-5 frame frame-xl
      flex flex-col justify-center items-center gap-2.5
      sm:gap-3 md:gap-3.5 lg:gap-4 xl:gap-4.5 2xl:gap-5
      sm:pt-3.5 md:pt-4 lg:pt-4.5 xl:pt-5 2xl:pt-5.5
      sm:pb-4.5 md:pb-5 lg:pb-5.5 xl:pb-6 2xl:pb-6.5
      sm:px-5.5 md:px-6 lg:px-6.5 xl:px-7 2xl:px-7.5">
      ${
        data.length === 0
          ? text(`No ${type} today`, 'capitalize font-bold')
          : data.map((item) => list(item, type)).join('')
      }
    </ul>
`;
};

const list = ({ desc, ctg, date, salary, price, qty }) => {
  return `
    <li class="
      min-w-full min-h-15 py-1.5 px-3 rounded-xl overflow-hidden bg-gray-200
      grid grid-cols-12 grid-rows-1 items-center gap-3
      transition-all duration-300 ease-in-out
      sm:gap-3.5 md:gap-4 lg:gap-4.5 xl:gap-5 2xl:gap-5.5
      dark:bg-gray-800">
      <div class="col-span-2 sm:col-span-1">
      ${icon(icons[ctg], 'xs')}
      </div>
      <div class="flex flex-col col-span-6 sm:col-span-7">
        <h3 class="
          max-w-[10ch] 
          text-ellipsis overflow-hidden text-nowrap font-semibold
          md:max-w-[15ch] lg:max-w-[20ch] xl:max-w-[25ch]
          text-base md:text-lg lg:text-xl 2xl:text-2xl">
          ${desc}
        </h3>
        <p class="ml-2 text-[.6rem] lg:text-[.8rem]">${date}</p>
      </div>
      <div class="col-span-4">
        ${salary ? incomeList(salary) : expenseList(price, qty)}
      </div>
    </li>
`;
};

const expenseList = (price, qty) =>
  `<h3 class="
    max-w-[10ch] text-ellipsis overflow-hidden text-nowrap text-rose-600
    font-medium text-sm
    lg:font-semibold 
    md:max-w-[15ch] lg:max-w-[20ch] xl:max-w-[25ch]
    md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
    Rp ${price * qty}
  </h3>
  <p class="ml-2 text-[.6rem] lg:text-[.8rem] 2xl:text-[1rem]">
    ${qty} x ${price}
  </p>
`;

const incomeList = (salary) =>
  `<h3 class="
  max-w-[10ch] text-ellipsis overflow-hidden text-nowrap text-emerald-500
  font-medium text-sm
  lg:font-semibold 
  md:max-w-[15ch] lg:max-w-[20ch] xl:max-w-[25ch]
  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
  Rp ${salary}
</h3>   
`;
export default lists;
