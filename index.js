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

  //Create Completed Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  //Append to list
  todoList.appendChild(todoDiv);
  
};