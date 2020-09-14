"use strict";

$(window).ready(function () {
    $("dd").addClass("invisible");
    $("h3").next().addClass("hidden");
    $("#register").addClass("hidden");
    setTimeout(function () {
        $("#register").fadeIn();
    }, 8000)
});
var newsBTN = $("#newsletterBTN")
newsBTN.click(function () {
    $("#newsletter").toggle();
    var newsBTNText = newsBTN.html()
    if(newsBTNText === "X"){
        $(newsBTN).html("Are you sure?")
    }else{
        $(newsBTN).html("X")
    }
})

$("#toggleLink").click(function (event) {
    event.preventDefault();
    $("dd").toggleClass("invisible")
});

$("#lastFact").click(function () {
    $("ul").each(function (index, element) {
        $(element).children().last().toggleClass("highlight")
    });
});

var nationalPNames = $("h3");

nationalPNames.click(function () {
    $(this).next().slideToggle();
});

var funFact = $("li");
funFact.click(function () {
    $(this).parent().children().first().toggleClass("blueFont")
});

// var swapPictures = $("#pictures");
// var leftPicture = $(swapPictures).children().first();
// var middlePicture = $(swapPictures).children().eq(2);
// var rightPicture = $(swapPictures).children().last();
// $("#leftSwap").click(function () {
//
// });

