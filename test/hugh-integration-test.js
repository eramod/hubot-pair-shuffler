var Helper, chai, expect, helper;

Helper = require('hubot-test-helper');

chai = require('chai');

expect = chai.expect;

helper = new Helper('../src/hugh-integration.js');

describe('pair-shuffler', function() {
  beforeEach(function() {
    return this.room = helper.createRoom();
  });
  afterEach(function() {
    return this.room.destroy();
  });
  // it('responds to hello', function() {
  //   return this.room.user.say('alice', '@hubot hello').then(() => {
  //     expect(this.room.messages).to.eql([['alice', '@hubot hello'], ['hubot', '@alice hello!']]);
  //   });
  // });

  it('Hubot responds for two users separated by a comma', function () {
    return this.room.user.say('Dianne', '@hubot Generate random pairs of Brandyn, Dianne').then(() => {
      expect(`${this.room.messages}`).to.contain(
        ['hubot', "@Dianne pair with Brandyn on Brandyn's task"],
      );
      expect(`${this.room.messages}`).to.contain(
        ['hubot', "@Brandyn pair with Dianne on Dianne's task"]
      );
    });
  });

    });
  });
});
