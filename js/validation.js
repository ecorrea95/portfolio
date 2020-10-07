function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var errormessage = document.getElementById("errormessage");

  var text;
  if (name.length < 4) {
    text = "Please enter a valid name";
    errormessage.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please enter a valid email";
    errormessage.innerHTML = text;
    return false;
  }
  if (subject.length < 4) {
    text = "Please enter a valid subject";
    errormessage.innerHTML = text;
    return false;
  }
  if (message.length <= 20) {
    text = "The message should have more than 20 characters";
    errormessage.innerHTML = text;
    return false;
  }
  // alert("Message sent!");
  // text = "Message sent!";
  // successmessage.innerHTML = text;
  return true;
};
