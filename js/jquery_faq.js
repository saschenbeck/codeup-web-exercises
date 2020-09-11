"use strict";

$(window).ready(function () {
    $("dd").addClass("invisible");
});

$("dt").click(function () {
    $("dd").toggleClass("invisible")
});

var webpage = document.documentElement.innerHTML
var webpageDT = webpage.match(/<dt>/g);
var webpageDD = webpage.match(/<dd/g);
