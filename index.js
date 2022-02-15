var data = {
  locations:[
    {
      "lati":47.852071,
      "long":-117.371208
    },
    {
      "lati":47.512911,
      "long":-122.222157
     },
     {
      "lati":61.147709,
      "long":-149.731852
     },
     {
      "lati":21.011125,
      "long":-86.907817
     },
     {
      "lati":22.922192,
      "long":-109.943555
     },
     {
      "lati":33.308346,
      "long":-111.737387
     }
  ]
}

// First function called by Google
function initMap() {
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
  var lat = pos.coords.latitude;
  var long = pos.coords.longitude;
  const home = { lat: lat, lng: long };

  // Center the map at the home point determined
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: home,
    disableDefaultUI: true,
  });

  // Init all the locations inside of data
  for (let i = 0; i < data.locations.length; i++)
  {
    let loc = { lat: data.locations[i].lati, lng: data.locations[i].long };

    const marker = new google.maps.Marker({
      position: loc,
      map: map,
    });
  }



}