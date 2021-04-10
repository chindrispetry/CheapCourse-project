var panel = document.getElementById('panel');
var dropdown = document.getElementById('dropdown');
var dropdownContent = document.getElementById('dropdown-content');

var dropdownOne = document.getElementById('dropdown-1');
var dropdownContentOne = document.getElementById('dropdown-content-1');

var dropdownTwo = document.getElementById('dropdown-2');
var dropdownContentTwo = document.getElementById('dropdown-content-2');

var dropdownThree = document.getElementById('dropdown-3');
var dropdownContentThree = document.getElementById('dropdown-content-3');

dropdown.addEventListener('click', () => {
  dropdownContentOne.style.maxHeight = '0px';
  dropdownContentTwo.style.maxHeight = '0px';
  dropdownContentThree.style.maxHeight = '0px';

  if (dropdownContent.style.maxHeight == '500px') {
    dropdownContent.style.maxHeight = '0px';
    panel.style.height = '350px';
  }
  else {
    dropdownContent.style.maxHeight = '500px';
    panel.style.height = '800px';
  }

})
dropdownOne.addEventListener('click', () => {
  dropdownContent.style.maxHeight = '0px';
  dropdownContentTwo.style.maxHeight = '0px';
  dropdownContentThree.style.maxHeight = '0px';

  if (dropdownContentOne.style.maxHeight == '300px') {
    dropdownContentOne.style.maxHeight = '0px';
    panel.style.height = '350px';
  }
  else {
    dropdownContentOne.style.maxHeight = '300px';
    panel.style.height = '600px';
  }
})
dropdownTwo.addEventListener('click', () => {
  dropdownContent.style.maxHeight = '0px';
  dropdownContentOne.style.maxHeight = '0px';
  dropdownContentThree.style.maxHeight = '0px';

  if (dropdownContentTwo.style.maxHeight == '350px') {
    dropdownContentTwo.style.maxHeight = '0px';
    panel.style.height = '350px';
  }
  else {
    dropdownContentTwo.style.maxHeight = '350px';
    panel.style.height = '650px';
  }
})
dropdownThree.addEventListener('click', () => {
  dropdownContent.style.maxHeight = '0px';
  dropdownContentOne.style.maxHeight = '0px';
  dropdownContentTwo.style.maxHeight = '0px';

  if (dropdownContentThree.style.maxHeight == '450px') {
    dropdownContentThree.style.maxHeight = '0px';
    panel.style.height = '350px';
  }
  else {
    dropdownContentThree.style.maxHeight = '450px';
    panel.style.height = '750px';
  }
})
