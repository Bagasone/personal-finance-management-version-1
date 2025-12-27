// Components
import { input, select, button } from '../components';

const form = (formData) => {
  return `
    <form class="
        min-w-full pt-3 pb-5 px-5 frame frame-lg
        grid grid-cols-2 justify-center items-center gap-4
        md:gap-y-4.5 lg:gap-y-5 xl:gap-y-5.5 2xl:gap-y-6
        md:gap-x-5 lg:gap-x-6 xl:gap-x-7 2xl:gap-x-8
        md:pt-3.5 lg:pt-4 xl:pt-4.5 2xl:pt-5
        md:pb-6 lg:pb-7 xl:pb-8 2xl:pb-9
        md:px-5.5 lg:px-6 xl:px-6.5 2xl:px-7">  
        ${formData
          .map((data) => (data?.type ? input(data) : select(data)))
          .join('')}
        ${button('Add', 'bi bi-plus-circle-fill', 'mt-3 col-span-2 btn-add')}
    </form>
`;
};

export default form;
