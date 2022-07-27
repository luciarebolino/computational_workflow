console.log('this works')

//select the unordered list from the DOM
const ul = document.querySelector('ul')

//create new HTML element
const listItem = document.createElement('li')

//add a class to list item
listItem.classList.add('list-item');

listItem.textContent = 'Monday'

//append listitem to the parent

greeting[0].innerText = "Goodbye!"




let greeting = document.querySelector('.greeting')

console.log(greeting[0])


//global variable
let w = prompt('What is the width?')
let h = prompt('What is the height?')

//function definition
function calculateArea(width,height) {
    let area = width * height;
    alert('the calculated area is' + area)
}

//calculate the function
calculateArea(w,h)