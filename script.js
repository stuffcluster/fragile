import { heroStats, monsterStats } from "./stats";
import Entity from "./entity";
import Fight from "./fight";
import GetStats from "./getStats";

const hero = new Entity(heroStats);
const monster = new Entity(monsterStats);

const model = {
  turn: 0,
  fighters: [hero, monster],
}

const view = {
  messageBoard: document.querySelector(".messageBoard"),

  broadcast(message){
    let messageNode = `<p class="fade-off">${message}</p>`
    this.messageBoard.innerHTML = messageNode;
  },
  clear(element){
    document.querySelector(`.${element}`).innerHTML = "";
  }
}
const controller = {
  init() {
    view.clear("display");
    const display = document.querySelector(".display");
    //make the divs -- this can be DRYer
    const playerOneBoard = document.createElement("div");
    playerOneBoard.className = model.fighters[0].name;
    display.appendChild(playerOneBoard);
    
    // const messageBoard = document.createElement("div");
    // messageBoard.className = "messageBoard";
    // display.appendChild(messageBoard);
  
    const playerTwoBoard = document.createElement("div");
    playerTwoBoard.className = model.fighters[1].name;
    display.appendChild(playerTwoBoard);
  
    renderPlayer(model.fighters[0]);
    renderPlayer(model.fighters[1]);
  },
  singleRoll(sides) {
    return Math.floor(Math.random() * sides) + 1;
  },

  rollDice(sides, quantity) {
    let total = 0;
    for (let i = 0; i < quantity; i++) {
      total += this.singleRoll(sides)
    };
    return total;
  }

}


const battle = new Fight(hero, monster);


const renderPlayer = (entity) => { // should this be an entity method?
  // console.log(`${CSS.escape(entity.name)}`);
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

window.onload = controller.init();
window.battle = battle;
window.hero = hero;
window.GetStats = GetStats;
window.monster = monster;
window.renderPlayer = renderPlayer;
window.model = model;
window.view = view;