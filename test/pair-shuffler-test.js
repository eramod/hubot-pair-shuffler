var chai, expect;
chai = require('chai');
expect = chai.expect;

var {shuffle, useRandomNumberGenerator} = require('../src/pair-shuffler.js');

describe('Pair Shuffler', function () {
  const devs = ['Dianne', 'Paul'];

  it('returns a shuffled list of 4 devs', () => {
    useRandomNumberGenerator(false);

    expect(
      shuffle(['Brandyn', 'Dianne', 'Dustin', 'Mark']))
      .to.eql(['Mark', 'Brandyn', 'Dianne', 'Dustin']);
  });
});
