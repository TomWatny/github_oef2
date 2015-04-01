$(document).ready(function() {
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    }
    else 
    {
        alert('Geolocatie is nodig voor deze app. De app graakt niet aan uw geolocatie.');
    }       
});


function successFunction(position) 
{
    	var lat = position.coords.latitude;
	var long = position.coords.longitude;

 	var dataString = 'Latitude=' + lat + 'Longitude=' + long;

	$.ajax({
		type: "POST",
		url: "xxxxxx.php",
		data: dataString,
		cache: false,
		success: function(result){
		alert(result);
		}
	});
}


function errorFunction(position) 
{
    alert('Geolocatie doorvoeren is mislukt, probeer opnieuw.');
}