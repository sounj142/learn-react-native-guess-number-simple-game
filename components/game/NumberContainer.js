import { observer } from 'mobx-react-lite';
import { View, Text, StyleSheet } from 'react-native';
import { useStore } from '../../stores/store';
import { Colors, Fonts } from '../../utils/constants';

export default observer(function NumberContainer() {
  const { guessNumber } = useStore().gameStore;

  return (
    <View style={styles.guessNumberContainer}>
      <Text style={styles.guessNumber}>{guessNumber}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  guessNumberContainer: {
    marginTop: 24,
    alignItems: 'center',
    padding: 24,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: Colors.accent500,
  },
  guessNumber: {
    fontSize: 36,
    color: Colors.accent500,
    fontFamily: Fonts.openSansBold,
  },
});
