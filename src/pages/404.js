const notFoundPage = () => {
  return `
    <div class="
        col-span-12 min-w-full min-h-[60vh] flex flex-col justify-center items-center">
        <h2 class="
            text-rose-600 text-xl text-center font-bold
            sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">404</h2>
        <p class="
            text-rose-700 text-sm
            lg:text-base xl:text-lg 2xl:text-xl">
            Page is not found!
        </p>
    </div>
`;
};

export default notFoundPage;
