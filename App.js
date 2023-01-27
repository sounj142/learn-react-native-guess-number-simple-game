import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { observer } from 'mobx-react-lite';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useStore } from './stores/store';
import { Colors, Fonts } from './utils/constants';
import GameOverScreen from './screens/GameOverScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default observer(function App() {
  const { userNumber, gameOver } = useStore().gameStore;
  const [fontsLoaded] = useFonts({
    [Fonts.openSans]: require('./assets/fonts/OpenSans-Regular.ttf'),
    [Fonts.openSansBold]: require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={styles.rootScreen}
        resizeMode='cover'
        imageStyle={styles.innerImageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>
          {!userNumber && <StartGameScreen />}
          {userNumber && !gameOver && <GameScreen />}
          {userNumber && gameOver && <GameOverScreen />}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  innerImageBackground: {
    opacity: 0.25,
  },
});
