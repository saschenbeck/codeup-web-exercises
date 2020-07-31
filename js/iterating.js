(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Andrew", "Drew" , "Ann", "Phil"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("The number of elements in the names array is " + names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("The person at the first index is " + names[0]);
    console.log("The person at the second index is " + names[1]);
    console.log("The person at the third index is " + names[2]);
    console.log("The person at the fourth index is " + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(var i = 0; i < names.length; i++){
        console.log("The name at index " + i + " is: " + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name,nameIndex){
        console.log("The person at index " + nameIndex + " is " + name);

    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    const first = function (arr) {
        return arr[0];
    }

    console.log(first(names));

    const second = function (arr) {
        return arr[1];
    }

    console.log(second(names));

    const last = function (arr) {
        return arr[arr.length - 1];
    }

    console.log(last(names));


})();
/*I attempted to input these functions within IIFE, however the functions would
appear as not defined within the console*/
var numberLine = [1, 2, 3, 4, 5];

function first(x) {
    console.log(x[0]);
}

function second(x) {
    console.log(x[1]);
}

function last(x) {
    console.log(x[x.length]);
}
