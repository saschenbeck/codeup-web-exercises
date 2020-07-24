"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my website!");
var colorQuestion = prompt("What is you favorite color?");
console.log("color", colorQuestion);
alert("Great, "+ colorQuestion+ " is my favorite color too!");
alert("Hey, you rented some movies for your kids! " +
    "You ended up getting The Little Mermaid, Brother Bear, and Hercules. " +
    "Each movie costs $3 per day to rent. Let's find out how much you'll pay");
var mermaidResponse = prompt("How many days did you rent the Little Mermaid?");
console.log("mermaid", mermaidResponse);
var bearResponse = prompt("How many days did you rent Brother Bear?");
console.log("bear", bearResponse);
var herculesResponse = prompt("How many days did you rent Hercules?");
console.log("hercules", herculesResponse);
var rentalPrice = (mermaidResponse * 3) + (bearResponse * 3) + (herculesResponse * 3);
console.log("price", rentalPrice);
alert("Hey, you paid $" + rentalPrice);
alert("It also appears that you have been working hard lately. " +
    "You have been working at Google, Amazon, and Facebook. " +
    "Google pays you $400 an hour, Amazon $380 an hour, and Facebook $350 and hour. " +
    "Let's find out what your pay is going to look like before taxes");
var googleHours = prompt("How many hours did you work at Google?");
console.log("google", googleHours);
var amazonHours = prompt("How many hours did you work at Amazon?");
console.log("amazon", amazonHours);
var facebookHours = prompt("How many hours did you work at Facebook?");
console.log("facebook", facebookHours);
var workIncome = (googleHours * 400) + (amazonHours * 380) + (facebookHours * 350);
console.log("income", workIncome);
alert("Looks like you earned $" + workIncome + " before taxes");
alert("I don't know how, but you are fitting school in while working. " +
    "There is apparently a class you want to take, but you better find out if you still can. " +
    "You need to make sure the class is not full and that it does not conflict with work.");
var classSize = confirm("Are there still spots in the class?");
console.log("enough room", classSize);
var classSchedule = confirm("Does it fit your work schedule?");
console.log("enough time", classSchedule);
var cSize = classSize.toString().replace('true','is').replace('false', 'is not');
var cSchedule = classSchedule.toString().replace('true', 'it does').replace('false', 'it does not');
function classQualify(){
    if(classSize === true && classSchedule === true){
        return "Congrats, you can attend! :)"
    }else{
        return "Unfortunately you cannot attend. :("
    }
};
alert("Looks like there "+ cSize+ " room in the class and that " +  cSchedule + " fit your schedule");
alert(classQualify());
console.log("attend?", classQualify());
alert("Oh guess what, there is apparently a special going on at your favorite store! " +
    "Let's see if you qualify.")
var expiredOffer = confirm("Is the offer still ongoing?");
console.log("not expired?", expiredOffer);
var premiumMember = confirm("Are you a premium member?");
console.log("premium?", premiumMember);
var itemsIntended = confirm("Do you plan on buying more than 2 items?");
console.log("minItems?", itemsIntended);
function saleQualify(){
    if(expiredOffer === true && (premiumMember === true || itemsIntended === true)){
        return "Congrats, you take advantage of the special! :)";
    }else{
        return "Bummer, you can't use the special. :(";
    }
};
alert(saleQualify());
console.log("qualified?",saleQualify());