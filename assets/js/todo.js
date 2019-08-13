//Form
const form = document.getElementById('form');
const log = document.getElementById('log');

//Todo-List Tag
const todoList = document.getElementById('todo-list');
let newContent;
let element;

function logSubmit(event) {
    console.log(document.getElementById('name').value);
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;

    newContent = document.createTextNode(document.getElementById('name').value);
    element = document.createElement('div');
    element.appendChild(newContent);

    todoList.appendChild(element);

    event.preventDefault();
}

form.addEventListener('submit', logSubmit);
