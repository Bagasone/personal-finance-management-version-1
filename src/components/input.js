const input = ({ label, type, id, placeholder }) => {
  return `
    <div class="
      min-w-full flex flex-col gap-1 col-span-2 sm:col-span-1 
      ${label === 'Salary' && 'sm:col-span-2'}">
      <label for="${id}" class="text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">
        ${label}:
      </label>
      <input type="${type}" id="${id}" name="${id}" placeholder="${placeholder}" autocomplete="off" required 
        class="
        text-sm frame frame-md px-3 py-1
        placeholder:text-gray-400
        dark:placeholder:text-gray-600
        lg:text-base xl:text-lg 2xl:text-xl
        md:py-1.5 lg:py-2 xl:py-2.5 2xl:py-3
        md:px-3.5 lg:px-4 xl:px-4.5 2xl:px-5"/>
    </div>
`;
};

export default input;
