"use strict";

//while loop exercise
var startPoint = 2;
while(startPoint <= 65536){
    console.log(startPoint);
    startPoint *=2;
}

//do while loop exercise

//An ice cream seller can't go home until she sells all of her cones.
//Inside of the loop your code should generate another random number
// between 1 and 5, simulating the amount of cones being bought by her
// clients.
//Use a do-while loop to log to the console the amount of cones sold to each person.
// This is a way get the random numbers for this exercise.

var allCones = Math.floor(Math.random() * 50) + 50;
// This is how you get a random number between 50 and 100

console.log("Starting number of cones: " + allCones);
do {
    var customerPurchase = Math.floor(Math.random() * 5 + 1);
    if(customerPurchase > allCones){
        console.log("Cannot sell " + customerPurchase + " because we only have " + allCones + " cones left.")
        continue;
    }
    console.log("This customer bought " + customerPurchase + " cones.");
        allCones -= customerPurchase;
    } while(allCones > 0)
console.log("Yay! I sold them all!")