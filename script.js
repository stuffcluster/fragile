import { heroStats, monsterStats } from "./stats";
import Entity from "./entity";
import GetStats from "./getStats";

const hero = new Entity(heroStats);
const monster = new Entity(monsterStats);

const model = {
  turn: 0,
  fighters: [hero, monster],
}

const view = {
  display: document.querySelector(".display"),
  messageBoard: document.querySelector(".messageBoard"),
  
  init() {
    this.clear(this.display);
    // add divs for fighter stats
    model.fighters.forEach(
      fighter => {
        const playerBoard = document.createElement("div");
        playerBoard.className = fighter.name;
        this.display.appendChild(playerBoard);
        //...and ca
        this.renderPlayer(fighter);
      }
    );
  },
  renderPlayer(entity) {
    const playerBoard = document.querySelector(`.${entity.name}`);
    let stats = `
      <h3>${entity.name}</h3>
      <p>HP: ${entity.health}</p>
      <p>AT: ${entity.attack}</p>
      <p>DF: ${entity.defend}</p>
      <p>SP: ${entity.speed}</p>
      <p>ST: ${entity.stamina}</p>
    `;
    playerBoard.innerHTML = stats;
  },

  broadcast(message) {
    let messageNode = `
      <p class="fade-off">
        ${message}
      </p>
    `
    this.messageBoard.innerHTML = messageNode;
  },
  clear(element) {
    element.innerHTML="";
  }
}

const controller = {
  init() {
    view.init();
  }
}

window.onload = controller.init();
window.hero = hero;
window.monster = monster;
window.GetStats = GetStats;
window.model = model;
window.view = view;