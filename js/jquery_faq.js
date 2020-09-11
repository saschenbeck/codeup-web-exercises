"use strict";

$(window).ready(function () {
    $("dd").addClass("invisible");
});

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
    $(this).next("ul").children().toggleClass("bold");
});

var funFact = $("li");
funFact.click(function () {
    $(this).parent().children().first().toggleClass("blueFont")
});

var swapPictures = $("#pictures");
var leftPicture = $(swapPictures).children().first();
var middlePicture = $(swapPictures).children().eq(2);
var rightPicture = $(swapPictures).children().last();
$("#leftSwap").click(function () {

});