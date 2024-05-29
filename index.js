
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase, ref, child, get, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBJIQh5FeBA8be8THgVT7G_tP5rUBqvuzE",
    authDomain: "http-5214-67215.firebaseapp.com",
    projectId: "http-5214-67215",
    storageBucket: "http-5214-67215.appspot.com",
    messagingSenderId: "359522943572",
    appId: "1:359522943572:web:0cc44b36ac74ff3d00a3c1",
    measurementId: "G-KT3GK91CHQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const message = ref(database, "messages :");

  onValue(message, (snapshot) =>{ 
      // console.log(snapshot);
      const ul = document.getElementById("message");
      snapshot.forEach((childSnapShot) => {
        console.log(childSnapShot.key);
     console.log(snapshot.val())

     const childData = childSnapShot.val();

     const text = document.createTextNode(childData.message);
     const li = document.createElement("li");
    
     li.appendChild(text);
     ul.appendChild(li);

      });
});