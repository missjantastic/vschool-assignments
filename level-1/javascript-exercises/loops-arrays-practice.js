//Exercise 1: Loop through the following array and count how many "computers" there are. Log the final count:

let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0;

for (let i = 0; i < officeItems.length; i++){
    console.log(officeItems[i]);
    if (officeItems[i] === 'computer'){
        count++;
    }
}

console.log(count);

//Exercise 2 + bonus (personalized message): Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see the movie. Let her in");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see the movie. Let him in");
    }
} else {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see the movie. Don't let her in");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see the movie. Don't let him in");
    }
}
}

  //Bonus challenge: Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array `[2, 3, 2]` would toggle the button 7 times.
function changeLightSwitch(lightSwitchArray){
    //light switch has been toggled 0 times
    let isLightSwitchOn = 0;
    for (let i = 0; i < lightSwitchArray.length; i++){
        //if the light is toggled an even amount of times, it is back at the starting point
        if (lightSwitchArray[i]%2 === 0){
            continue;
        }
        else {
            isLightSwitchOn++;
        }
    }

    if (isLightSwitchOn%2 === 0){
        console.log ("The light is off.");
    } else {
        console.log ("The light is on.");
    }
}

let ar1 = [2, 5, 435, 4, 3] // "The light is on"
let ar2 = [1, 1, 1, 1, 3]   // "The light is on"
let ar3 = [9, 3, 4, 2]      // "The light is off"

changeLightSwitch(ar1);
changeLightSwitch(ar2);
changeLightSwitch(ar3);