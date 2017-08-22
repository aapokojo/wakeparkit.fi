fetch('/data.json')
.then(function(response) {
  return response.json();
})
.then(function(data) {
	$.each( data.wakeparkit, function( i, val ) {

	$( "#container" ).append( "<div class=\"park\"><img src=\"https://maps.googleapis.com/maps/api/staticmap?center=60.1715187,24.9030484&zoom=15&size=300x300&maptype=roadmap&markers=color:red%7Clabel:W%7C60.1715187,24.9013484&key=AIzaSyDGv-c2sGWtBXT47oimKVSGKBWRAyd84mU\"><div class=\"info\"><div class=\"park_title\">Wakespot</div><div class=\"park_url\"><a href=\"http://www.wakespot.fi\">wakespot.fi</a></div></div></div>");
	});
});