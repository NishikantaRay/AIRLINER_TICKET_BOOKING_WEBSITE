// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCiNNAyG6ussU2-gtEt6pnStPwoDt4IZvw",
    authDomain: "form-d7245.firebaseapp.com",
    databaseURL: "https://form-d7245.firebaseio.com",
    projectId: "form-d7245",
    storageBucket: "form-d7245.appspot.com",
    messagingSenderId: "12661355616",
    appId: "1:12661355616:web:fee6112ea9a28dde4bbf05"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Reference messages collection


// Listen for form submit
document.getElementById('bookcab').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var from = getInputVal('from');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var to = getInputVal('to');
  var dep = getInputVal('dep');
  var ret = getInputVal('ret');
  // Save message
  saveMessage(name,email, phone,to,from,dep,ret);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('bookcab').reset();
}
var messagesR = firebase.database().ref('bookidcab');
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,email, phone,to,from,dep,ret){
  var newMessageRef = messagesR.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    to:to,
    from:from,
    dep:dep,
    ret:ret
  });
}
// for signout 
function signOut() {
  firebase.auth().signOut().then(function () {
    console.log("you logged off");    
 window.location.href = '../index.html';
  }).catch(function (error) {
    alert(error);
  });
}
// end