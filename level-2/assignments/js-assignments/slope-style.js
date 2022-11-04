function collectAnimals(...animals) {
    const myAnimals = [];
    animals.push(...animals);
    return animals;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables};
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
}));

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst([1, 2, 3, 4, 5]));

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites([,firstFav, secondFav, ,thirdFav]){
    /*your code here*/
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities));

function combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals) {
    const combinedAnimals = [...realAnimals, ...magicalAnimals, ...mysteriousAnimals];
    return combinedAnimals;
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

