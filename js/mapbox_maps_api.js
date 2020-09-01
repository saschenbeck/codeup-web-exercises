"use strict";
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-96.8057, 32.7787], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
function placeMarkerAndPopup(info, token, map) {
    geocode(info.address, token).then(function(coordinates) {
        var popup = new mapboxgl.Popup().setHTML(info.popupHTML);
        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map)
            .setPopup(popup);
            // popup.addTo(map); (This line being commented out to allowed the pop up to appear only when the marker is clicked)
    });
}

//This section houses our restaurants
var restaurants = [];
function createRestaurant(address, popup, restaurantArray){
    var restaurantEntry = {
        address: address,
        popupHTML: popup
    }
    restaurantArray.push(restaurantEntry);
    return restaurantArray
}
createRestaurant("4145 Belt Line Rd, Addison, TX 75001-4375","<h4>Sigree Grill Bar and Restaurant</h4>",restaurants)
createRestaurant("2255 W Northwest Hwy, Dallas, TX 75220-4304","<h4>Raising Cane's Chicken Fingers</h4>",restaurants)
createRestaurant("221 W Parker Rd Ste 257, Plano, TX 75023-6914","<h4>Bavarian Grill</h4>",restaurants)

//This function allows the placeMarkerAndPopup function to be applied to all restaurants in the array
// function  newMarkers() {
//     for (var i = 0; i < restaurants.length; i++){
//         placeMarkerAndPopup(restaurants[i],mapboxgl.accessToken,map)
//     }
// }

//This line is a forEach loop that replaces the for loop above
restaurants.forEach(function (restaurant) {
    console.log(restaurant);
    placeMarkerAndPopup(restaurant,mapboxgl.accessToken,map)
})

//This should be the last line to call to display all markers (This line references the for loop)
// newMarkers();

var zoomSelect = document.querySelector('#zoom-select');

zoomSelect.addEventListener('change', function () {
    var zoomValue = zoomSelect.value;

    map.setZoom(zoomValue);
})