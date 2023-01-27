import { makeAutoObservable } from 'mobx';

export default class CommonStore {
  userNumber;
  min;
  max;
  isLie;
  gameOver;
  guessNumber;
  guessHistories;

  constructor() {
    this.startNewGame();
    makeAutoObservable(this);
  }

  startNewGame = () => {
    this.userNumber = undefined;
    this.min = 1;
    this.max = 99;
    this.isLie = false;
    this.gameOver = false;
    this.guessNumber = undefined;
    this.guessHistories = [];
  };

  confirmUserNumber = (value) => {
    this.userNumber = value;
    this.generateGuessNumber(true);
  };

  generateGuessNumber(guessNumberMustWrong) {
    do {
      this.guessNumber = Math.round(
        this.min + Math.random() * (this.max - this.min)
      );
    } while (guessNumberMustWrong && this.guessNumber === this.userNumber);

    this.guessHistories = [this.guessNumber, ...this.guessHistories];
    this.gameOver = this.guessNumber === this.userNumber;
  }

  userSaysGuessNumberIsLower = () => {
    this.isLie = this.userNumber >= this.guessNumber;
    if (!this.isLie) {
      this.max = this.guessNumber - 1;
      this.generateGuessNumber(false);
    }
  };

  userSaysGuessNumberIsHigher = () => {
    this.isLie = this.userNumber <= this.guessNumber;
    if (!this.isLie) {
      this.min = this.guessNumber + 1;
      this.generateGuessNumber(false);
    }
  };

  userSaysSorry = () => {
    this.isLie = false;
  };
}
