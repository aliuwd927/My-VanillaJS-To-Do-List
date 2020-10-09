const addToDo = document.querySelector('.addToDo');
const inputToDoText = document.querySelector('.inputToDoText');

addToDo.addEventListener('click', addToBody);

function addToBody(event) {
    console.log(inputToDoText.value);
};