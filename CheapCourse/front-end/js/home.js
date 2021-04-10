var pageHome = document.getElementById('home');
var pageCourse = document.getElementById('course');
var pageQuiz = document.getElementById('quiz');
var pagePremium = document.getElementById('premium');
var pageLogin = document.getElementById('login');

pageLogin.addEventListener('click', () => {
  var request = {
    name: "login"
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      location.reload();
    }
  }
  xhr.open('POST', "../back-end/sendPage.php", true);
  xhr.send(JSON.stringify(request));

})

pageHome.addEventListener('click', () => {
  var request = {
    name: "home"
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      location.reload();
    }
  }
  xhr.open('POST', "../back-end/sendPage.php", true);
  xhr.send(JSON.stringify(request));

})
pageCourse.addEventListener('click', () => {
  var request = {
    name: "course"
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      location.reload();
    }
  }
  xhr.open('POST', "../back-end/sendPage.php", true);
  xhr.send(JSON.stringify(request));
})
pageQuiz.addEventListener('click', () => {
  var request = {
    name: "quiz"
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      location.reload();
    }
  }
  xhr.open('POST', "../back-end/sendPage.php", true);
  xhr.send(JSON.stringify(request));
})
pagePremium.addEventListener('click', () => {
  var request = {
    name: "premium"
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      location.reload();
    }
  }
  xhr.open('POST', "../back-end/sendPage.php", true);
  xhr.send(JSON.stringify(request));
})
