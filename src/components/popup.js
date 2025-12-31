import { text } from '../components';
const popup = () => {
  return `
    <div id="popupMessage" class="
        fixed -bottom-full right-[5%] z-1
        flex-col justify-between items-center gap-5
        bg-gray-100 frame frame-md px-5 py-3">
        ${text('', 'text-initial bg-initial')}
    </div>
`;
};

export default popup;
