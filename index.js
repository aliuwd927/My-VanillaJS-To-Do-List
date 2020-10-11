const todoInput = document.querySelector('.inputToDoText');
const addToDo = document.querySelector('.addToDo');
const todoList = document.querySelector('.todoList');

todoButton.addEventListener('click', addToBody);

function addToBody(){

  //Create To Do Divs
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");

  //Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = 'test';
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  

  //Append to list
  todoList.appendChild(todoDiv);
};