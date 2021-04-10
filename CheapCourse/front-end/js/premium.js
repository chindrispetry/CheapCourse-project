var btnOfferOne = document.getElementById('btn-offer');
var btnOfferTwo = document.getElementById('btn-offer-2');
var btnOfferThree = document.getElementById('btn-offer-3');

var selectOffer = document.getElementById('first-select');

var selectOfferTwoFirst = document.getElementById('offer-select-1');
var selectOfferTwoSecond = document.getElementById('offer-select-2');


btnOfferOne.addEventListener('click', () => {
  if (selectOffer.value == 0)
    selectOffer.style.background = 'red';
  else {
    selectOffer.style.background = 'green';
  }
});

btnOfferTwo.addEventListener('click', () => {
  if (selectOfferTwoFirst.value == 0 || selectOfferTwoSecond.value == selectOfferTwoFirst.value)
    selectOfferTwoFirst.style.background = 'red';
  else {
    selectOfferTwoFirst.style.background = 'green';
  }
  if (selectOfferTwoSecond.value == 0 || selectOfferTwoSecond.value == selectOfferTwoFirst.value)
    selectOfferTwoSecond.style.background = 'red';
  else {
    selectOfferTwoSecond.style.background = 'green';
  }
});
