const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Round', function() {
  let card1, card2, card3, deck, round

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instace of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should start with a deck of cards', function() {
    expect(round).to.have.property('deck');
    expect(round.deck.cards).to.deep.equal([card1, card2, card3]);
    expect(round.deck.cards[1].id).to.equal(14);
  });

  it('should have turns', function() {
    expect(round).to.have.property('turns');
    expect(round.turns).to.equal(0);
  });

  it('should have incorrent guesses', function() {
    expect(round).to.have.property('incorrectGuesses').with.lengthOf(0);
  })

  it('should be able to return the Current Card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1);

  });

  it('should be able to take turns', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');
    expect(round.turns).to.equal(1);
    expect(round.returnCurrentCard()).to.equal(card2);

    expect(round.takeTurn('appendix')).to.equal('incorrect!')
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.include(14);
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should be able to calculate the percentage of correct answers', function() {

    round.takeTurn('pug')
    expect(round.calculatePercentCorrect()).to.equal(0);

    round.takeTurn('gallbladder')
    expect(round.calculatePercentCorrect()).to.equal(50);

    round.takeTurn('playing with bubble wrap')
    expect(round.calculatePercentCorrect()).to.equal(66.67);
  });

  it('should be able to show a message at the end', function() {

    round.takeTurn('pug')
    expect(round.endRound()).to.equal(`* Round over! * You answered 0% of the questions correctly!`);

    round.takeTurn('gallbladder')
    expect(round.endRound()).to.equal(`* Round over! * You answered 50% of the questions correctly!`);
    expect(round.calculatePercentCorrect()).to.equal(50);

    round.takeTurn('playing with bubble wrap')
    expect(round.endRound()).to.equal(`* Round over! * You answered 66.67% of the questions correctly!`);
  });
})
