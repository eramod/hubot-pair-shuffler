module.exports = function(robot) {
  robot.respond(/hello/, function(res) {
    return res.reply("Hi Dianne");
  });
};

