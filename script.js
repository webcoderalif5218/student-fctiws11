function toogleFunctionc() {
  var c = document.getElementById("txtPassword");
  if (c.type === "password") {
    c.type = "text";
  } else {
    c.type = "password";
  }
}
function toogleFunctionc_c(){
  var c_c = document.getElementById("txtc_Password");
  if (c_c.type === "password") {
    c_c.type = "text";
  } else {
    c_c.type = "password";
  }
}
$("#submit_form").click(function() {

  var username = $.trim($("#username").val());
  var Password = $.trim($("#txtPassword").val());




  $("#username_error").html("");
  $("#txtPassword_error").html("");


  if (username == "") {
    $("#username").focus();
    $("#username_error").show();
    $("#username_error").html("Please Enter Username");
    return false;
  } 
else if (Password == "") {
    $("#txtPassword").focus();
    $("#txtPassword_error").show();
    $("#txtPassword_error").html("Please Enter Password");
    return false;
  } 
  else {
    var a = document.getElementById("mySelect").value;
    var b = document.getElementById("mySelect").value;
    var c = document.getElementById("mySelect").value;
    if(a === "Customer"){
      alert("User Login  successful");
      window.location.href = "../customer/index.html";
    }
    if(b === "Restaurant"){
      alert("User Login  successful");
      window.location.href = "../resturant/index.html";
    }
    if(c === "Delivery Personnel"){
      alert("User Login  successful");
      window.location.href = "../delivery personal/index.html";
    }
  }
});



function handleSubmit () {
  const name = document.getElementById('username').value;
  const password = document.getElementById('mySelect').value;


  // to set into local storage
  // localStorage.setItem("NAME", name);
  // localStorage.setItem("PASSWORD", password);
  
  
   sessionStorage.setItem("NAME", name);
   sessionStorage.setItem("PASSWORD", password);

  return;
}