// Given a list of 5 people, we want to pair them up
// We want to go through one full cycle of all possible pairs before starting again
// Order only matters within the pairs
// Role is determined by order within the pair
// Prevent someone from being paired with themselves
// Ignore opting out for now

function shuffle(listOfDevs, getRandomNum = Math.random) {
  // ['Brandyn', 'Dianne', 'Dustin', 'Mark']

  // Make a copy of listOfDevs so we aren't mutating the original array
  const shuffledList = listOfDevs.slice();

  for (let i = 0; i < shuffledList.length; i += 1) {
    const swapPosition = Math.floor(getRandomNum() * Math.floor(shuffledList.length)); // random # between 0 and 3
    const currentDev = shuffledList[i];
    shuffledList[i] = shuffledList[swapPosition];
    shuffledList[swapPosition] = currentDev;
  }
  return shuffledList;
}

// formatter so you can feed it a list and it will return a paragraph ( so we can use it now)

// check previous weeks

module.exports = shuffle;


// let devs = ['Brandyn', 'Dianne', 'Dustin', 'Mark', 'Paul'];

// function pair(listOfDevs) {
//   // devs = ['Dianne', 'Paul']

//   const numOfDevs = listOfDevs.length;

//   const pairedDevs = listOfDevs.map((dev, index) => {
//     let followId = index;

//     while (followId === index) {
//       // This means you paired a person with themselves, so try again
//       followId = getFollowId(numOfDevs);
//     }

//     return [listOfDevs[index], listOfDevs[followId]];
//   });

//   return pairedDevs;
//   // [['Dianne', 'Paul'], ['Paul', 'Dianne']]
// }

// function getFollowId(numOfDevs) {
//   return Math.floor(Math.random() * Math.floor(numOfDevs));
// }
