import {Dimensions, PixelRatio, Platform} from 'react-native';
import normalize from 'react-native-normalize';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const PIXEL_RATIO = PixelRatio.get();
const defaultWidth: number = 375;
const defaultHeight: number = 812;

export const getPixelSizeForLayoutSize = (value: number) =>
  PixelRatio.getPixelSizeForLayoutSize(value);

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export const getResponsiveSizeBasedOnWidth = (value: number) =>
  (value * WINDOW_WIDTH) / defaultWidth;

export const getResponsiveSizeBasedOnHeight = (value: number) =>
  (value * WINDOW_HEIGHT) / defaultHeight;

export const getResponsiveSizeForImageBasedOnWidth = (
  width: number,
  height: number,
) => ({
  width: getResponsiveSizeBasedOnWidth(width),
  height: getResponsiveSizeBasedOnWidth(height || width),
});

export const getResponsiveSizeForImageBasedOnHeight = (
  width: number,
  height: number,
) => ({
  width: getResponsiveSizeBasedOnHeight(width),
  height: getResponsiveSizeBasedOnHeight(height || width),
});

export const NAVBAR_HEIGHT =
  Platform.OS === 'ios' ? normalize(64, 'height') : normalize(64, 'height');
