import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorsThemes: {
      primary: string;
      secondary: string;
      warning: string;
      success: string;
      info: string;
      deepWhite: string;
      white: string;
      gray0: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
      gray8: string;
      gray9: string;
      gray10: string;
      gray11: string;
      gray12: string;
      deepBlack: string;
    };
    font: {
      family: {
        default: string;
        secondary: string;
      };
      sizes: {
        xxsmall: string;
        xsmall: string;
        small: string;
        normal: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
        xxhuge: string;
        hero: string;
        xhero: string;
        xxhero: string;
      };
    };
    media: {
      lteOrEqSmallest: string;
      lteOrEqSmall: string;
      lteOrEqMedium: string;
      lteOrEqLarge: string;
      gteOrEqSmallest: string;
      gteOrEqSmall: string;
      gteOrEqMedium: string;
      gteOrEqLarge: string;
    };
    spacings: {
      xxtiny: string;
      xtiny: string;
      tiny: string;
      xxsmall: string;
      xsmall: string;
      small: string;
      mediumSmall: string;
      medium: string;
      mediumLarge: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
      xxhuge: string;
      hero: string;
      xhero: string;
      xxhero: string;
      frameSizes: {
        xxsmall: string;
        xsmall: string;
        small: string;
        smallMedium: string;
        medium: string;
        largeMedium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        max: string;
      };
    };
    transitions: {
      fastest: string;
      faster: string;
      fast: string;
      normal: string;
      slow: string;
      slower: string;
      slowest: string;
    };
    layers: {
      normal: string;
      layer1: string;
      layer2: string;
      layer3: string;
      layer4: string;
      layer5: string;
      layer6: string;
      layer7: string;
      layer8: string;
      layer9: string;
      aboveAll: string;
    };
  }
}
