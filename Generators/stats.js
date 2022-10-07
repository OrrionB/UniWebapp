function roll() {
  let rolls = [];
  let stats = [];
  for (let i = 0; i < 6; i++) {
    rolls = [];
    for (let i = 0; i < 4; i++) {
      let a = Math.floor(Math.random() * 6) + 1;
      rolls.push(a);
    }
    let fourOrganisedRolls = rolls.sort().shift();
    const initialValue = 0;
    let sumWithInitial = 0;
    sumWithInitial = rolls.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    stats.push(sumWithInitial);
  }
  console.log(stats);
}

roll();
