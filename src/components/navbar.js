// Components
import { icon } from '../components';

// Data
import { user } from '../data/data.js';

const navbar = () => {
  return `
    <nav class="
        bg-gray-100 fixed left-0 top-0 right-0 
        py-5 px-6 sm:px-18 md:px-20 lg:px-22 xl:px-24
        flex justify-between
        transition-all duration-300 ease-in-out
        dark:bg-gray-900">
        <h1 class="title flex flex-col">
            <span class="font-normal text-lg 
                md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">
                Welcome,
            </span>
            ${user.name}!
        </h1>
        <div class="
            relative">
            <img src=${user.profileImg} class="
                w-15.5 h-15.5 aspect-square object-cover object-center frame-lg
                sm:w-16 md:w-16.5 lg:w-17 xl:w-17.5 2xl:w-24
                sm:h-16 md:h-16.5 lg:h-17 xl:h-17.5 2xl:h-24" />
            <div class="
                toggle
                absolute flex flex-col gap-3 -left-3 -bottom-1 z-20 min-w-fit cursor-pointer
                md:-left-3.5 xl:-left-4 
                md:-bottom-1.5 xl:-bottom-2">
                ${icon('ri-moon-clear-fill', 'xs')}
            </div>
        </div>
    </nav>
`;
};

export default navbar;
