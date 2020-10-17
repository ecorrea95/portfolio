function validate_eng(){
  var name = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("asunto").value;
  var message = document.getElementById("mensaje").value;
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
  return true;
};

function validate_esp(){
  var name = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("asunto").value;
  var message = document.getElementById("mensaje").value;
  var errormessage = document.getElementById("errormessage");

  var text;
  if (name.length < 4) {
    text = "Ingrese un nombre válido";
    errormessage.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Ingrese un email válido";
    errormessage.innerHTML = text;
    return false;
  }
  if (subject.length < 4) {
    text = "Ingrese un asunto válido";
    errormessage.innerHTML = text;
    return false;
  }
  if (message.length <= 20) {
    text = "El mensaje debe tener al menos 20 caracteres";
    errormessage.innerHTML = text;
    return false;
  }
  return true;
};
