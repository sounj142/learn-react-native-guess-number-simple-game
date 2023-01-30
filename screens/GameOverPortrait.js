import { observer } from 'mobx-react-lite';
import { Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { useStore } from '../stores/store';
import { Colors, Fonts, FontSize, isSmallScreen } from '../utils/constants';

export default observer(function GameOverPortrait() {
  const { userNumber, guessHistories, startNewGame } = useStore().gameStore;

  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>

      <Image
        source={require('../assets/images/success.png')}
        style={styles.image}
      />

      <Text style={styles.message}>
        Your phone needed{' '}
        <Text style={styles.number}>{guessHistories.length}</Text> rounds to
        guess the number <Text style={styles.number}>{userNumber}</Text>
      </Text>

      <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
    </View>
  );
});

const imageDiameter = isSmallScreen ? 200 : 300;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    margin: 20,
    width: imageDiameter,
    height: imageDiameter,
    borderRadius: imageDiameter / 2,
    borderWidth: 3,
    borderColor: Colors.primary800,
  },
  message: {
    fontSize: FontSize.Normal,
    fontFamily: Fonts.openSans,
    color: Colors.accent500,
    textAlign: 'center',
    marginBottom: 12,
  },
  number: {
    fontFamily: Fonts.openSansBold,
    color: Colors.primary500,
  },
});
