const todoInput = document.querySelector('.inputToDoText');
const addToDo = document.querySelector('.addToDo');
const todoList = document.querySelector('.todoList');
const filterToDo = document.querySelector('.filter-todo');

//Uses the created trash button from addToBody function to delete the entry todo list



addToDo.addEventListener('click', addToBody);
todoList.addEventListener('click', removeFromBody);
filterToDo.addEventListener('click', filterItems);

function addToBody(e){
  e.preventDefault();
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
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  //Create Trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv);

  todoInput.value = '';
};

function removeFromBody(e){
  //console.log(e.target);
  
  const item = e.target;
    if(item.classList[0] === 'trash-btn'){
      const todo = item.parentElement;
      todo.classList.add('fall');
      todo.remove();
    };

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  

};

function filterItems(event) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        console.log(event.target);
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
          console.log(event.target);
        } else {
          todo.style.display = "none";
          console.log(event.target);
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
          console.log(event.target);
        } else {
          todo.style.display = "none";
          console.log(event.target);
        }
        break;
    }
  });
}

