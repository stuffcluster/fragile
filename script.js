class environment {
  constructor(){
    this.players = {};
    this.turn = 0; // not used yet
  };
  rollDice(sides, throws){ // import as helper function?
    let result = 0;
    for(let i=0; i<throws ; i++) {
      let singleDie = Math.floor(Math.random() * sides) + 1;
      result += singleDie;
    };
    console.log(result);
    return result;
  };
  makePlayers(names){
    names.forEach((name, index) => {
      this.players[index] = new player(name, this.rollDice(20, 1), this.rollDice(20, 1), this.rollDice(20, 1), this.rollDice(20, 1), 0);
    });
  };
  renderPlayers(){
    const cardArea = document.querySelector(".splitscreen");
    Object.keys(this.players).forEach(playerObjectKey => {
      let playerName = this.players[playerObjectKey].name;
      const node = document.createElement("div");
      node.className = "playerCard";
      node.innerHTML = `
        <div id="${playerName}"></div>
        <button onclick="arena.players[${playerObjectKey}].takeDamage(1)">TAKE DAMAGE</button>
        <button class="D6" onclick="arena.rollDice(6,1)">D6</button>
        <button class="D8" onclick="arena.rollDice(8,1)">D8</button>
        <button class="D10" onclick="arena.rollDice(10,1)">D10</button>
        <button class="D12" onclick="arena.rollDice(12,1)">D12</button>
        <button class="D20" onclick="arena.rollDice(20,1)">D20</button>
      `;
      cardArea.appendChild(node);
      arena.players[playerObjectKey].render();
    });
  };
}

class player {
  constructor(name, health, might, defense, attack, modifier){
      this.name = name;
      this.health = health;
      this.might = might;
      this.defense = defense;
      this.attack = attack;
      this.modifier = modifier;
  };
  takeDamage(amount) {
    this.health = this.health - amount;
    this.render();
  };
  render() {
    let playerInfo = (
      `<h1>${this.name}</h1>
      <div id="${this.name}-health" class="healthBar"></div>
      <div id="${this.name}-might" class="mightBar"></div>
      <div id="${this.name}-shield"><div>
      <h1>ATT: ${this.attack}</h1>
      <h1>MOD: ${this.modifier}</h1>
      `
      );
    document.querySelector(`#${this.name}`).innerHTML = playerInfo;
      
    let heart = `
      <svg height="10%" width="10%" viewBox="0 0 206.637 206.637" y="0px" x="0px">
        <path id="heart" d="M153.074,170.291c-7.045,13.19-14.576,23.687-20.284,28.58c-6.012,5.153-12.752,7.767-20.032,7.767  c-14.676,0-31.813-10.481-52.389-32.042c-19.268-20.189-25.259-43.386-26.892-59.291c-1.868-18.185,1.243-36.145,7.925-45.754  c0.078-0.112,0.161-0.22,0.25-0.323c0.217-0.253,0.836-0.968,1.696-1.939c13.403,3.252,34.674,10.711,48.272,26.948  c12.1,14.447,17.531,28.163,21.895,39.185c3.657,9.237,6.815,17.214,12.677,23.075C134.047,164.35,145.299,168.345,153.074,170.291z   M97.754,89.099c10.469,12.5,16.193,24.306,20.422,34.482c6.04-1.26,20.358-5.36,31.97-17.362  c9.172-9.479,14.138-25.945,16.646-37.592c-4.027-6.218-9.3-9.001-14.394-11.05c-1.104-0.443-2.057-0.827-2.695-1.199  c-1.93-1.126-3.262-10.092-0.746-23.999c1.158-6.4,2.194-8.687,2.272-8.854c0.573-1.092,0.611-2.391,0.098-3.517  c-0.526-1.155-1.569-1.991-2.81-2.255l-11-2.334c-2.126-0.453-4.217,0.874-4.721,2.984c-2.63,11.017-7.923,29.937-10.933,33.807  c-0.286,0.368-0.844,0.985-1.366,0.985c-1.133,0-3.331-2.222-3.481-5.387c-0.264-5.531,1.829-33.267,2.658-43.486  c0.09-1.113-0.289-2.214-1.046-3.035S116.804,0,115.687,0h-9.333c-2.103,0-3.847,1.629-3.991,3.727  c-0.021,0.303-2.092,30.35-3.978,40.097c-0.784,4.05-2.414,12.477-4.98,12.477c-0.345,0-0.957-0.093-1.915-0.534  c-4.64-2.139-8.218-18.239-9.565-24.301c-1.875-8.435-1.905-16.717-1.905-16.798c0-1.241-0.576-2.412-1.56-3.17  c-0.984-0.757-2.263-1.014-3.463-0.697l-11.333,3c-2.12,0.562-3.393,2.725-2.854,4.851c0.026,0.102,2.607,10.313,4.342,19.591  c1.056,5.65-1.338,11.347-6.101,14.512c-1.081,0.719-2.116,1.417-3.02,2.045c-1.806,1.254-4.161,3.459-6.444,5.778  C63.999,64.556,84.046,72.732,97.754,89.099z M155.895,111.781c-12.347,12.761-27.064,17.6-34.683,19.344  c3.345,8.442,6.066,15.142,10.637,19.713c7.15,7.149,18.178,10.586,24.956,12.109c9.455-19.578,17.164-43.386,16.882-63.671  c-0.1-7.208-0.775-13.091-1.871-17.949C168.617,92.02,163.607,103.811,155.895,111.781z" />
      </svg>
    `;
    
    let heartBar = document.querySelector(`#${this.name}-health`);
    for(let i=0; i<this.health; i++){
      let heartNode = document.createElement("div");
      heartNode.classList.add("heartIcon");
      heartNode.innerHTML = heart;
      heartBar.appendChild(heartNode);
    }   
    let arm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.463 50.463">
    <path d="M47.923 29.694c.021-.601-.516-1.063-.901-1.515-.676-2.733-2.016-5.864-3.961-8.971C39.942 14.23 31.688 6.204 28.553 4.966a2.797 2.797 0 0 0-.429-.126c-.313-1.013-.479-1.708-1.698-2.521C23.072.083 19.327-.547 16.848.476c-2.481 1.023-3.859 6.687-1.19 8.625 2.546 1.857 7.583-1.888 9.195.509 1.609 2.396 3.386 10.374 6.338 15.473a17 17 0 0 0-2.307-.156c-3.406 0-6.467.998-8.63 2.593-1.85-2.887-5.08-4.806-8.764-4.806-3.82 0-7.141 2.064-8.95 5.13v22.619h4.879l1.042-1.849c3.354-1.287 7.32-4.607 10.076-8.147 11.014 4.322 29.139-3.678 29.386-10.773z" fill="#010002"/>
    <text x="40%" y="70%" class="might-text">${this.might}</text>
    </svg>`;
    let mightBar = document.querySelector(`#${this.name}-might`);
        let mightNode = document.createElement("div");
    mightNode.classList.add("mightIcon");
    mightNode.innerHTML = arm;
    mightBar.appendChild(mightNode);

    let shield = `<svg xmlns="http://www.w3.org/2000/svg"  width="50%" height=" 50%" viewBox="0 0 352.644 352.644">
    <path d="M324.478 51.943L177.986.285a4.994 4.994 0 0 0-3.326 0L28.166 51.943a5 5 0 0 0-3.337 4.715c0 52.278 13.834 112.711 37.956 165.805 19.566 43.069 54.751 100.519 111.248 129.625a5 5 0 0 0 4.58 0c56.496-29.106 91.68-86.556 111.247-129.625 24.121-53.094 37.955-113.527 37.955-165.805a5 5 0 0 0-3.337-4.715z"/>
    <text x="40%" y="50%" class="shield-text">${this.defense}</text>
  </svg>
  `;
    let shieldBar = document.querySelector(`#${this.name}-shield`);

    let shieldNode = document.createElement("div");
    shieldNode.classList.add("shieldIcon");
    shieldNode.innerHTML = shield;
    shieldBar.appendChild(shieldNode);
  } 
};

function init() {
  arena = new environment(); 
  arena.makePlayers(["Conan", "Mike"]);
  arena.renderPlayers();
};

window.onload = init(); 

