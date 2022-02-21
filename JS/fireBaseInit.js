import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";

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

const data = ref(db, 'locations');
console.log(data);