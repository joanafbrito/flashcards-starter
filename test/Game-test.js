const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


  describe('Game', function() {

    let game;

    beforeEach(function() {
     game = new Game();
 });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);

  });

  it('should have a current round', function() {


    expect(game).to.have.property('currentRound');
    expect(game.currentRound).to.be.equal(null);

  });

  it.only('should be able to start a game and keep track of the game', function() {

    game.start();
    // expect(game.currentRound).to.be.equal(game.round)
    console.log(game.currentRound)
  })

});
