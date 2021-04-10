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

  if (dropdownContent.style.maxHeight == '200px') {
    dropdownContent.style.maxHeight = '0px';
    panel.style.height = '350px';
  }
  else {
    dropdownContent.style.maxHeight = '200px';
    panel.style.height = '480px';
  }

})
dropdownOne.addEventListener('click', () => {
  dropdownContent.style.maxHeight = '0px';
  dropdownContentTwo.style.maxHeight = '0px';
  dropdownContentThree.style.maxHeight = '0px';

  if (dropdownContentOne.style.maxHeight == '200px') {
    dropdownContentOne.style.maxHeight = '0px';
    panel.style.height = '350px';
  }
  else {
    dropdownContentOne.style.maxHeight = '200px';
    panel.style.height = '480px';
  }
})
dropdownTwo.addEventListener('click', () => {
  dropdownContent.style.maxHeight = '0px';
  dropdownContentOne.style.maxHeight = '0px';
  dropdownContentThree.style.maxHeight = '0px';

  if (dropdownContentTwo.style.maxHeight == '200px') {
    dropdownContentTwo.style.maxHeight = '0px';
    panel.style.height = '350px';
  }
  else {
    dropdownContentTwo.style.maxHeight = '200px';
    panel.style.height = '480px';
  }
})
dropdownThree.addEventListener('click', () => {
  dropdownContent.style.maxHeight = '0px';
  dropdownContentOne.style.maxHeight = '0px';
  dropdownContentTwo.style.maxHeight = '0px';

  if (dropdownContentThree.style.maxHeight == '200px') {
    dropdownContentThree.style.maxHeight = '0px';
    panel.style.height = '350px';
  }
  else {
    dropdownContentThree.style.maxHeight = '200px';
    panel.style.height = '480px';
  }
})
