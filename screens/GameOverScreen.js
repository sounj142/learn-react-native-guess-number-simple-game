import { useWindowDimensions } from 'react-native';
import GameOverLandscape from './GameOverLandscape';
import GameOverPortrait from './GameOverPortrait';

export default function GameOverScreen() {
  const { width, height } = useWindowDimensions();

  return width > height && width > 600 ? (
    <GameOverLandscape />
  ) : (
    <GameOverPortrait />
  );
}
