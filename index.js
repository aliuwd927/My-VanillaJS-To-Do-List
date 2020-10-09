const addToDo = document.querySelector('addToDo');

const addToBody = () => {
    const newDiv = document.createElement('div');
        const newContent = document.createTextNode('Im inside the div container!');
            newDiv.appendChild(newContent);
};