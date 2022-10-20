function roll() {
  let rolls = [];
  let stats = []
  for (let i = 0; i < 6; i++){
// Done six times to get all six stats
  for (let i = 0; i < 4; i++) 
  // Four dice 6 sided dice rolled 
  {
    let diceSix = Math.round(Math.random() * 6) + 1; // the 6 sided dice is rolled
    rolls.push(diceSix); //each dice roll is added to an array
  }
  let fourOrganisedRolls = rolls.sort().shift(); // the array is organised from lowest to highest, and then the smallest is removed 
  const initialValue = 0; 
  let sumWithInitial = 0;
  sumWithInitial = rolls.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  ); // this  allows us to add all the numbers in the array together creating one full stat
  stats.push(sumWithInitial); // this adds the sum to the stat array
}
console.log(stats); // this prints the array to the console.
}

module.exports = roll;