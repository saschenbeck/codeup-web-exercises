"use strict";

 // while(true) {
 //     var userInput = parseFloat(prompt("Please enter an odd number between 1 and 50."));
 //     for (var i = 0; i <= 50; i++) {
 //         if (i % 2 !== 0) {
 //             if (i === userInput) {
 //                 continue;
 //             }
 //         }else{
 //             userInput;
 //         }
 //         console.log(i);
 //     }
 //     if (userInput % 2 !== 0) {
 //         break;
 //     }
 // }
while(true){
    var userInput = parseFloat(prompt("Please enter an odd number between 1 and 50"));
    if(userInput % 2 !== 0){
        break;
    }
}
console.log("Number to skip is " + userInput)
for(var i = 0; i <=50; i++){
    if(i % 2 !==0){
        if(i === userInput){
            continue
        }
        console.log("Here is an odd number: " + i);
    }
}
