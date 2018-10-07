class player {
    constructor(name, health, might){
        this.name = name;
        this.health = health;
        this.might = might;
    };
    takeDamage(amount) {
        this.health = this.health - amount;
        this.render();
    };
    render() {
        let playerInfo = (
            `<h1>${this.name}</h1>
            <h1>HP: ${this.health}</h1>
            <h1>MIGHT: ${this.might}</h1>`
        );
        document.querySelector(`#${this.name}`).innerHTML = playerInfo;
    }
};

var players = {};

function init() { // should be generatePlayers or something
    players.playerOne = new player("Mark", 10, 12);
    players.playerTwo = new player("Lewis", 10, 12);
            
    Object.keys(players).forEach(playerObjectKey => {
        const cardArea = document.querySelector(".splitscreen");
        let playerName = players[playerObjectKey].name;
        const node = document.createElement("div");
        node.innerHTML = `
            <div class="playerCard">
            <div id="${playerName}"></div>
            <button onclick="players.${playerObjectKey}.takeDamage(1)">TAKE DAMAGE</button>
            </div
        `;
        cardArea.appendChild(node);
        players[playerObjectKey].render();
    });
};



window.onload = init(); 

