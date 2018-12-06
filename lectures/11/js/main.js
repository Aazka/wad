
//============================================
//-----------  STEP - 1 ----------------------
//============================================


/*var todos = [];
function add() {
    var task = document.getElementById("task").value;
    todos.push(task);
    document.getElementById('todos').innerText = todos;
}*/
/* in function's 1st line, document.getElementById("task").value it get input
 * value from user. .Push is to enter the entered value in array. getElementById finds the
 * Id of keyword todos and .innerText will add the value in the inner body of todos */

//============================================
//-----------  STEP - 2 ----------------------
//============================================


/*
var todos = [];
function add() {
    var task = document.getElementById('task').value;
    todos.push(task);
    document.getElementById('task').value = '';
    show();
}
function show() {
    var ul = document.createElement('ul');//dynamically create a ul element of html
    ul.classList.add("list-group");//accessing class using dot and calling function of boostrap
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');//creating li
        li.innerHTML  = '<li>' + todos[i] + '</li>';//everytime it will display the content which user entered. but in a new line
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
*/


//============================================
//-----------  STEP - 3 ----------------------
//============================================

/*

function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');//it will get all the values which was entered by user and store it in todos_str
    if(todos_str !== null)
        todos = JSON.parse(todos_str);// it convert the todos_str to js
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){//if user didnt enter any thing and press add the  it will display message
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';//applying style
    }
    var todos = getTodos();
    todos.push({task: task});//?
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger">' +
            '<i class="fas fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
}
show();

*/


//============================================
//-----------  STEP - 4 ----------------------
//============================================


/*function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');
    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);//adding event by clicking
    }
}

function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();*/





//============================================
//-----------  STEP - 5 ----------------------
//============================================

/*

CLASS ACTIVITY (HOME WORK) :

1- Enable State of todos by clicking on the text completed, started etc
HINT: use text-decoration:line-through; property of CSS

2- Enable Editing todos in text field to update text
*/