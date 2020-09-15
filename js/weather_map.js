"use strict";

(function () {
    $(document).ready(function () {
        var opwUrl = "http://api.openweathermap.org/data/2.5/forecast"
        $.get(opwUrl, {
            "APPID": OPW_API,
            "q": "Irving, TX, US",
            "units": "imperial",
        }).done(function (forecast) {
            console.log("5 Day Forecast", forecast);
        });
    });
})();
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-96.9489, 32.814], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

function placeMarkerAndPopup(info, token, map) {
    geocode(info, token).then(function(coordinates) {
        var popup = new mapboxgl.Popup().setHTML(info.popupHTML);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
        popup.addTo(map);
    });
};



placeMarkerAndPopup("Irving, TX", mapboxgl.accessToken, map);

$("#weatherLocationSubmit").click(function (e) {
    e.preventDefault();
    console.log("success");
})

