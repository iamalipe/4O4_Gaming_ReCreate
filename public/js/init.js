// Initialize Form
document.getElementById("form4o4").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  //get input value
  let videolink = document.getElementById("VideoLink").value;
  let catagory = document.getElementById("Catagory").options[document.getElementById("Catagory").selectedIndex].value;
  let ingamename = document.getElementById("InGameName").value;
  let video_timestamp = document.getElementById("Timestamp").value;
  let realname = document.getElementById("RealName").value;
  let email = document.getElementById("Email").value;
  let description = document.getElementById("Description").value;

  const submitRequest = firebase.functions().httpsCallable("submitRequest");
  submitRequest({
    Video_Link: videolink,
    Catagory: catagory,
    In_Game_Name: ingamename,
    Video_Timestamp: video_timestamp,
    Real_Name: realname,
    Email: email,
    Description: description,
  });
  alert("Thank you for Submit your Video");
  document.getElementById("form4o4").reset();
}