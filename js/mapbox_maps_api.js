"use strict";
mapboxgl.accessToken = mapboxToken;

geocode("701 Commerce St, Dallas, TX, 75202", mapboxToken).then(function(result) {
    console.log(result);
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: result, // starting position [lng, lat]
        zoom: 16 // starting zoom
    });
    var markerOptions = {
        color: 'red',
    }
    var codeupMarker = new mapboxgl.Marker(markerOptions)
        .setLngLat(result)
        .addTo(map);
    var codeupPopopup = new mapboxgl.Popup()
        .setLngLat(result)
        .setHTML("<h4>Codeup Rocks!</h4>")
        .addTo(map);
    codeupMarker.setPopup(codeupPopopup);
});

geocode("")