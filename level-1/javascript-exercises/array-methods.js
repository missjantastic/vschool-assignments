var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayMethod(fruits, vegetables){
    vegetables.pop();
    fruits.shift();
    fruits.push(fruits.indexOf("orange"));
    vegetables.push(vegetables.length);
    let food = fruits.concat(vegetables);
    food.splice(4, 2);
    food.reverse();
    foodString = food.join(",");
    return foodString;
}

console.log(arrayMethod(fruit, vegetables));