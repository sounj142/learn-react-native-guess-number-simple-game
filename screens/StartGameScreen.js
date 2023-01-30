import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import Card from '../components/ui/Card';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { useStore } from '../stores/store';
import { Colors, Fonts, FontSize } from '../utils/constants';

export default function StartGameScreen() {
  const { confirmUserNumber } = useStore().gameStore;
  const [enteredNumber, setEnteredNumber] = useState('');
  const { width, height } = useWindowDimensions();

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const onConfirmHandler = () => {
    const number = parseInt(enteredNumber);
    const isValid =
      String(number) === enteredNumber && 99 >= number && number >= 1;
    if (!isValid) {
      Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    confirmUserNumber(number);
  };

  const titleMargin =
    width > height && width > 600
      ? {
          marginTop: 30,
          marginHorizontal: 24,
        }
      : {
          marginTop: 100,
          marginHorizontal: 24,
        };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View>
          <Title style={titleMargin}>Guess My Number</Title>

          <Card>
            <Text style={styles.instructionText}>Enter a number</Text>

            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType='number-pad'
              autoCapitalize='none'
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={(text) => setEnteredNumber(text)}
            />

            <View style={styles.buttonsContainer}>
              <PrimaryButton style={styles.button} onPress={resetInputHandler}>
                Reset
              </PrimaryButton>
              <PrimaryButton style={styles.button} onPress={onConfirmHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: FontSize.Normal,
    fontFamily: Fonts.openSans,
    textAlign: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: FontSize.Large,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});
