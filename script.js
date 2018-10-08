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
        Object.keys(this.players).forEach(playerObjectKey => {
            const cardArea = document.querySelector(".splitscreen");
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

function init() {
    arena = new environment(); 
    arena.makePlayers(["Conan", "Mike"]);
    arena.renderPlayers();
};

window.onload = init(); 

