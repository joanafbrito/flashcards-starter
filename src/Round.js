const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses =[];
  }

  returnCurrentCard() {
    if(this.deck.countCards() < this.turns){
      return null;
    }
    let returnCard = this.deck.cards[this.turns]

    return returnCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess,this.returnCurrentCard());
    // const turn = new Turn(guess,this.deck.cards[this.turns];


    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }

    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let percentageOfcorrect = 100 - ((this.incorrectGuesses.length*100)/this.turns).toFixed(2);
    return percentageOfcorrect;

  }

  endRound() {
    return `* Round over! * You answered ${this.calculatePercentCorrect()}% of the questions correctly!`

  }


}


module.exports = Round;
