const shuffle = require('../src/pair-shuffler.js');

module.exports = function(robot) {
  robot.respond(/hello/, function(res) {
    return res.reply("Hi Dianne");
  });

  robot.respond(/Generate random pairs of (?<names>.*)/, function(res) {
    let listOfDevs = res.match.groups.names.split(/, ? | \band\b /);
    let shuffledList = shuffle(listOfDevs);
console.log(shuffledList[0])
    return res.send(`@${shuffledList[0]} pair with ${shuffledList[1]} on ${shuffledList[1]}'s task`,
      `@${shuffledList[1]} pair with ${shuffledList[0]} on ${shuffledList[0]}'s task`)

    // ['hubot', "@Dianne pair with Brandyn on Brandyn's task"],
    // ['hubot', "@Brandyn pair with Dianne on Dianne's task"]
  });
};

