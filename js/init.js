// for responsive navbar
(function ($) {
  $(function () {

    $('.sidenav').sidenav();

  });
})(jQuery);
$(document).ready(function () {
  $('select').formSelect();
});
$(document).ready(function () {
  $('input#input_text, textarea#Description').characterCounter();
});

// firebase
document.getElementById("form4o4").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  console.log("Working");
  //get input value
  let videolink = document.getElementById("VideoLink").value;
  let catagory = document.getElementById("Catagory").options[document.getElementById("Catagory").selectedIndex].value;
  let ingamename = document.getElementById("InGameName").value;
  let video_timestamp = document.getElementById("Timestamp").value;
  let realname = document.getElementById("RealName").value;
  let email = document.getElementById("Email").value;
  let description = document.getElementById("Description").value;
  // console.log("Video Link: ", videolink,
  //   "\nCatagory: ", catagory,
  //   "\nInGameName: ", ingamename,
  //   "\nTimestamp: ", video_timestamp,
  //   "\nReal Name: ", realname,
  //   "\nEmail: ", email,
  //   "\nDescription: ", description);
  saveInfo(videolink, catagory, ingamename, video_timestamp, realname, email, description);
  document.getElementById("form4o4").reset();
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firebaseDB = firebase.database().ref("Information");

function saveInfo(videolink, catagory, ingamename, video_timestamp, realname, email, description) {
  let newFirebaseDB = firebaseDB.push();
  newFirebaseDB.set({
    Video_Link: videolink,
    Catagory: catagory,
    In_Game_Name: ingamename,
    Video_Timestamp: video_timestamp,
    Real_Name: realname,
    Email: email,
    Description: description,
  });
}