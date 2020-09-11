"use strict";

$(window).ready(function () {
    $("dd").addClass("invisible");
});

$("#toggleLink").click(function (event) {
    event.preventDefault();
    $("dd").toggleClass("invisible")
});

$("#lastFact").click(function () {
    $("ul").each(function () {
        $(this).children().last().toggleClass("highlight")
    });
});

var nationalPNames = $("h3");
nationalPNames.click(function () {
    $(this).next("ul").toggleClass("bold");
});

var funFact = $("li");
funFact.click(function () {
    $(this).parent().children().first().toggleClass("blueFont")
})