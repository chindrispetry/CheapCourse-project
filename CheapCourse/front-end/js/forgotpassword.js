var formForgot = document.getElementById('form-recovery');
var inputEmail = document.getElementById('email');
var groupEmail = document.getElementById('email-group');
var alert = document.getElementById('alert');

inputEmail.addEventListener('input', (e) => {
  setTimeout(() => {
    groupEmail.className = ' ';
  }, 1000);
  validEmail();
})
formForgot.onsubmit = () => {
  return validEmail() == 1 ? true : false;
}
function validEmail() {
  if (inputEmail.value == '' || !emailContains('@')) {
    inputEmail.className = "animation-wrong";
    groupEmail.className = 'earthquake';
    return -1;
  }
  inputEmail.className = "animation-check";
  return 1;
}
function emailContains(character) {
  for (let i = 0; i < inputEmail.value.length; i++)
    if (inputEmail.value[i] == character && i + 1 != inputEmail.value.length) {
      return true;
    }
  return false;
}
