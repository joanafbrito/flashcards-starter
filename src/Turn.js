class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
    this.answer = false;

  }
  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer) {
      this.answer = true;
    }
    return this.answer;
  }

  giveFeedback() {
    let feedbackMessage = 'correct!';
    if (this.answer !== true) {
      return 'incorrect!'
    }
    return feedbackMessage;
  }

}

module.exports = Turn;
