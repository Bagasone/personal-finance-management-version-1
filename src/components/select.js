const select = ({ label, id, categories }) => {
  return `
    <div class="
        min-w-full flex flex-col gap-1 col-span-2 sm:col-span-1">
        <label for="${id}" class="font-semibold text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            ${label}:
        </label>
        <select id="${id}" name="${id}"required class="
            capitalize text-sm frame frame-md px-3 py-1
            lg:text-base xl:text-lg 2xl:text-xl
            md:py-1.5 lg:py-2 xl:py-2.5 2xl:py-3
            md:px-3.5 lg:px-4 xl:px-4.5 2xl:px-5">
            <option value="" class="
                text-sm bg-gray-300 text-gray-500 capitalize px-3 py-1
                lg:text-base xl:text-lg 2xl:text-xl
                md:py-1.5 lg:py-2 xl:py-2.5 2xl:py-3
                md:px-3.5 lg:px-4 xl:px-4.5 2xl:px-5">
                Select Category
            </option>
            ${categories.map((ctg) => option(ctg)).join('')}
        </select>
    </div>
`;
};

const option = (ctg) => {
  return `
    <option value="${ctg}" class="
        capitalize text-sm px-3 py-1
        lg:text-base xl:text-lg 2xl:text-xl
        md:py-1.5 lg:py-2 xl:py-2.5 2xl:py-3
        md:px-3.5 lg:px-4 xl:px-4.5 2xl:px-5">
        ${ctg}
    </option>
`;
};

export default select;
