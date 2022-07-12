const readline = require("readline-sync");
//constructs a Player object
function Player (name) {
    this.name = name;
    this.inventory = [];
    this.hp = 10;
}

/*PLAYER OBJECT FUNCTIONS*/

/** 
 * Player walks
 * @param none
 * @return {int} random number between 0 & 11
 */
Player.prototype.walk = function() {
    //random number between 0 & 11 represents a 1/4 chance of encountering an enemy 
    // (three different enemy types --> 3/12 = 1/4)
    return Math.floor(Math.random() * 12);
}

/** 
 * Player runs away from enemy
 * @param {object} enemy used to reference enemy type
 * @return {int} outcome (0 if successful, 1 if unsuccessful)
 */
Player.prototype.run = function(enemy) {
    if (Math.random() < .5){
        console.log(`You didn't run fast enough. The ${enemy.type} attacks`);
        return 1;
    }
    console.log(`You got lucky and were able to outrun the ${enemy.type}.`)
    return 0;
}

/** 
 * Player enters one turn of battle with enemy
 * @param {object} enemy used to reference enemy type
 * @param {int} condition used to determine who attacks first (1 is player, 2 is enemy)
 * @return {int} 1 if player attacks next, 2 if enemy attacks next, 3 if player wins, 4 if player loses
 */
Player.prototype.enterBattle = function(enemy, condition){
    //player attacks enemy
    if (condition === 1){
        enemy.hp -= takeDamage(10);
        if (enemy.hp <= 0){
            console.log(`Wow! Your attack defeated the ${enemy.type}, and it dropped something. A ${enemy.item} has been added to your inventory.`);
            player.inventory.push(enemy.item);
            return 3;
        }
        console.log(`You attack the ${enemy.type}. Its health is now ${enemy.hp}.`)
        condition ++;
    }

    //enemy attacks player
    if (condition === 2){
        this.hp -= takeDamage(3);
        if (this.hp <= 0){
            console.log(`The ${enemy.type} landed a crushing blow. You fall to the ground in defeat.`)
            return 4;
        }
        console.log(`The ${enemy.type} attacks you. Your health is now ${this.hp}.`);
        condition --;

    }

    return condition;
}

/** 
 * Helper function determines how much damage to be taken
 * @param {int} max max damage that can be generated
 * @return {int} amount of damage to be taken
 */
 function takeDamage(max){
    return Math.floor(Math.random() * max);
}

/** 
 * Prints player name, health, and inventory to console.
 * @param none
 * @return none
 */
Player.prototype.print = function() {
    console.log(`Your name: ${this.name}`);
    console.log(`Your health: ${this.hp}`);
    console.log(`Your inventory: ${this.inventory.toString()}`);
}

// constructs an Enemy object
function Enemy (type) {
    switch(type){
        case 0: 
            this.type = "Dragon";
            this.hp = 15;
            this.item = 'Golden Egg';
            break;
        case 1: 
            this.type = "Barracuda";
            this.hp = 12
            this.item = 'Silver Fang';
            break;
        case 2: 
            this.type = "Robot Platypus";
            this.hp = 25;
            this.item = 'Diamond Crystal';
            break;
    }
}


/*GAME BEGINS*/

console.log("You wake up in the middle of a field, with no civilization in sight.")
const name = readline.question("What is your name, traveler? ");
let player = new Player(name);
console.log(`Hello, ${player.name}. Enter 'p' or 'Print' at any time to view your inventory and stats.`);

let input = "w";

while(input === "w") {
    input = readline.question("Enter 'w' to walk ");
    
    //require 'w' 'p' or 'Print' as valid inputs
    while(input!= 'w' && input!= 'p' && input != 'Print'){
        input = readline.question("Enter 'w' to walk ");
    }

    //print stats
    if(input === 'p' || input === 'Print'){
        player.print();
        input = 'w';
        continue;
    }

    let odds = player.walk();

    //if player.walk returns 0, 1, or 2 (out of 0-11) encounter an enemy
    if (odds >= 0 && odds < 3){
        let enemy = new Enemy(odds);
        let action = '';
        let condition = 0;
        
        console.log(`A wild ${enemy.type} has appeared!`);

        while(action != 'a' && action != 'r'){
            action = readline.question("Enter 'a' to attack, or 'r' to run ");
        }

        //if player chooses run, determine if run was successful
        if (action === 'r'){
            let outcome = player.run(enemy);
            if (outcome != 1){
                continue;
            }

            //if unsuccessful, enemy attacks first
            condition = 2;
        }

        //if player choose attack, player attacks first
        if (action === 'a'){
            condition = 1;
        }

        //enter a round of battle with enemy until either player or enemy die
        while(player.hp > 0 && enemy.hp > 0){
            condition = player.enterBattle(enemy, condition);
        }
        
        //if player dies, game over
        if (condition === 4){
            console.log('GAME OVER');
            break;
        }
    }
}