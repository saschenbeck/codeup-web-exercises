"use strict";

//For Loops Exercise 2
function showMultiplicationTable(x) {
    // var i = 0;
    // while (i <= 10){
    //     console.log((i * x));
    //     i++;
    // }
    // var i = 1;
    // do {
    //     console.log((i * x));
    //     i++;
    // } while (i <= 10);
    for (var i = 1; i <= 10; i++){
        console.log((i * x));
    }
}

//For Loops Exercise 3
function randomNumber(smallestNumber,largestNumber) {
    return Math.floor(Math.random() * (largestNumber - smallestNumber) + smallestNumber);
}

function oddEven20To200() {
    for(var i = 0; i <= 10; i++){
        var rNG20To200 = randomNumber(20,200);
        if(rNG20To200 % 2 === 0){
            console.log(rNG20To200 + " is even");
        }else{
            console.log(rNG20To200 + " is odd")
        }
    }
}


//For Loops Exercise 4
function cascade() {

    for (var i = 1; i < 10; i++){
        var display = "";
        for(var j = 0; j < i; j++){
            display += i;
        }
        console.log(display);
    }
}


//For Loops Exercise 5
var stoppingPoint = 0;
function minusBy5(x) {
    // for(var i = 0; i < x; i++){
    //     if((x - (i * 5) === stoppingPoint)){
    //         break;
    //     }else{
    //         console.log(x - (i * 5));
    //     }
    // }
    for(var i = x; i > 0; i -= 5){
        console.log(i);
    }
}