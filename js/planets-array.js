(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log("Before unshift", planets);
    planets.unshift("The Sun");
    console.log("After unshift", planets);

    console.log("_______________________________________");

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log("Before push", planets);
    planets.push("Pluto");
    console.log("After push", planets);

    console.log("_______________________________________");

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log("Before shift", planets);
    planets.shift();
    console.log("After shift", planets);

    console.log("_______________________________________");

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log("Before pop", planets);
    planets.pop();
    console.log("After pop", planets);

    console.log("_______________________________________");

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log("The index of Earth is " + planets.indexOf("Earth"));

    console.log("_______________________________________");

    console.log("Reversing the order of the planets array.");
    console.log(planets.reverse());

    console.log("_______________________________________");

    console.log("Sorting the planets array.");
    console.log(planets.sort());
})();
