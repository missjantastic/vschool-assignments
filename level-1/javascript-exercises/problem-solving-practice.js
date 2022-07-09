function largest(values){
    let currentMax = 0;
    for(let i = 0; i < values.length; i++){
        if (values[i] > currentMax){
            currentMax = values[i];
        }
    }
    return currentMax;
}

console.log(largest([3, 5, 2, 8, 1]));

function lettersWithStrings(words, char){
    let finalWords = []
    for(let i = 0; i < words.length; i++){
        stringCompare = words[i].replace(char, "diff");
        if (stringCompare !== words[i]){
            finalWords.push(words[i]);
        }
    }
    return finalWords;
}

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));

function isDivisible(num1, num2){
    if (num1%num2 === 0){
        return true
    } else return false;
}
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false
