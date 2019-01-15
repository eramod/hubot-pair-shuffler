var chai, expect;
chai = require('chai');
expect = chai.expect;

  // it('Hubot responds', function () {
  //   return this.room.user.say('Dianne', '@hubot hello').then(() => {
  //     expect(this.room.messages).to.eql([
  //       ['Dianne', '@hubot hello'],
  //       ['hubot', '@Dianne Hi Dianne']
  //     ]);
  //   });
  // });

const shuffle = require('../src/pair-shuffler.js');

describe('Pair Shuffler', function () {

  const devs = ['Dianne', 'Paul'];

  it('returns a shuffled list of 4 devs', () => {
    function stubGetRandomNum() {
      return 0.1;
    }
    expect(
      shuffle(['Brandyn', 'Dianne', 'Dustin', 'Mark'], stubGetRandomNum))
      .to.eql(['Mark', 'Brandyn', 'Dianne', 'Dustin']);
  });
});
