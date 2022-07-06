const readline = require("readline-sync");
console.log('You are trapped in a room and you have to escape! ');

let isDoorOpen = false;
let isKeyFound = false;
const prompt = 'What would you like to do? \n1. Put hand in hole \n2. Find the key, or \n3. Open the door\n';
const promptV2 = 'What would you like to do next?\n1. Put hand in hole \n2. Find the key, or \n3. Open the door\n';

while (isDoorOpen === false){
    let user_choice = readline.question(prompt);
    if (user_choice === '1'){
        const startOver = readline.question('\nYou died. Would you like to start over? y/n\n');
        if(startOver === 'y' || startOver === 'Y'){
            isDoorOpen = false;
            isKeyFound = false;
        }
        else {
            console.log('Game Over');
            break;
        }
    }
    if (user_choice === '2'){
        console.log('\nYou found the key!');
        isKeyFound = true;
    }
    if (user_choice === '3'){
        if (isKeyFound){
            console.log('\nYou escaped the room! Good job!');
            isDoorOpen = true;
        }
        else {
            console.log('\nThe door is locked');
        }
    }
    else{
        console.log('\nPlease choose 1, 2, or 3');
    }
}