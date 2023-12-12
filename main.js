// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLrb30ofgzLhV2UiYwzy3MirUAwj51fsg",
    authDomain: "lets-chat-web-app-271c4.firebaseapp.com",
     projectId: "lets-chat-web-app-271c4",
    storageBucket: "lets-chat-web-app-271c4.appspot.com",
     messagingSenderId: "25485361201",
    appId: "1:25485361201:web:ab6647b63635a236dc9510"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "chat.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "chat.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}