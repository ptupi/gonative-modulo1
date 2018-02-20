import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.padding,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },

  header: {
    paddingVertical: 10,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: colors.border,
  },

  title: {
    color: colors.header,
    fontSize: fonts.big,
    fontWeight: 'bold',
  },

  author: {
    color: colors.author,
    fontSize: fonts.regular,
  },

  text: {
    paddingVertical: 10,
    color: colors.text,
    fontSize: fonts.regular,
  },
});

export default styles;
