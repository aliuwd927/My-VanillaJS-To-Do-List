const todoInput = document.querySelector('.inputToDoText');
const addToDo = document.querySelector('.addToDo');
const todoList = document.querySelector('.todoList');

addToDo.addEventListener('click', addToBody);

function addToBody(){

  //Create To Do Divs
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");

  //Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  

  //Append to list
  todoList.appendChild(todoDiv);
};