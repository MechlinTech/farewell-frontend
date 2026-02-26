import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SCREEN_WIDTH = 375;
const SCREEN_HEIGHT = 812;

export const scale = size => (width / SCREEN_WIDTH) * size;

export const verticalScale = size => (height / SCREEN_HEIGHT) * size;

export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
