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

function init() {
    players.playerOne = new player("Mark", 10, 12); //haaaaack
    players.playerTwo = new player("Lewis", 10, 12);

    players.playerOne.render();
    players.playerTwo.render(); //do as foreach

    console.table(players);
};



window.onload = init(); 

