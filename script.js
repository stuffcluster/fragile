import { heroStats } from "./stats.js";

class Entity {
  constructor({ name, health, attack, defend, stamina, speed }) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defend = defend;
    this.stamina = stamina;
    this.speed = speed;
  }
  takeDamage(damage) {
    this.health -= damage;
  }
}

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

function gatherStats(sample) {
  blowsLanded = 0;
  blowsBlocked = 0;
  for (let i = 0; i < sample; i++) {
    const result = battle.takeTurn(hero, monster);
    switch (result) {
      case result[0] > result[1]:
      blowsLanded++;
      break;
      case result[1] > result[0]:
      blowsBlocked++;
      break;
      default:
      null;
    }
  };
  console.log(`hero: ${blowsLanded} monster: ${blowsBlocked}`);
}

const monsterStats = {
  name: "monster",
  health: 3,
  attack: 3,
  defend: 4,
  stamina: 3,
  speed: 4
};

const hero = new Entity(heroStats);
const monster = new Entity(monsterStats);
const battle = new Fight(hero, monster);

console.log(hero);

window.battle = battle;
window.hero = hero;
