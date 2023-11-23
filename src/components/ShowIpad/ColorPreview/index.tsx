import {
  IcSwatchSmBeige,
  IcSwatchSmCoral,
  IcSwatchSmDarkgray,
  IcSwatchSmNavy,
  IcSwatchSmPink,
  IcSwatchSmPurple,
  IcSwatchSmRed,
  IcSwatchSmSilver,
  IcSwatchSmSpacegray,
  IcSwatchSmTurquiose,
  IcSwatchSmYellow,
  IpadImgSwPattern01,
  IpadImgSwPattern02,
  IpadImgSwPattern03,
} from '../../../assets/icon';
import { IcSwatchSmLightsilver } from '../../../assets/icon';

interface ColorPreviewProps {
  idx: number | string;
}

const ColorPreview = ({ idx }: ColorPreviewProps) => {
  switch (idx) {
    case 1:
      return (
        <>
          <IcSwatchSmSilver />
          <IcSwatchSmLightsilver />
        </>
      );

    case 2:
      return (
        <>
          <IcSwatchSmDarkgray />
          <IcSwatchSmTurquiose />
          <IcSwatchSmPink />
          <IcSwatchSmPurple />
          <IcSwatchSmBeige />
        </>
      );

    case 3:
      return (
        <>
          <IcSwatchSmNavy />
          <IcSwatchSmCoral />
          <IcSwatchSmYellow />
          <IcSwatchSmLightsilver />
        </>
      );

    case 4:
      return (
        <>
          <IcSwatchSmDarkgray />
          <IcSwatchSmLightsilver />
        </>
      );

    case 5:
      return (
        <>
          <IcSwatchSmSilver />
          <IcSwatchSmLightsilver />
        </>
      );

    case 'acc_1':
      return (
        <>
          <IcSwatchSmNavy />
          <IcSwatchSmRed />
          <IcSwatchSmLightsilver />
          <IcSwatchSmYellow />
        </>
      );

    case 'acc_3':
      return (
        <>
          <IpadImgSwPattern01 />
          <IpadImgSwPattern02 />
          <IpadImgSwPattern03 />
        </>
      );

    case 'acc_4':
      return (
        <>
          <IcSwatchSmLightsilver />
          <IcSwatchSmSpacegray />
        </>
      );

    default:
      break;
  }
};

export default ColorPreview;
