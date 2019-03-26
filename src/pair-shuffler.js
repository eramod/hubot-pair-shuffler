function shuffle(listOfDevs) {
  // ['Brandyn', 'Dianne', 'Dustin', 'Mark']

  // Make a copy of listOfDevs so we aren't mutating the original array
  const shuffledList = listOfDevs.slice();

  for (let i = 0; i < shuffledList.length; i += 1) {
    const swapPosition = Math.floor(_getRandomNum() * Math.floor(shuffledList.length)); // random # between 0 and 3
    const currentDev = shuffledList[i];
    shuffledList[i] = shuffledList[swapPosition];
    shuffledList[swapPosition] = currentDev;
  }

  return shuffledList;
}

function _getRandomNum() {
  // Needs to be aware of whether to use a real random num generator or a static test number
  if (testMode === false) {
    return Math.random();
  }

  return _stubGetRandomNum();
}

function _stubGetRandomNum() {
  return 0.1;
}

let testMode = false;

function useRandomNumberGenerator(shouldUse) {
  testMode = !shouldUse;
}

module.exports = { shuffle, useRandomNumberGenerator };
