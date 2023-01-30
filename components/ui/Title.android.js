import { Text, StyleSheet } from 'react-native';
import { Fonts, FontSize } from '../../utils/constants';

export default function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.Normal,
    fontFamily: Fonts.openSansBold,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});
