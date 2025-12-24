const notFoundPage = () => {
  return `
    <div class="
        col-span-12 min-w-full min-h-full flex flex-col justify-center items-center">
        <h2 class="text-rose-600 sub-title text-center">404</h2>
        <p class="
            text-rose-700 text-sm
            lg:text-base xl:text-lg 2xl:text-xl">
            Page is not found!
        </p>
    </div>
`;
};

export default notFoundPage;
