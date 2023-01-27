import { createContext, useContext } from 'react';
import GameStore from './game-store';

export const store = {
  gameStore: new GameStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
