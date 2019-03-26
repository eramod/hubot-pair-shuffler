var { shuffle } = require('../src/pair-shuffler.js');

module.exports = function(robot) {
  robot.respond(/hello/, function(res) {
    return res.reply("Hi Dianne");
  });

  robot.respond(/Generate random pairs of (?<names>.*)/, function(res) {
    // RegEx Note: We want to split on all possible combinations including a comma or the word 'and'
    let listOfDevs = res.match.groups.names.split(/(?:,| ?and\b) ?/).filter((name) => {
      return name.length > 0;
    });

    let shuffledList = shuffle(listOfDevs);

    shuffledList.forEach((dev, i) => {
      let nextDev = (i+1) % shuffledList.length;
      return res.send(`@${shuffledList[i]} pair with ${shuffledList[nextDev]} on ${shuffledList[nextDev]}'s task`);
    });
  });
};

