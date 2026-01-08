// Components
import { link } from '../components';

// Constants
import { links } from '../constants';

const sidebar = () => {
  return `
    <aside id="sidebar" class="
        fixed bottom-0 left-0 px-6 py-5
        flex justify-around md:flex-col bg-gray-100
        transition-all duration-300 ease-in-out
        md:left-21 lg:left-23 xl:left-25 2xl:left-27
        md:top-24 lg:top-26 xl:top-28 2xl:top-40
        max-md:min-w-full md:max-h-125 2xl:max-h-187.5
        md:py-0 md:px-2
        dark:bg-gray-900">
        ${links.map((item) => link(item)).join('')}
    </aside>
`;
};

export default sidebar;
