
var nameControlLogin = document.getElementById('userName');
var passwordControlLogin = document.getElementById('userPassword');

var userGroup = document.getElementById('group-user');
var passGroup = document.getElementById('group-pass');

var alertLogin = document.getElementById('message');

var loginConnected = document.getElementById('login-connected');

const delay = ms => new Promise(res => setTimeout(res, ms));

nameControlLogin.addEventListener('input', (e) => {
  if (e.target.value.length >= 3)
    nameControlLogin.className = "animation-check";
  else
    nameControlLogin.className = "animation-wrong";
});
passwordControlLogin.addEventListener('input', (e) => {
  if (e.target.value.length >= 6)
    passwordControlLogin.className = "animation-check";
  else
    passwordControlLogin.className = "animation-wrong";
});

function sendDataToServer() {
  if (validateLogin()) {
    var user = {
      name: nameControlLogin.value,
      password: passwordControlLogin.value
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = async function () {
      if (this.readyState == 4 && this.status == 200) {
        var responseJSON = JSON.parse(this.responseText);
        if (responseJSON['code'] == 1) {
          alertLogin.style.maxHeight = '30px';
          alertLogin.style.background = 'green';
          alertLogin.innerHTML = 'Connected , please wait..';
          await delay(1000);
          resetLogin();
          loginConnected.src = '../front-end/img/logout.png';
          location.reload();
        }
        if (responseJSON['code'] == 0) {
          alertLogin.style.maxHeight = '30px';
          alertLogin.style.background = 'red';
          alertLogin.innerHTML = 'Name or password invalid!';
        }
      }
    };
    xhr.open("POST", "../back-end/serverLogin.php", true);
    xhr.send(JSON.stringify(user));
  }
}
function validateLogin() {
  var arr = [1, 1];
  if (nameControlLogin.value.length == 0 || nameControlLogin.value.length < 3) {
    nameControlLogin.className = "animation-wrong";
    userGroup.className = "earthquake";
    arr[0] = 0;
  }
  if (passwordControlLogin.value.length == 0 || passwordControlLogin.value.length < 6) {
    passwordControlLogin.className = "animation-wrong";
    passGroup.className = "earthquake";
    arr[1] = 0;
  }
  if (arr[0] == 0 || arr[1] == 0) {
    setTimeout(resetEffect, 1000);
    return false;
  }
  return true;
}
function resetLogin() {
  nameControlLogin.value = '';
  passwordControlLogin.value = '';

  nameControlLogin.className = '';
  passwordControlLogin.className = '';
}
function resetEffect() {
  userGroup.className = ' ';
  passGroup.className = ' ';
}

