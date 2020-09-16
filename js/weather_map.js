"use strict";
(function () {

    mapboxgl.accessToken = mapboxToken;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-96.94, 32.82], // starting position [lng, lat]
        zoom: 12,  // starting zoom
    });

    function getWeatherData(lng, lat) {

        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPW_API,
            lon: lng,
            lat: lat,
            units: "imperial"
        }).done(function (data) {
            var fiveDayForecast = [];
            for (var i = 0; i < data.list.length; i += 8) {
                fiveDayForecast.push(data.list[i]);
            }

            $("#city").text("Current city: " + data.city.name);

            $("#forecast").html("");

            for (let day of fiveDayForecast) {
                createDayCard(day);
            }

            var days = $("#forecast>.day");

            var slideAllIn = function test(index) {
                $("#template").css("display", "none");
                $(days[index]).slideDown(400, function() {
                    if (index + 1 < days.length) {
                        slideAllIn(index + 1);
                    }
                });
            }

            slideAllIn(0);

        });
    }

    function createDayCard(day) {
        var date = day.dt_txt;
        var maxTemp = day.main.temp_max.toString();
        var minTemp = day.main.temp_min.toString();
        var icon = day.weather[0].icon;
        var description = day.weather[0].description;
        var humidity = day.main.humidity;
        var wind = day.wind.speed;
        var pressure = day.main.pressure;
        var card = document.createElement("div");

        $(card).addClass("day card col-sm-2")
            .html($("#template").html());

        $(card).find(".temperature").text("Low " + minTemp + " °F - High " + maxTemp + " °F");
        $(card).find(".date").text(date);
        $(card).find(".icon").html(
            "<img src='http://openweathermap.org/img/w/" + icon + ".png'>"
        )

        $(card).find(".description").html(description);

        $(card).find(".humidity").html(
            "<strong>Humidity: </strong>" + humidity + "%"
        )

        $(card).find(".wind").html(
            "<strong>Wind: </strong>" + wind + " mph"
        )

        $(card).find(".pressure").html(
            "<strong>Pressure: </strong>" + pressure
        )

        $("#forecast").append($(card).hide());
    }

    $("#citySubmit").click(function (e) {
        e.preventDefault();
        var location = $("#cityInput").val().trim();
        if (location !== "") {
            searchFor(location);
        }
    });

    //Attempted to use .submit to stop the return key from refreshing the page
    // $("#cityInput").submit(function (e) {
    //     e.preventDefault()
    // })

    $("#cityInput").on("keypress", function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            var location = $("#cityInput").val().trim();
            if (location !== "") {
                searchFor(location);
            }
        }
    });

    function searchFor(location) {

        geocode(location, mapboxToken)
            .then(function (result) {
                getWeatherData(result[0], result[1]);
                return result;
            }).then(function (data) {
            map.flyTo({center: data, zoom: 12});

            var marker = new mapboxgl.Marker({
                draggable: true})
                .setLngLat(data)
                .addTo(map);

            function onDragEnd() {
                var lngLat = marker.getLngLat();

                getWeatherData(lngLat.lng, lngLat.lat);
                map.flyTo({center: [lngLat.lng, lngLat.lat], zoom: 12});
            }

            marker.on('dragend', onDragEnd);
        });
    }

    searchFor("Irving, TX");

}());

