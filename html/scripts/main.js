fetch('/data.json')
.then(function(response) {
  return response.json();
})
.then(function(data) {
	$.each( data.wakeparkit, function( i, val ) {

	$( "#container" ).append("<div class=\"park\">"
    + "<img src=\"https://maps.googleapis.com/maps/api/staticmap?center="
    + data.wakeparkit[i].lat
    + ","
    + data.wakeparkit[i].lon
    + "&zoom=15&size=300x300&maptype=roadmap"
    + "&markers=color:red%7Clabel:" + data.wakeparkit[i].key + "%7C"
    + data.wakeparkit[i].pin_lat
    + ","
    + data.wakeparkit[i].pin_lon
    + "&style=feature:road.local%7Celement:geometry%7Ccolor:0xffffff&style=feature:landscape%7Celement:geometry.fill%7Ccolor:0x111111&style=element:labels%7Cinvert_lightness:true&style=feature:road.arterial%7Celement:labels%7Cinvert_lightness:false"
    + "&key=AIzaSyAtUNkgUu1-VfzdrS5GN_XMggHw3SFYjEk"
    + "\"><div class=\"info\">"
    + "<div class=\"park_title\">" + data.wakeparkit[i].name + "</div>"
    + "<div class=\"park_url\"><a href=\"" + data.wakeparkit[i].url + "\">www</a></div></div></div>");
	});
});
