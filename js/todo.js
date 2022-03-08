const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');

let toDos = [];

const TODOS_KEY = 'todos';

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(mung){
    const li = mung.target.parentElement;
    toDos = toDos.filter((kitty) => kitty.id !== parseInt(li.id));
    li.remove();
    saveToDo();
}

function paintToDo(iro){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.innerText = iro.text;
    li.id = iro.id;
    button.innerText = '✔️';
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    button.addEventListener('click',deleteToDo)
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDoInput.value = "";
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

const savedToDo = localStorage.getItem(TODOS_KEY);

if(savedToDo !== null){
    const parseToDo = JSON.parse(savedToDo);
    toDos = parseToDo;
    parseToDo.forEach(paintToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit)