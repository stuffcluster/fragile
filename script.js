import { heroStats, monsterStats } from "./stats";
import Entity from "./entity";
import Fight from "./fight";
import GetStats from "./getStats";


const hero = new Entity(heroStats);
const monster = new Entity(monsterStats);
const battle = new Fight(hero, monster);

const renderPlayer = (entity) => {
  let playerOneBoard = document.querySelector(".player1")
  let stats = `
    HP: ${entity.health}
  `;
  playerOneBoard.innerHTML = stats;
}

window.battle = battle;
window.hero = hero;
window.GetStats = GetStats;
window.monster = monster;
window.renderPlayer = renderPlayer;
