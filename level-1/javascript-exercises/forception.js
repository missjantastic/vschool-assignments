var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    let finalAr = [];
    for (let i = 0; i < people.length; i++){
        finalAr.push(people[i] + ":");
        for (let j = 0; j < alphabet.length; j++){
            finalAr.push(alphabet[j].toUpperCase());
        }
    }
    return finalAr;
}

console.log(forception(people,alphabet));