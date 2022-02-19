import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBPtH7jVN4wNCKOyUf6p4QfpX3UQXDydZ4",
  authDomain: "publicrestroomlocator.firebaseapp.com",
  databaseURL: "https://publicrestroomlocator-default-rtdb.firebaseio.com",
  projectId: "publicrestroomlocator",
  storageBucket: "publicrestroomlocator.appspot.com",
  messagingSenderId: "660860024187",
  appId: "1:660860024187:web:9439b3959865ffd80eb9de"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const data = {};
getLocationData();

async function getLocationData()
{
  data = collection(db, 'locations');
  console.debug(data);
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
  // Get home location
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
      icon: 'src/toilet-icon.png'
    });
  }
}
