import { Appearance } from 'react-native';

const scheme = Appearance.getColorScheme();

const lightColors = {
  background: '#FFFFFF',
  text: '#000000',
  transparent: 'transparent',
  border: '#DCE8E9',
  lightTheme: '#E9F6FD',
  inputText: '#293540',
  black: '#000000',
};

const darkColors = {
  background: '#000000',
  text: '#FFFFFF',
  transparent: 'transparent',
  border: '#DCE8E9',
  lightTheme: '#E9F6FD',
  inputText: '#293540',
  black: '#000000',
};

const color = scheme === 'dark' ? darkColors : lightColors;

export default color;
