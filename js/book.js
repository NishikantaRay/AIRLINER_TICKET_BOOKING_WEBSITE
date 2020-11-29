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
document.getElementById('book').addEventListener('submit', submitForm);
// document.getElementById('bookmob').addEventListener('submit', submitForm);
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
  var pass = getInputVal('pass');
  var age = getInputVal('age');

  // Save message
  saveMessage(age,name,email, phone,to,from,dep,ret,pass);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('book').reset();
}
var messagesR = firebase.database().ref('bookid');
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(age,name,email, phone,to,from,dep,ret,pass){
  var newMessageRef = messagesR.push();
  newMessageRef.set({
    age:age,
    name: name,
    email:email,
    phone:phone,
    to:to,
    from:from,
    dep:dep,
    ret:ret,
    pass:pass
  });
}

// messagesR.on('value',gotdata,errdata);
  
// function gotdata(data){
//   // console.log(data.val());
//   setTimeout(function(){
//     var namefrom =getInputVal('namefrom');
//     var emailfrom =getInputVal('emailfrom');
//     console.log(namefrom);
//   console.log(emailfrom);
//     var scores =data.val();
//     var keys =Object.keys(scores);
//     console.log(keys);
//     for(var i=0;i<keys.length;i++){
//       var k=keys[i];
//       var name=scores[k].name;
//       var email=scores[k].email;
//       var age =scores[k].age;
//       var phone=scores[k].phone;
//       var to=scores[k].to;
//       var from =scores[k].from;
//       var dep=scores[k].dep;
//       var ret=scores[k].ret;
//       var pass =scores[k].pass;
//       console.log(name);
//       console.log(email);
//       if(name===namefrom&&email===emailfrom){
//         $('#scorelist').append('Airliner Welcomes You'+'<br>'+'<br>');
//         $('#scorelist').append('<li>'+' Name: '+name+'</li>');
//         $('#scorelist').append('<li>'+' Email: '+email+'</li>');
//         $('#scorelist').append('<li>'+' Age: '+age+'</li>');
//         $('#scorelist').append('<li>'+' Phone: '+phone+'</li>');
//         $('#scorelist').append('<li>'+' To: '+to+'</li>');
//         $('#scorelist').append('<li>'+' From: '+from+'</li>');
//         $('#scorelist').append('<li>'+' Deparature Date: '+dep+'</li>');
//         $('#scorelist').append('<li>'+' Returning Date: '+ret+'</li>');
//         $('#scorelist').append('<li>'+' Passanger: '+pass+'</li>');
//       } 
//     }
    
//   },6000);
  
  
// }
// function errdata(err){
//   console.log(err);
// }

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

// function sendemail() { 
//   var email = getInputVal('email');
//   console.log(email);
//   Email.send({
//     SecureToken : "0a6a6d69-c831-45ce-ad70-a03c227ac2ad",
//     To : email,
//     From : "companyairliner@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// } 




