import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

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
const db = getDatabase(app);

const data = {};
getLocationData();

async function getLocationData()
{
  data = collection(db, 'locations');
  console.debug(data);
  mapPoints(data);
}