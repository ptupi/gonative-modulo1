import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.headerPadding,
    height: metrics.headerHeight,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: colors.header,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },
});

export default styles;
