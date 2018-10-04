
let playerOne = 3;
let playerTwo = 3;

function hit(e) {
    let result = Math.round(Math.random());
    // let enemy = e.value === "player one" ? playerTwo : playerOne;
    let enemy;
    e.value === "playerOne" ? enemy = playerTwo : enemy = playerOne;
    console.log(enemy);
    // console.log(result > 0 ? "HIT" : "MISS");
    result ? affect(enemy) : console.log("MISS");
};

function affect(enemy,result) {
    enemy = enemy -1;
    console.log("player one: " + playerOne);
    console.log("player two: " + playerTwo);

}
