const text = (label, cls = '') => {
  return `
    <span class="
      ${cls} ml-.5
      text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        ${label}
    </span>
`;
};

export default text;
