import { observer } from 'mobx-react-lite';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { useStore } from '../stores/store';
import { Colors, Fonts, FontSize } from '../utils/constants';

export default observer(function GameScreen() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const {
    guessHistories,
    isLie,
    userSaysGuessNumberIsLower,
    userSaysGuessNumberIsHigher,
    userSaysSorry,
  } = useStore().gameStore;

  if (isLie) {
    Alert.alert("Don't lie!", 'You know that this is wrong...', [
      {
        text: 'Sorry!',
        style: 'cancel',
        onPress: userSaysSorry,
      },
    ]);
  }

  let content;
  if (isLandscape && width > 600) {
    content = (
      <>
        {/* <Text style={[styles.question, styles.questionWide]}>
          Higher or lower?
        </Text> */}

        <View style={styles.buttonsContainerWide}>
          <PrimaryButton
            style={styles.button}
            onPress={userSaysGuessNumberIsLower}
          >
            <Ionicons name='md-remove' size={24} />
          </PrimaryButton>

          <NumberContainer />

          <PrimaryButton
            style={styles.button}
            onPress={userSaysGuessNumberIsHigher}
          >
            <Ionicons name='md-add' size={24} />
          </PrimaryButton>
        </View>
      </>
    );
  } else {
    content = (
      <>
        <NumberContainer />

        <Card style={{ marginHorizontal: 0 }}>
          <Text style={styles.question}>Higher or lower?</Text>

          <View style={styles.buttonsContainer}>
            <PrimaryButton
              style={styles.button}
              onPress={userSaysGuessNumberIsLower}
            >
              <Ionicons name='md-remove' size={24} />
            </PrimaryButton>

            <PrimaryButton
              style={styles.button}
              onPress={userSaysGuessNumberIsHigher}
            >
              <Ionicons name='md-add' size={24} />
            </PrimaryButton>
          </View>
        </Card>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title style={{ width: '100%' }}>Opponent's Guess</Title>

      {content}

      <View style={styles.guessesContainer}>
        <FlatList
          data={guessHistories}
          renderItem={(itemData) => (
            <View style={styles.guessItem}>
              <Text style={styles.guessItemText}>
                #{guessHistories.length - itemData.index}
              </Text>

              <Text style={styles.guessItemText}>
                Opponent's Guess: {itemData.item}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 32,
    alignItems: 'center',
  },
  question: {
    fontSize: FontSize.Normal,
    fontFamily: Fonts.openSans,
    color: Colors.accent500,
    textAlign: 'center',
  },
  questionWide: {
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
  },
  guessesContainer: {
    flex: 1,
    marginTop: 10,
  },
  guessItem: {
    marginVertical: 8,
    padding: 12,
    borderRadius: 40,
    borderColor: Colors.primary800,
    borderWidth: 1,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  guessItemText: {
    fontFamily: Fonts.openSans,
    fontSize: FontSize.Small,
  },
});
