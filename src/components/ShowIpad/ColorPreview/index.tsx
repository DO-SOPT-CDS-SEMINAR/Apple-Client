import { COLOR_PREVIEW_LIST } from './ColorPreviewList';
interface ColorPreviewProps {
  idx: number | string;
}

const ColorPreview = ({ idx }: ColorPreviewProps) => {
  return COLOR_PREVIEW_LIST.map((color) => {
    if (idx === color.key) {
      return color.value;
    }
  });
};

export default ColorPreview;
