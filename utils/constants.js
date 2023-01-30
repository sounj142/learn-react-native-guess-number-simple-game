import { Dimensions } from 'react-native';

export const Colors = {
  primary500: '#72063c',
  primary600: '#640233',
  primary700: '#4e0329',
  primary800: '#3b021f',
  accent500: '#ddb52f',
};

export const Fonts = {
  openSans: 'open-sans',
  openSansBold: 'open-sans-bold',
};

export const deviceWidth = Math.min(
  Dimensions.get('window').width,
  Dimensions.get('window').height
);
export const isSmallScreen = deviceWidth < 380;
console.log('deviceWidth', deviceWidth);

export const FontSize = {
  VeryLarge: isSmallScreen ? 28 : 36,
  Large: isSmallScreen ? 24 : 32,
  Normal: isSmallScreen ? 18 : 24,
  Small: isSmallScreen ? 14 : 18,
};
