fetch('/data.json')
.then(function(response) {
  return response.json();
})
.then(function(data) {
        $.each( data.wakeparkit, function( i, val ) {
                
        var markers = "";

        $.each (data.wakeparkit[i].towers, function (j, val) {
        markers += "&markers=icon:" + data.wakeparkit[i].towers[j].tower
        + "%7C"
        + data.wakeparkit[i].towers[j].lat
        + ","
        + data.wakeparkit[i].towers[j].lon
        });

	$( "#container" ).append("<div class=\"park\">"
    + "<a target=\"_blank\" class=\"map\"href=\"https://www.google.fi/maps?q="
    + data.wakeparkit[i].pin_lat
    + ","
    + data.wakeparkit[i].pin_lon
    + "\" "
    + "onclick=\"ga('send', 'event', 'map', 'click', '" + data.wakeparkit[i].id + "')\""
    + ">"
    + "<img src=\"https://maps.googleapis.com/maps/api/staticmap?center="
    + data.wakeparkit[i].lat
    + ","
    + data.wakeparkit[i].lon
    + "&zoom=15&size=300x300&maptype=roadmap"
    + markers
    + "&style=feature:road%7Celement:geometry%7Ccolor:0xffe1b2"
    + "&style=feature:landscape.man_made%7Celement:geometry.fill%7Ccolor:0xf7e1cc"
    + "&style=feature:landscape.natural%7Celement:geometry.fill%7Ccolor:0xffbdcb"
    + "&style=feature:landscape.natural.landcover%7Celement:geometry.fill%7Ccolor:0x00bdbf"
    + "&style=feature:landscape.natural.terrain%7Celement:geometry.fill%7Ccolor:0x98ceb4"
    + "&style=feature:water%7Celement:geometry.fill%7Ccolor:0x00bec8"
    + "&style=element:labels%7Ccolor:0xffffff"
    + "&style=element:labels.text.stroke%7Cvisibility:off"
    + "&style=element:labels.icon%7Cvisibility:off"
    + "&key=AIzaSyAtUNkgUu1-VfzdrS5GN_XMggHw3SFYjEk"
    + "\">"
    + "</a>"
    + "<div class=\"info\" id=\"" + data.wakeparkit[i].id + "\">"
    + "<div class=\"park_title\">" + data.wakeparkit[i].name + "</div>"
    + "<div class=\"park_location\">" + data.wakeparkit[i].location + "</div>"
    + "<div class=\"park_desc\">Cable: " + data.wakeparkit[i].desc + "</div>"
    + "</div></div>");
    if (data.wakeparkit[i].url != "") {
    	$("#" + data.wakeparkit[i].id).append("<a href=\""
            + data.wakeparkit[i].url
            + "\" "
            + "onclick=\"ga('send', 'event', 'www', 'click', '" + data.wakeparkit[i].id + "')\""
            + ">www</a>");
    }
    if (data.wakeparkit[i].facebook != "") {
    	$("#" + data.wakeparkit[i].id).append("<a href=\""
            + data.wakeparkit[i].facebook
            + "\" "
            + "onclick=\"ga('send', 'event', 'fb', 'click', '" + data.wakeparkit[i].id + "')\""
            + ">FB</a>");
    }
    if (data.wakeparkit[i].instagram != "") {
        $("#" + data.wakeparkit[i].id).append("<a href=\""
            + data.wakeparkit[i].instagram
            + "\" "
            + "onclick=\"ga('send', 'event', 'ig', 'click', '" + data.wakeparkit[i].id + "')\""
            + ">ig</a>");
    }
	});
});
