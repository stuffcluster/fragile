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
            <h1>HP: ${this.health}</h1>
            <h1>MIGHT: ${this.might}</h1>
            <h1>DEF: ${this.defense}</h1>
            <h1>ATT: ${this.attack}</h1>
            <h1>MOD: ${this.modifier}</h1>
            `
        );
        document.querySelector(`#${this.name}`).innerHTML = playerInfo;
    }
};


// Players and init could be on a class called "encounter" or something? it would have methods that contol the logic for the combat, perhaps? players object below would be state for that class and init would be one of its methods?

var players = {};

function init() { // should be generatePlayers or something
    players.playerOne = new player("Mark", 10, 12, 10 , 10, 10, 10,);
    players.playerTwo = new player("Lewis", 10, 12, 10 , 10, 10, 10);
    players.playerThree = new player("Jim", 10, 12, 10 , 10, 10, 10);
            
    Object.keys(players).forEach(playerObjectKey => {
        const cardArea = document.querySelector(".splitscreen");
        let playerName = players[playerObjectKey].name;
        const node = document.createElement("div");
        node.className = "playerCard";
        node.innerHTML = `
            <div id="${playerName}"></div>
            <button onclick="players.${playerObjectKey}.takeDamage(1)">TAKE DAMAGE</button>
        `;
        cardArea.appendChild(node);
        players[playerObjectKey].render();
    });
};

window.onload = init(); 

