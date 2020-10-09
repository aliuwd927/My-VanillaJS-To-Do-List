const addToDo = document.querySelector('.addToDo');
const inputToDoText = document.querySelector('.inputToDoText');

addToDo.addEventListener('click', addToBody);

function addToBody(event) {
    event.preventDefault();

    
    const listOfToDo = [];
        listOfToDo.push(inputToDoText.value);
    console.log(listOfToDo);
};