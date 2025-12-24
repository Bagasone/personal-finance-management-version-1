// Components
import icon from './icon.js';
import text from './text.js';

const link = (ref, label, iconClass) => {
  if (iconClass) {
    return `
      <a href="${ref}" class="
        link flex flex-col items-start
        md:gap-3 lg:gap-3.5 xl:gap-4 2xl:gap-4.5">
        ${icon(iconClass, 'md')}
        ${text(label, 'max-md:hidden font-semibold')}
      </a>
`;
  }

  return `
    <a href="${ref}" target="_blank" class="link">
      ${text(label, 'font-semibold')}
    </a>`;
};

export default link;
