var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

// array containing alphabet letter mapped to numbers 1-26
const alphabet = {
    a: 1,
    b: 2, 
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13, 
    n: 14,
    o: 15,
    p: 16,
    q: 17, 
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
}

// turn input into an array
const inputArray = input.split('')

// transform array of letters to array of numbers that have been shifted
const cipherNums = inputArray.map((letter)=>{

    // variable to contain shift value after checking if statements
    let finalShift = shift;

    // if shifting more than 26 letters, divide shift by 26 and keep the remainder
    if (shift > 26) {
        finalShift = shift % 26
    }

    // if final number is > 26, subtract 26 from the number & return that number
    if (alphabet[letter] + finalShift > 26) {
        return (alphabet[letter] + finalShift) - 26
    }

    return alphabet[letter] + finalShift
})


// turn array back into array of letters by key value from alphabet object
const cipherLetters = cipherNums.map(num => {

    // if alphabet[key] = num, return the key
    return Object.keys(alphabet).find((key) => alphabet[key] === num)
})

// join array into a string
const output = cipherLetters.join('');

console.log(`Coded phrase is: ${output}`);