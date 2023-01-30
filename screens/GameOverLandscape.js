import { observer } from 'mobx-react-lite';
import { Image, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { useStore } from '../stores/store';
import { Colors, Fonts, FontSize, isSmallScreen } from '../utils/constants';

export default observer(function GameOverLandscape() {
  const { userNumber, guessHistories, startNewGame } = useStore().gameStore;

  return (
    <View style={styles.screen}>
      <View style={styles.leftContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.rightContainer}>
        <Title>GAME OVER!</Title>

        <Text style={styles.message}>
          Your phone needed{' '}
          <Text style={styles.number}>{guessHistories.length}</Text> rounds to
          guess the number <Text style={styles.number}>{userNumber}</Text>
        </Text>

        <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
      </View>
    </View>
  );
});

const imageDiameter = isSmallScreen ? 200 : 300;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    marginRight: 20,
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
    marginTop: 24,
    marginBottom: 24,
  },
  number: {
    fontFamily: Fonts.openSansBold,
    color: Colors.primary500,
  },
});
