const addToDo = document.querySelector('.addToDo');
const inputToDoText = document.querySelector('.inputToDoText');
const todoList = document.querySelector('todoList');

addToDo.addEventListener('click', addToBody);

function addToBody(){

  //Create To Do Divs
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //Create LI
  const newTodo = document.createElement('li');
  const newContent = document.createTextNode('Test');
  newTodo.classList.add('todo-item');

  //
  todoDiv.appendChild('newToDo');
};