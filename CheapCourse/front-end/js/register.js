var nameControlRegister = document.getElementById('username');
var EmailControlRegister = document.getElementById('email');
var passwordControlRegister = document.getElementById('password');
var passwordConfirmControlRegister = document.getElementById('confirm');

var userGroup = document.getElementById('user-group');
var emailGroup = document.getElementById('email-group');
var passGroup = document.getElementById('pass-group');
var passCGroup = document.getElementById('pass2-group');

var alertRegister = document.getElementById('message');


nameControlRegister.addEventListener('input', (e) => {
  if (e.target.value.length >= 3)
    nameControlRegister.className = "animation-check";
  else
    nameControlRegister.className = "animation-wrong";
})
passwordControlRegister.addEventListener('input', (e) => {
  if (e.target.value.length >= 6)
    passwordControlRegister.className = "animation-check";
  else
    passwordControlRegister.className = "animation-wrong";
});
passwordConfirmControlRegister.addEventListener('input', (e) => {
  if (e.target.value.length >= 6 && passwordControlRegister.value == passwordConfirmControlRegister.value)
    passwordConfirmControlRegister.className = "animation-check";
  else
    passwordConfirmControlRegister.className = "animation-wrong";
});
EmailControlRegister.addEventListener('input', (e) => {
  return validEmail() == 1 ? true : false;
});
function sendDataToServer() {
  if (validateRegister()) {
    var user = {
      name: nameControlRegister.value,
      email: EmailControlRegister.value,
      password: passwordControlRegister.value
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        if (this.responseText == 1) {
          alertRegister.style.maxHeight = '30px';
          alertRegister.style.background = 'green';
          alertRegister.innerHTML = 'Register with successful';
          resetRegisterControl();
        }
        if (this.responseText == 2) {
          alertRegister.style.maxHeight = '30px';
          alertRegister.style.background = 'red';
          alertRegister.innerHTML = 'This  username already use';
        }
        if (this.responseText == 3) {
          alertRegister.style.maxHeight = '30px';
          alertRegister.style.background = 'red';
          alertRegister.innerHTML = 'This e-mail already use';
        }
        if (this.responseText == 4) {
          alertRegister.style.maxHeight = '30px';
          alertRegister.style.background = 'red';
          alertRegister.innerHTML = 'Data Invalid!';
        }
      }
    }
    console.log(xhr);
    xhr.open("POST", "../back-end/serverRegister.php");
    xhr.send(JSON.stringify(user));
  }
}

function validEmail() {
  if (EmailControlRegister.value == '' || !emailContains('@')) {
    EmailControlRegister.className = "animation-wrong";
    return -1;
  }
  EmailControlRegister.className = "animation-check";
  return 1;
}
function emailContains(character) {
  for (let i = 0; i < EmailControlRegister.value.length; i++)
    if (EmailControlRegister.value[i] == character && i + 1 != EmailControlRegister.value.length) {
      return true;
    }
  return false;
}
function validateRegister() {
  var arr = [1, 1, 1, 1];
  if (nameControlRegister.value == '' || nameControlRegister.value.length < 3) {
    nameControlRegister.className = "animation-wrong";
    userGroup.className = "earthquake";
    arr[0] = 0;
  }
  else {
    nameControlRegister.className = "animation-check";
  }
  if (EmailControlRegister.value == '' || EmailControlRegister.value.length < 7) {
    EmailControlRegister.className = "animation-wrong";
    emailGroup.className = "earthquake";
    arr[1] = 0;
  }
  else {
    passwordControlRegister.className = "animation-check";
  }
  if (passwordControlRegister.value == '' || passwordControlRegister.value.length < 6) {
    passwordControlRegister.className = "animation-wrong";
    passGroup.className = "earthquake";
    arr[2] = 0;
  }
  else {
    passwordControlRegister.className = "animation-check";
  }
  if (passwordConfirmControlRegister.value == '' || passwordConfirmControlRegister.value.length < 6 ||
    passwordControlRegister.value != passwordConfirmControlRegister.value) {
    passwordConfirmControlRegister.className = "animation-wrong";
    passCGroup.className = "earthquake";
    arr[3] = 0;
  }
  else {
    passwordConfirmControlRegister.className = "animation-check";
  }
  for (let i = 0; i < arr.length; i++)
    if (arr[i] == 0) {
      return -1;
    }
  return 1;
}
function resetRegisterControl() {
  nameControlRegister.value = '';
  EmailControlRegister.value = '';
  passwordControlRegister.value = '';
  passwordConfirmControlRegister = '';

  nameControlRegister.className = '';
  EmailControlRegister.className = '';
  passwordControlRegister.className = '';
  passwordConfirmControlRegister.className = '';
}
