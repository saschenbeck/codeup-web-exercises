"use strict";


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

