const icon = (iconClass, size) => {
  function setSize() {
    return size === 'sm'
      ? 'w-9 h-9 2xl:w-10 2xl:h-10 frame-sm'
      : size === 'md'
      ? 'w-10 h-10 2xl:w-11 2xl:h-11 frame-md'
      : size === 'lg'
      ? 'w-11 h-11 2xl:w-12 2xl:h-12 frame-lg'
      : size === 'xl'
      ? 'w-12 h-12 2xl:w-13 2xl:h-13 frame-xl'
      : 'w-6 h-6 lg:w-7.5 lg:h-7.5 2xl:w-9 2xl:h-9 frame-xs';
  }

  function setIconSize() {
    return size === 'sm'
      ? 'text-xl lg:text-2xl 2xl:text-3xl'
      : size === 'md'
      ? 'text-2xl lg:text-3xl 2xl:text-4xl'
      : size === 'lg'
      ? 'text-3xl lg:text-4xl 2xl:text-5xl'
      : size === 'xl'
      ? 'text-4xl lg:text-5xl 2xl:text-6xl'
      : 'text-base lg:text-lg 2xl:text-2xl';
  }

  return `
    <div class="
      p-1 flex justify-center items-center gap-3 frame
      ${setSize(size)}">
      <i class="${iconClass} ${setIconSize(size)}"></i>
    </div>
`;
};

export default icon;
