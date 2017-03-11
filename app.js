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
  var first = moment($("#first-train-input").val().trim(), "HH:mm").format("X");
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

  	console.log(childSnapshot.val());

  	var trainName = childSnapshot.val().name;
  	var destination = childSnapshot.val().trainDestination;
  	var first = childSnapshot.val().firstTrain;
  	var frequency = childSnapshot.val().trainFrequency;



  	console.log(trainName);
  	console.log(destination);
  	console.log(first);
  	console.log(frequency);

  	var currentTime = moment();
  	console.log("current time: " + moment(currentTime).format("HH:mm"));

  	var firstTimeConverted = moment(first, "X").subtract(1, "years");
  	console.log(firstTimeConverted);

  	var trainArrival = moment().diff(moment.unix(first, "X"), "minutes");
  	console.log(trainArrival);

  	var remainder = trainArrival % frequency;
  	console.log(remainder);

  	var untilTrain = frequency - remainder;
  	console.log("minutes till train: " + untilTrain);

  	var nextTrain = moment().add(untilTrain, "minutes").format("HH:mm");
  	console.log("arrival time: " + moment(nextTrain));

  	$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + nextTrain + 
  		"</td><td>" + untilTrain + "</td></tr>");
  });

