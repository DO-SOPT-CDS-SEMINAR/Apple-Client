import { DefaultTheme } from 'styled-components';
import { SerializedStyles } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      grayScale: {
        white: string;
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        black: string;
      };

      pointColor: {
        red0: string;
        orange0: string;
        blue0: string;
        blue1: string;
        blue2: string;
      };

      subColor: {
        purple: string;
      };

      swatchColor: {
        yellow: string;
        coral: string;
        silver: string;
        navy: string;
        turquoise: string;
        skyblue: string;
        pink: string;
        purple: string;
        beige: string;
        spacegray: string;
        lightSilver: string;
      };
    };

    fonts: {
      heading1: SerializedStyles;
      heading2: SerializedStyles;
      heading3: SerializedStyles;
      heading4: SerializedStyles;
      subheading1: SerializedStyles;
      subheading1_1: SerializedStyles;
      subheading2: SerializedStyles;
      subheading3: SerializedStyles;
      footnote: SerializedStyles;
      subheading4: SerializedStyles;
      body1: SerializedStyles;
      body1_1: SerializedStyles;
      body1_2: SerializedStyles;
      body2: SerializedStyles;
      body3: SerializedStyles;
      body3_1: SerializedStyles;
      body3_2: SerializedStyles;
      caption1: SerializedStyles;
      caption2: SerializedStyles;
      nb_en: SerializedStyles;
      nb_kr: SerializedStyles;
    };
  }
}
