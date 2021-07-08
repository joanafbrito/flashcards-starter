const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    if(this.deck.countCards() < this.turns){
      return false;
    }
    let returnCard = this.deck.cards[this.turns]

    return returnCard;
  }

  takeTurn(guess) {
    // const turn = new Turn(guess,this.returnCurrentCard());
    const turn = new Turn(guess, this.deck.cards[this.turns]);

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id);
    }

    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let incorrect = this.incorrectGuesses.length;
    let percentage = 100 - ((incorrect * 100) / this.turns).toFixed(2);
    return percentage;
  }

  endRound() {
    let per = this.calculatePercentCorrect()
    let msg = `* Round over! * You answered ${per}% of the questions correctly!`

    console.log(msg);

    return msg
  }
}


module.exports = Round;
