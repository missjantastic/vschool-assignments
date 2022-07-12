const readline = require("readline-sync");

function Player (name) {
    this.name = name;
    this.inventory = [];
    this.hp = 10;
}


Player.prototype.walk = function() {
    return Math.floor(Math.random() * 12);
}

Player.prototype.run = function(enemy) {
    if (Math.random() < .5){
        console.log(`You didn't run fast enough. The ${enemy.type} attacks`);
        return 1;
    }
    console.log(`You got lucky and were able to outrun the ${enemy.type}.`)
    return 0;
}

Player.prototype.enterBattle = function(enemy, condition){
    if (condition === 1){
        enemy.hp -= takeDamage(10);
        if (enemy.hp <= 0){
            console.log(`Wow! Your attack defeated the ${enemy.type}, and it dropped something. A ${enemy.item} has been added to your inventory.`);
            console.log(`Enter 'Print' or 'p' to view your inventory and stats.`)
            player.inventory.push(enemy.item);
            return 3;
        }
        console.log(`You attack the ${enemy.type}. It's health is now ${enemy.hp}.`)
        condition ++;
    }

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

Player.prototype.print = function() {
    console.log(`Your name: ${this.name}`);
    console.log(`Your health: ${this.hp}`);
    console.log(`Your inventory: ` + this.inventory.toString());
}

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

function takeDamage(max){
    return Math.floor(Math.random() * max);
}


console.log("You wake up in the middle of a field, with no civilization in sight.")
const name = readline.question("What is your name, traveler? ");
let player = new Player(name);
console.log(`Hello, ${player.name}.`);

let input = "";

do {
    input = readline.question("Enter 'w' to walk ");
    if(input === 'p' || input === 'Print'){
        player.print();
        input = 'w';
        continue;
    }
    let odds = player.walk();

    if (odds >= 0 && odds < 3){
        let enemy = new Enemy(odds);
        let action = '';
        let condition = 0;
        console.log(`A wild ${enemy.type} has appeared!`);

        while(action != 'a' && action != 'r'){
            action = readline.question("Enter 'a' to attack, or 'r' to run ");
        }

        if (action === 'r'){
            let outcome = player.run(enemy);
            if (outcome != 1){
                continue;
            }
            condition = 2;
        }

        if (action === 'a'){
            condition = 1;
        }

        while(player.hp > 0 && enemy.hp > 0){
            condition = player.enterBattle(enemy, condition);
        }
        if (condition === 4){
            console.log('GAME OVER');
            break;
        }
    }
} while (input === "w");