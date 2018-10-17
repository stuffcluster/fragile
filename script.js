import { heroStats, monsterStats } from "./stats";
import Entity from "./entity";
import Fight from "./fight";
import GetStats from "./getStats";


const hero = new Entity(heroStats);
const monster = new Entity(monsterStats);
const battle = new Fight(hero, monster);

function init() {
  const display = document.querySelector(".display");

  const playerOneBoard = document.createElement("div");
  playerOneBoard.className = battle.fighters[0].name;
  display.appendChild(playerOneBoard);

  const playerTwoBoard = document.createElement("div");
  playerTwoBoard.className = battle.fighters[1].name;
  display.appendChild(playerTwoBoard);
};

const renderPlayer = (entity) => {
  console.log(`${CSS.escape(entity.name)}`);
  let playerBoard = document.querySelector(`.${entity.name}`);
  let stats = `
    <p>HP: ${entity.health}</p>
    <p>AT: ${entity.attack}</p>
    <p>DF: ${entity.defend}</p>
    <p>SP: ${entity.speed}</p>
    <p>ST: ${entity.stamina}</p>
  `;
  console.log(playerBoard);
  playerBoard.innerHTML = stats;
}

window.onload = init();
window.battle = battle;
window.hero = hero;
window.GetStats = GetStats;
window.monster = monster;
window.renderPlayer = renderPlayer;
window.init = init;