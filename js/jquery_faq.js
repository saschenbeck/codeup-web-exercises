"use strict";

$(window).ready(function () {
    $("dd").addClass("invisible");
});

$("#toggleLink").click(function (event) {
    event.preventDefault();
    $("dd").toggleClass("invisible")
});

var webpage = document.documentElement.innerHTML
var webpageDT = webpage.match(/<dt>/g);
var webpageDD = webpage.match(/<dd/g);
