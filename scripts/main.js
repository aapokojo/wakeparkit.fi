var wakeparkit = [];

function load() {
  fetch('data/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (i = 0; i < data.wakeparkit.length; i++) {
      wakeparkit[i] = data.wakeparkit[i];
    }
    render();
  })
}

function render() {

        var container = document.getElementById("container");
        var parkTemplate = document.getElementById("parkTemplate");
        var parkItem;
    
        for (i = 0; i < wakeparkit.length; i++) {

                var markers = "";
                for (j = 0; j < wakeparkit[i].towers.length; j++) {
                        markers += "&markers=icon:" + wakeparkit[i].towers[j].tower
                        + "%7C"
                        + wakeparkit[i].towers[j].lat
                        + ","
                        + wakeparkit[i].towers[j].lon; 
                }

                parkItem = document.importNode(parkTemplate.content, true);
                parkItem.querySelector(".park").id += wakeparkit[i].id;
                parkItem.querySelector(".park_title").textContent += wakeparkit[i].name;
                parkItem.querySelector(".park_location").textContent += wakeparkit[i].location;
                parkItem.querySelector(".park_desc").textContent += wakeparkit[i].desc;

                parkItem.querySelector(".park_map").src 
                += "https://maps.googleapis.com/maps/api/staticmap?center="
                + wakeparkit[i].lat
                + ","
                + wakeparkit[i].lon
                + "&zoom=15&size=300x300&maptype=roadmap&markers=icon:https://wakeparkit.fi/media/OneTower.png%7C60.1715187,24.9013484" 
                + markers
                + "&style=feature:road%7Celement:geometry%7Ccolor:0xffe1b2&style=feature:landscape.man_made%7Celement:geometry.fill%7Ccolor:0xf7e1cc&style=feature:landscape.natural%7Celement:geometry.fill%7Ccolor:0xffbdcb&style=feature:landscape.natural.landcover%7Celement:geometry.fill%7Ccolor:0x00bdbf&style=feature:landscape.natural.terrain%7Celement:geometry.fill%7Ccolor:0x98ceb4&style=feature:water%7Celement:geometry.fill%7Ccolor:0x00bec8&style=element:labels%7Ccolor:0xffffff&style=element:labels.text.stroke%7Cvisibility:off&style=element:labels.icon%7Cvisibility:off&key=AIzaSyAtUNkgUu1-VfzdrS5GN_XMggHw3SFYjEk";
                
                parkItem.querySelector(".map").href = "https://www.google.fi/maps?q=" + wakeparkit[i].lat + "," + wakeparkit[i].lon; 
                parkItem.querySelector(".map").id = wakeparkit[i].id;

                if (wakeparkit[i].url != "") {
                        parkItem.querySelector(".www_link").href = wakeparkit[i].url;
                        parkItem.querySelector(".www_link").id = wakeparkit[i].id;
                } else {
                        parkItem.querySelector(".www_link").remove();
                }
                if (wakeparkit[i].facebook != "") {
                        parkItem.querySelector(".fb_link").href = wakeparkit[i].facebook;
                        parkItem.querySelector(".fb_link").id = wakeparkit[i].id;

                } else {
                        parkItem.querySelector(".fb_link").remove();
                }
                if (wakeparkit[i].instagram != "") {
                        parkItem.querySelector(".ig_link").href = wakeparkit[i].instagram;
                        parkItem.querySelector(".ig_link").id = wakeparkit[i].id;

                } else {
                        parkItem.querySelector(".ig_link").remove();
                }

                parkItem.querySelector(".park_weather").id = i;
                parkItem.querySelector(".park_temperature").id = wakeparkit[i].id;

                container.append(parkItem);
        }
}

function sendEvent(event_category, event_label) {
        gtag('event', 'click', {
                'event_category': event_category,
                'event_label': event_label
              });
}

function showWeather(i) {
        fetch('https://api.openweathermap.org/data/2.5/forecast'
                + '?lat=' + wakeparkit[i].lat
                + '&lon=' + wakeparkit[i].lon
                + '&units=metric'
                + '&appid=09df1a8594f61537951eb23228d2aa0b')
        .then(function(response) {
                return response.json();
        })
         .then(function(weather) {
                document.getElementById(wakeparkit[i].id).getElementsByClassName("park_temperature")[0].innerHTML = weather.list[0].main.temp.toFixed(0) + "°C";
         });

}