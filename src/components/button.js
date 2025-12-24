const button = (label, iconClass, cls) => {
  return `
    <button class="
        font-bold text-base cursor-pointer frame frame-md
        min-w-full flex justify-center items-center gap-1 border-0 outline-2
        ${cls}
        py-1 px-3 
        lg:py-1.5 xl:py-2 2xl:py-3.5
        lg:px-3.5 xl:px-4 2xl:px-4.5
        text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        ${label}
        <i class="${iconClass} text-base lg:text-lg xl:text-xl 2xl:text-2xl"></i>
    </button>
`;
};

export default button;
