// First function called by Google
function initMap() {
  console.log("Init Map");
  // Asking permission for location and checking browser capability
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(sucessLocation);
  } else 
  {
    alert('Your browser does not support location services.')
  }
}

// Sucess function for getting permission, finding lat and long of user, using Google API to init the map
function sucessLocation(pos)
{
  
}
