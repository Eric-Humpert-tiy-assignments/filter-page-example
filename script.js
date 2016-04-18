'use strict';
if (this.FilterPage === undefined) this.FilterPage = {};

(function(context) {

var searchValue = document.querySelector('#search-value');
var foodList = document.querySelector('#food-list');

var state = {
  food:
  ['Tacos',
  'Shrimp',
  'Steak',
  'Pizza',
  'Tex-Mex',
  'Po-Boy',
  'Hamburger',
  'French-fries',
  'Brisket',
  'Ribs',
  'Pulled-pork']
};

//DOM list builder function

function _foodListDOMBuilder(arr) {
  for (var val of arr) {
    var li = document.createElement('li');
    li.textContent = val;

    foodList.appendChild(li);
  }
}

//Filter list function

function filter(query, arr) {
  var filteredList = [];
    for (var val of arr) {
    if(val.indexOf(query) > -1) {
    filteredList.push(val);
    }
  }
  return filteredList;
}

//DOM user input search function

function _foodListUserInputSearch(evt) {
  var query = searchValue.value;
  var filteredFood = filter(query, state.food);

  foodList.innerHTML = '';
  _foodListDOMBuilder(filteredFood)
}
function start() {
  _foodListDOMBuilder(state.food);
  searchValue.addEventListener('keyup', _foodListUserInputSearch);
}

context.start = start;
context.filter = filter;

})(window.FilterPage);
