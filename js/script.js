//Question 1

var winningNumbers = [1, 76, 2, 78, 16, 7];

console.log(winningNumbers[2])

//Question 2

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

var newItem = vegetables.push("carrot");

console.log(newItem);

//Question 3

var randomThings = ["pumpkin", false, 23, true, "tomato"];

for (i = 0; i < randomThings.length; i++) {

    console.log(randomThings[i]);
}

//Question 4

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {

    var typeOfThings = typeof(moreThings[i]);

    if (typeOfThings === "number") {
        console.log(moreThings[i]);
    }
}


//Question 5

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var alfabet = ingredients.sort();

for (var i = 0; i < ingredients.length; i++) {

console.log(alfabet[i]);

}

//Question 6

//my first answere

/*var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 1; i < characters.length; i = i + 2){

    console.log(characters[i]);

}*/

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {

    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}    
