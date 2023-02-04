// let and const
const name = "John"
const age = 101

function runForLoop(pets) {
    const petObjects = []
    for (let i = 0; i < pets.length; i++) {
        const pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// arrow functions

// task 1
const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => ({type: "carrot", name: carrot }))
}
// console.log(mapVegetables(carrots));

// task 2
const people = [
  {
      name: "Princess Peach",
      friendly: false
  },
  {
      name: "Luigi",
      friendly: true
  },
  {
      name: "Mario",
      friendly: true
  },
  {
      name: "Bowser",
      friendly: false
  }
]

function filterForFriendly(arr) {
  return arr.filter((person) => person.friendly)
}

// console.log(filterForFriendly(people));

// task 3
const doMathSum = (a,b) => a + b;

const produceProduct = (a, b) => a * b;

console.log(doMathSum(1,2));
console.log(produceProduct(1,2));

// task 4
const printString = (firstName, lastName, age) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;

// console.log(printString('Kat', 'Stark', 40));

// task 5
const animals = [
  {
      type: "dog",
      name: "theodore"
  },
  {
      type: "cat",
      name: "whiskers"
  },
  {
      type: "pig",
      name: "piglette"
  },
  {
      type: "dog",
      name: "sparky"
  }
];

function filterForDogs(arr) {
   return arr.filter(animal => (animal.type === "dog") ? true : false);
}

// console.log(filterForDogs(animals));

// task 6
function welcomeMessage(name, location){
  return `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
}

console.log(welcomeMessage('Janice', 'Hawaii'))