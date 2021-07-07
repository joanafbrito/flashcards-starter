const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a user\'s guess', function() {
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should have a current Card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('pug', card);

    expect(turn.currentCard).to.equal(card);
  });

  it('should be able to return the user\'s guess per Turn', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('cat', card1);

    const card2 = new Card(2,"What is a comma-separated list of related values?", ["array", "object", "function"],"array");
    const turn2 = new Turn('array', card2);

    expect(turn1.returnGuess()).to.equal('cat');
    expect(turn2.returnGuess()).to.equal('array');
  });

  it('should be able to return the current card in play', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('cat', card1);

    const card2 = new Card(2,"What is a comma-separated list of related values?", ["array", "object", "function"],"array");
    const turn2 = new Turn('array', card2);

    expect(turn1.returnCard()).to.equal(card1);
    expect(turn2.returnCard()).to.equal(card2);
  })

  it('should be able to evaluate the guess', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('cat', card1);

    const card2 = new Card(2,"What is a comma-separated list of related values?", ["array", "object", "function"],"array");
    const turn2 = new Turn('array', card2);

    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);

  })

  it('should be able to give a feedback of the guess', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('cat', card1);
    turn1.evaluateGuess();

    const card2 = new Card(2,"What is a comma-separated list of related values?", ["array", "object", "function"],"array");
    const turn2 = new Turn('array', card2);
    turn2.evaluateGuess();

    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  })

});
