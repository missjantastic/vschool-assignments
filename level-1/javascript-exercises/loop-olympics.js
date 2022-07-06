//Preliminaries
// 1. Write a for loop that prints to the console the numbers 0 through 9.
for (let i = 0; i <= 9; i++){
    console.log(i);
}

// 2. Write a for loop that prints to the console 9 through 0.
for (let i = 9; i >= 0; i--){
    console.log(i);
}

// 3. Write a for loop that prints these fruits to the console.`
let fruit = ["banana", "orange", "apple", "kiwi"];
for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}

// Bronze Medal
// 1. Write a for loop that will push the numbers 0 through 9 to an array.
let numAr = []
for (let i = 0; i <= 9; i++){
    numAr.push(i);
}
console.log(numAr);

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
for (let i = 0; i <= 100; i++){
    if (i%2 === 0){
        console.log(i);
    }
}

// 3. Write a for loop that will push every other fruit to an array.
fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
let everyOtherFruit = [];
for (let i = 0; i < fruit.length; i+=2){
   everyOtherFruit.push(fruit[i]);
}
console.log(everyOtherFruit);

// Silver Medal
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
// 1. Write a loop that will print out all the names of the people of the people array
for (let i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
}

// 2. Write a loop that pushes the names into a `names` array, and the occupations into an `occupations` array.
let names = [];
let occupations = [];
for (let i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);

// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to *another* array starting with, in this case, "Singer".
let everyOtherName = [];
let everyOtherOccupation = [];
for (let i = 0; i < peopleArray.length; i++){
    if(i%2 === 0){
        everyOtherName.push(peopleArray[i].name);
    } else {
        everyOtherOccupation.push(peopleArray[i].occupation);
    }
}
console.log(everyOtherName);
console.log(everyOtherOccupation);

// Gold Medal
// 1
let ar1 = [];
for (let i = 0; i < 3; i++){
    let tempAr = [];
    for (let j = 0; j < 3; j++){
        tempAr.push(0);
    }
    ar1.push(tempAr);
}
console.log(ar1);

//2
let ar2 = [];
for (let i = 0; i < 3; i++){
    let tempAr = [];
    for (let j = 0; j < 3; j++){
        tempAr.push(i);
    }
    ar2.push(tempAr);
}
console.log(ar2);

//3
let ar3 = [];
for (let i = 0; i < 3; i++){
    let tempAr = [];
    for (let j = 0; j < 3; j++){
        tempAr.push(j);
    }
    ar3.push(tempAr);
}
console.log(ar3);

//4
for (let i = 0; i < ar3.length; i++){
    for (let j = 0; j < ar3[i].length; j++){
        ar3[i][j] = 'x';
    }
}
console.log(ar3);