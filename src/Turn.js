class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
    this.answer = true;

  }
  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.guess !== this.currentCard.correctAnswer) {
      this.answer = false;
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
