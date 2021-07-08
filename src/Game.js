const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Game {
  constructor() {

    this.currentRound = null;


  }

  start() {
    let card;

    let cardData = prototypeQuestions.map(function(data) {
       card = new Card(data.id, data.question, data.answers, data.correctAnswer);
      return card;
    });

    let deck = new Deck(cardData);
    let round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
    this.currentRound = round;
    // console.log(this.currentRound);

  };

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
