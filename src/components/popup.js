import { text } from '../components';
const popUp = () => {
  return `
    <div id="popUp" class="
        fixed -bottom-full right-[5%] z-1
        flex-col justify-between items-center gap-5
        frame frame-md px-5 py-3 bg-gray-900">
        ${text('', 'text-initial bg-initial')}
    </div>
`;
};

export default popUp;
