function todolist() {
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task");
    }
    else {
        const taskValue = document.querySelector('#newtask input').value
        document.querySelector('#tasks').innerHTML += `
    <div class="task" id ='${taskValue}'>
        <span id="${taskValue}">
            ${taskValue}
        </span>
        <input type="checkbox" id="${taskValue}" name="${taskValue}" value="${taskValue}" onchange='addtoCompleted(this)'>
    </div>`;
    document.getElementById('taskTile').value = '';
    }
}
}
function addtoCompleted(element){
    const spanElement = document.querySelector(`#${element.value}`);
    if(element.checked){
        spanElement.classList.add('completed');
    } else {
        spanElement.classList.remove('completed');
    }
}
function deleteCompleted(){
    const checkedElements = document.querySelectorAll('input');
    for(const element of checkedElements){
        if(element.checked){
            document.querySelector(`#${element.value}`).remove();
        }
    }
}
function emptyList(){
    const taskElements = document.querySelectorAll('div .task');
    for(const element of taskElements){
        element.remove();
    }
}
function save() {
    if (document.querySelector('#tasks').children.length !== 0){
        alert("Saved Successfully");
    } else {
        alert("Please Add Task");
    }
}
function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /d/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }
    else if(cpw.value.length == 0){
        alert('Please fill in confirm password');
    }
    else if(name.value.length == 0 && pw.value.length == 0 && cpw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lowercase letter');

    }
    else if(pw.value!=cpw.value)
    {
        alert('password mismatch');
    }
    else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
        window.location = "signin.html";
    }
}
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You have logged in');
        window.location = "ToDoList.html";
    }else{
        alert('Error on login');
    }
}
