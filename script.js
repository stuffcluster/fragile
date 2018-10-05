class player {
    constructor(name, health){
        this.name = name;
        this.health = health;
    };
    takeDamage(amount) {
        this.health = this.health - amount;
        console.log(this.health);
        document.querySelector("#playerOneStats").innerHTML = getStats(players.playerOne); // OMFG I can't believe this works
    };

};

// the global variable has to be defined, not just declared 
// using var instead of let or const so it can be inspected in dev tools
var players = {};

function init() {
    players.playerOne = new player("Mark", 10);
    players.playerTwo = new player("Lewis", 3);

    document.querySelector("#playerOneStats").innerHTML = getStats(players.playerOne);

    console.table(players);
};

function getStats(player) { // should this be a method? a getter on the player object?
  return (
    // hpw to update this on change?
      `
      <h1>${player.name}</h1>
      <h1>HP: ${player.health}</h1>
      `
  ); 
}

window.onload = init(); 

