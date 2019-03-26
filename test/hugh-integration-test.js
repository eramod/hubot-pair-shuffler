var Helper, chai, expect, helper;

Helper = require('hubot-test-helper');

chai = require('chai');

expect = chai.expect;

helper = new Helper('../src/hugh-integration.js');

var { useRandomNumberGenerator } = require('../src/pair-shuffler.js')

describe('pair-shuffler', function() {
  beforeEach(function() {
    useRandomNumberGenerator(false);
    return this.room = helper.createRoom();
  });
  afterEach(function() {
    return this.room.destroy();
  });

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

  it('Hubot responds for two users separated by an and', function () {
    return this.room.user.say('Dianne', '@hubot Generate random pairs of Brandyn and Dianne').then(() => {
      expect(`${this.room.messages}`).to.contain(
        ['hubot', "@Dianne pair with Brandyn on Brandyn's task"],
      );
      expect(`${this.room.messages}`).to.contain(
        ['hubot', "@Brandyn pair with Dianne on Dianne's task"]
      );
    });
  });

  it('Hubot responds for three users separated by an oxford comma', function () {
    return this.room.user.say('Dianne', '@hubot Generate random pairs of Brandyn, Dianne, and Paul').then(() => {
      expect(`${this.room.messages}`).to.contain(
        ['hubot', "@Dianne pair with Paul on Paul's task"],
      );
      expect(`${this.room.messages}`).to.contain(
        ['hubot', "@Brandyn pair with Dianne on Dianne's task"]
      );

      expect(`${this.room.messages}`).to.contain(
        ['hubot', "@Paul pair with Brandyn on Brandyn's task"]
      );
    });
  });
});
