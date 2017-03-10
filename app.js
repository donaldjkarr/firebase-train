// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC2E_zdx1ko_ns9Jd4aYFJg0no2JAgag5Y",
    authDomain: "train-homework-51b5b.firebaseapp.com",
    databaseURL: "https://train-homework-51b5b.firebaseio.com",
    storageBucket: "train-homework-51b5b.appspot.com",
    messagingSenderId: "27386737613"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  //button for adding trains

  $("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var first = moment($("#first-train-input").val().trim(), "DD/MM/YY").format("X");
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {
  	name: trainName,
  	trainDestination: destination,
  	firstTrain: first,
  	trainFrequency: frequency,
  };

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.trainDestination);
  console.log(newTrain.firstTrain);
  console.log(newTrain.trainFrequency);

  alert("train added");

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

  return false;
});

//pull from firebase and add html to table
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {



  });

