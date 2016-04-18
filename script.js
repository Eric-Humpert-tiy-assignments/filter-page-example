var searchValue = document.querySelector('#search-value');
var foodList = document.querySelector('#food-list');

var food = [
  'Tacos',
  'Shrimp',
  'Steak',
  'Pizza',
  'Tex-Mex',
  'Po-Boy',
  'Hamburger',
  'French-fries',
  'Brisket',
  'Ribs',
  'Pulled-pork'
];

//DOM list builder function

function _foodListDOMBuilder(arr) {
  for (var val of arr) {
    var li = document.createElement('li');
    li.textContent = val;

    foodList.appendChild(li);
  }
}

//call the DOM list builder

_foodListDOMBuilder(food);

//DOM user input search function

function _foodListUserInputSearch(evt) {
  var query = searchValue.value;

  var filteredList = [];

  for (var val of food) {
    if(val.indexOf(query) > -1) {
    filteredList.push(val);
    }
  }
  foodList.innerHTML = '';
  _foodListDOMBuilder(filteredList)
}

//Call the DOM user input function
searchValue.addEventListener('keyup', _foodListUserInputSearch)
