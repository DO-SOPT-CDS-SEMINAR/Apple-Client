import { AddIcEye } from '../assets/icon';
import { AddIcHandtap } from '../assets/icon';
import { AddIcAngle } from '../assets/icon';
import { AddIcUsbC } from '../assets/icon';
import { AddIcFold } from '../assets/icon';

interface ModalInfoProps {
  id: number;
  icon: React.ReactElement;
  text: string;
}

export const MODAL_DATA: ModalInfoProps[] = [
  {
    id: 1,
    icon: <AddIcEye />,
    text: '눈이 편안한 백라이트 키 및 1mm의 키 트래블로 조용한 타이핑과 빠른 반응 속도를 선사하는 가위식 메커니즘.',
  },
  {
    id: 2,
    icon: <AddIcHandtap />,
    text: 'iPadOS의 Multi‑Touch 제스처와 커서 기능 지원.',
  },
  {
    id: 3,
    icon: <AddIcAngle />,
    text: '가장 편안한 각도로 쉽고 매끄럽게 조절 가능.',
  },
  {
    id: 4,
    icon: <AddIcUsbC />,
    text: 'iPad Pro 충전 전용 USB-C 포트를 갖추고 있어, iPad 포트에 다른 액세서리를 자유롭게 연결해 사용 가능.',
  },
  {
    id: 5,
    icon: <AddIcFold />,
    text: '접으면 케이스가 되어 iPad Pro를 들고 다닐 때 기기 앞뒷면을 안전하게 보호.',
  },
];
