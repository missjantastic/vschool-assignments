function fizzbuzz(start, end){
    let fizzCount = 0;
    let buzzCount = 0;
    let fizzBuzzCount = 0;
    for(let i = start; i <= end; i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
            fizzBuzzCount++;
        }
        else if(i%3===0){
            console.log("Fizz");
            fizzCount++;
        }
        else if(i%5===0){
            console.log("Buzz");
            buzzCount++;
        }
    }
    let fizzbuzzes = {fizzBuzzCount, fizzCount, buzzCount};
    return fizzbuzzes;
}

console.log(fizzbuzz(1,100));