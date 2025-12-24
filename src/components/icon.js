// Constants
import { iconContainerSize, iconSize } from '../constants';

const icon = (iconClass, size) => {
  return `
    <div class="
      p-1 flex justify-center items-center gap-3 frame
      ${iconContainerSize[size]}">
      <i class="${iconClass} ${iconSize[size]}"></i>
    </div>
`;
};

export default icon;
