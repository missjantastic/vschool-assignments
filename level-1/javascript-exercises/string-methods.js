// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
function capitalizeAndLowercase(string){
    let uppercaseWord = string.toUpperCase();
    let lowercaseWord = string.toLowerCase();
    return uppercaseWord+lowercaseWord;
}
console.log(capitalizeAndLowercase("HeLlo"));

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
function findMiddleIndex(string){
    return Math.floor(string.length/2);
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.
function returnFirstHalf(string){
    let halfPoint = Math.floor(string.length/2);
    let firstHalf = string.slice(0, halfPoint);
    return firstHalf;
}
console.log(returnFirstHalf("Hello")); // => "He"
console.log(returnFirstHalf("Hello World")); // => "Hello"

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
function capitalizeAndLowercase(string){
    let halfPoint = Math.floor(string.length/2);
    let firstHalf = string.slice(0, halfPoint).toUpperCase();
    let lastHalf = string.slice(halfPoint).toLowerCase();
    return firstHalf + lastHalf;
}
console.log(capitalizeAndLowercase("Hello")); // => "HEllo"
console.log(capitalizeAndLowercase("Hello World")); // => "HELLO world"

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.
function capitalize(string){
    let stringArr = string.split(" ");
    for (let i = 0; i < stringArr.length; i++){
        stringArr[i] = stringArr[i][0].toUpperCase() + stringArr[i].slice(1);
    }
    finalString = stringArr.join(" ");
    return finalString;
}
console.log(capitalize("hey friends! practice practice practice!")); // -> "Hey Friends! Practice Practice Practice!"