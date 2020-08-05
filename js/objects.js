(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Skyler",
        lastName: "Aschenbeck"
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName + "!";
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    const discountAmount = function(amount){
        var discountPercent = .12
        return "$" + (amount - (amount * discountPercent)).toFixed(2);
    };

    shoppers.forEach(function (shopper) {
        if( shopper.amount > 200){
            console.log(shopper.name + " has qualified for the 12% discount. They were going to pay $" + shopper.amount.toFixed(2) + ". Now they will pay " + discountAmount(shopper.amount));
        }else{
            console.log(shopper.name + " did not qualify for the 12% discount. They will still pay $" + shopper.amount.toFixed(2));
        }

    })





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function (book) {
    //     console.log("Book #" + (books.indexOf(book) + 1));
    //     console.log("Title: " + book.title)
    //     console.log(("Author: " + book.author.firstName + " " + book.author.lastName))
    //     console.log("---")
    // })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var books = [];

    function createBook(title, firstName, lastName, booksArray){
        var bookEntry = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }

        booksArray.push(bookEntry);
        return booksArray;

    }
    createBook("Ready Player One", "Ernest", "Cline", books);
    createBook("How to Win Friends and Influence People", "Dale", "Carnegie",books);
    createBook("Green Eggs and Ham", "Theodor", "Geisel", books);
    createBook("The Lighting Thief", "Rick", "Riordan", books);
    createBook("Original Sin", "Jason", "Aaron", books);
    createBook("The Cat in the Hat", "Theodor", "Geisel", books);

    // books.forEach(function (book) {
    //     console.log("Book #" + (books.indexOf(book) + 1));
    //     console.log("Title: " + book.title)
    //     console.log(("Author: " + book.author.firstName + " " + book.author.lastName))
    //     console.log("---")
    // });

    function showBookInfo(book){
        books.forEach(function (book) {
            console.log("Book #" + (books.indexOf(book) + 1));
            console.log("Title: " + book.title)
            console.log(("Author: " + book.author.firstName + " " + book.author.lastName))
            console.log("---")
        })
    }
    showBookInfo(books);
})();
