import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import normalize from 'react-native-normalize';
import colors from '../colors';
import {WINDOW_WIDTH} from '../mixins';

interface Style {
  bgImage: ViewStyle;
  infoContainer: ViewStyle;
  title: TextStyle;
  detail: TextStyle;
}

export const styles = StyleSheet.create<Style>({
  bgImage: {
    width: WINDOW_WIDTH,
    height: '100%',
  },
  infoContainer: {
    paddingTop: normalize(155),
    paddingLeft: normalize(28),
  },
  title: {
    fontSize: normalize(60),
    fontWeight: '700',
    color: colors.primary,
  },
  detail: {
    fontSize: normalize(12),
    fontWeight: '400',
    color: colors.primary,
  },
});
