class Fight {
  constructor(player1, player2) {
    this.turn = 0;
    this.fighters = [player1, player2];
  }
  singleRoll(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }
  rollDice(sides, quantity) {
    let total = 0;
    for (let i = 0; i < quantity; i++) {
      total += this.singleRoll(sides)
    };
    return total;
  }
  takeTurn(attacker, defender) {
    const attackScore = this.singleRoll(6) + attacker.attack;
    const defendScore = this.singleRoll(6) + defender.defend;
    if (attackScore > defendScore) {
      defender.takeDamage(1);
      console.log(`defender takes damage...${defender.health}HP remaining`);
    };

    console.log(`ATT: ${attackScore} DEF: ${defendScore}`);
  }
  nextFighter() {
    const currentOrder = this.fighters;
    currentOrder.reverse();
    this.fighters = currentOrder;
    console.log(this.fighters);
  }
  commence() {
    let [attacker, defender] = this.fighters;
    console.log(`
      ${attacker.name}(${attacker.speed}), 
      ${defender.name}(${defender.speed})
      `);

    if (attacker.speed > defender.speed) {
      console.log(`${attacker.name}'s initiative!`);
    }
    else if (defender.speed > attacker.speed) {
      console.log(`${defender.name}'s initiative!`); 
    }
    else console.log("no attacker initiative bonus");
  }
}

export default Fight;