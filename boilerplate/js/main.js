// You js goes here

// .........................welcome ..........................

let hey = document.querySelector('.hey');
let passwordInput = document.querySelector('.createPasswordInput');
let verifyInput = document.querySelector('.verifyPasswordInput');
let enterName = document.querySelector('.enterName');
let userName = document.querySelector('.userName');
let containerAll = document.querySelector('.containerAll');
let login1 = document.querySelector('.login');
let createPasswordContainer = document.querySelector('.passwordCreate');
let verifyPasswordContainer = document.querySelector('.passwordVerify');
let inputArr = JSON.parse(localStorage.getItem('arr-list')) || [];
console.log(inputArr);

let inputValue = {
    name: "",
    password: ""
};

function checkLogin (){

    if (inputArr.length && inputArr[0].password != ""){
        login1.classList.add('login1');
        createPasswordContainer.classList.add('passwordCreateRemove');
        verifyPasswordContainer.classList.add('passwordVerifyRemove');
        console.log('input Arr inside chek',inputArr)
        name = inputArr[0].name
        userName.innerText = name[0].toUpperCase() + name.slice(1);
        console.log('username',name[0].toUpperCase() + name.slice(1))
        document.body.classList.add('body');
        containerAll.classList.add('allContainer');
    }
    else{
        console.log('before set state')
        inputArr = []
        localStorage.setItem('arr-list',JSON.stringify(inputArr))
    }
}
checkLogin();

function login (event) {
    if (event.keyCode === 13 && event.target.value.trim() != ""){
        inputValue['name'] = event.target.value;
        name = inputValue['name']
        userName.innerText = name[0].toUpperCase() + name.slice(1);
        inputArr.push(inputValue);
        login1.classList.add('login1');
        createPasswordContainer.classList.add('passwordCreateAdd');
        console.log('im in');
        hey.value = "";
        // inputView(inputArr) 
    }
    localStorage.setItem('arr-list', JSON.stringify(inputArr));
}

function createPassword (event) {

    if (event.keyCode === 13 && event.target.value.trim() != ""){
        inputValue['password'] = event.target.value;
        inputArr.push(inputValue);
        createPasswordContainer.classList.add('passwordCreateRemove');
        verifyPasswordContainer.classList.add('passwordVerifyAdd');
        passwordInput.value = "";
    }
    localStorage.setItem('arr-list', JSON.stringify(inputArr));
}
console.log(inputArr);

// TEST
console.log(localStorage, 'Check local storage')
// if (localStorage)
// 
function verifyPassword (event) {
    if (event.keyCode === 13 && event.target.value.trim() != ''){
        let match = event.target.value;
        console.log('lol', match, inputArr[0].password);
        if (match == inputArr[0].password) {
        verifyPasswordContainer.classList.add('passwordVerifyRemove');
        document.body.classList.add('body');
        containerAll.classList.add('allContainer');
        } 
    }
    localStorage.setItem('arr-list', JSON.stringify(inputArr));   
    console.log('outside lol');
}

    
// ..........................Clock...............................
setInterval(displayTime,500);
function displayTime() {
    let time = new Date();
    let hours = time.getHours();
    let mints = time.getMinutes();
    let greetings = document.getElementById('greetings');

    let en = document.querySelector('.en');
    if (hours > 12 ){

       EN = en .innerText = 'PM';

    } else if (hours < 12 ) {

       EN =  en.innerText =  'AM';
    }

    if (hours >= 12 && hours < 17) {
        if(greetings.innerText !== "Good afternoon,") {
            afternoonBg () 
        }
        greetings.innerText = "Good afternoon,";
    } 

    if (hours >= 17 && hours <= 21) {

        if(greetings.innerText !== "Good evening,") {
            todoLight()
            eveningBg ()  
        }
        greetings.innerText = "Good evening,";
       
    }
    
    if (hours > 21) {
        if(greetings.innerText !== "Good night,") {
            todoLight()
            nightBg () 
        }
        greetings.innerText = "Good night,";
    } 

     if (hours < 12) {
        if(greetings.innerText !== "Good morning,") {
            todoLightMorning()
            morningBg () 
        }
        greetings.innerText = "Good morning,";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours == 0) {
        hours = 12;
    } 
    // if (hours < 10) {
    //     hours = '0' + hours;
    // }
    if (mints < 10) {
        mints = '0' + mints;
    // }
    // if (seconds < 10) {
    //     seconds = '0' + seconds;
    // }
    }
    document.getElementById('time').innerHTML = hours + ':' + mints ;
    
}
//.......................................




//............................random background......................... 

function morningBg() {

let selectBG = morningImg[Math.floor(Math.random() * morningImg.length)];
document.querySelector('.body').style.backgroundImage = 'url(' + selectBG + ')';

}
function afternoonBg() {

    let selectBG = afternoonImg[Math.floor(Math.random() * afternoonImg.length)];
    document.querySelector('.body').style.backgroundImage = 'url(' + selectBG + ')';
    
}
function eveningBg() {

    let selectBG = eveningImg[Math.floor(Math.random() * eveningImg.length)];
    document.querySelector('.body').style.backgroundImage = 'url(' + selectBG + ')';
    
}
function nightBg() {

    let selectBG = nightImg[Math.floor(Math.random() * nightImg.length)];
    document.querySelector('.body').style.backgroundImage = 'url(' + selectBG + ')';
    
}


//........................................




// .................................quotes............................





let quote = document.querySelector('.quote'); 
let text = document.querySelector('.authorName');

function randomQuotes () {
    let randomNum = Math.round(Math.random() * quotes.length);
    quote.innerHTML = quotes[randomNum].quoteText;
    text.innerHTML = quotes[randomNum].quoteAuthor;
}
setInterval(randomQuotes, 8000);
randomQuotes();





// ...............................todo.................................


let input = document.querySelector("#input");
let inputContainer = document.querySelector(".input_container");
let ul = document.querySelector(".list");
let activeTodo = document.querySelector(".active");
let completedTodo = document.querySelector(".completed");
let clearCompletedTodo = document.querySelector(".clear_completed");
let item_count = document.querySelector('.item_count')
let item = document.querySelector('.item');
let allTodo = document.querySelector('.all');
let allTodo2 = document.querySelector('.all1');
let selectAllTodo = document.querySelector('.i');
var newlabel = document.createElement("Label");
let footer1 = document.querySelector('footer1');
// todoList =[];
let todoList = JSON.parse(localStorage.getItem('todo-list')) || [];

function view (arrayToDisplay) {
    ul.innerHTML = '';
    
    arrayToDisplay.forEach((item,index) => {
        let li = document.createElement("li");
        li.className = "li_list";
        li.classList.add('li_list2');
        const check = document.createElement("input");
        check.type = "checkbox";
        check.setAttribute("data-id", todoList.indexOf(item));
        check.id = 'right-'+index;
        check.className = "check";
        const newLabel = document.createElement("Label");
        newLabel.setAttribute("for",'right-'+index);
        imgContainer = document.createElement("div");
        imgContainer.className = 'imgContainer';
        img = document.createElement('img');
        img.className = 'right';
        img.src = 'chk1.png';
        imgContainer.appendChild(img);
        newLabel.appendChild(imgContainer);
        li.appendChild(newLabel);
        check.checked = item.isDone;
        check.addEventListener("click", handleCheck);
        const p = document.createElement("p");
        p.innerText = item.text;
        const btn = document.createElement("span");
        btn.addEventListener("click" , deleteSubmit);
        btn.innerText = "x";
        btn.className = "btn del";
        btn.setAttribute("data-id", index);
        if (item.isDone == true ){
            img.style.opacity = "1";
            imgContainer.style.border = "none";
            p.style.textDecoration = "line-through";
            p.style.color = "rgba(0, 0, 0,0.4)";
        } else {
            img.style.opacity = "0";
            p.style.textDecoration = "none";
        }
        li.appendChild(check);
        li.appendChild(p);
        li.appendChild(btn);
        ul.appendChild(li);
    });
    
    item_count.innerText = activeLength();
    itemsLeft(); 
    showClearCompleted (); 
    localStorage.setItem('todo-list', JSON.stringify(todoList));
}

function handleSubmit (event){
    if (event.keyCode === 13 && event.target.value.trim() != "") {
        const todoText = {text: '', isDone: false , id:''};
        todoText.text = input.value;
        todoList.push(todoText);
        input.style.border = "none";
        console.log(todoList);
        document.querySelector(".input_container .i").classList.add("i_");
        document.querySelector(".input_container .i").style.opacity = 0.2;
        document.querySelector(".foot").classList.add("footer_container");
        event.target.value = "";
        view(todoList);
    }
}    
    function deleteSubmit (event) {
        console.log('inside delete',event)
        var index = event.target.dataset.id
        // if(event.target.classList.contains("del")){
            console.log('inside delete if')
        todoList.splice(index,1);
        // }
        view(todoList);

    }
    

    function handleCheck (event) {
        console.log("handle check",event);
        var id = event.target.dataset.id
        console.log(id);
        todoList[id].isDone = !todoList[id].isDone;
        view(todoList)

}
    function completed () {
        console.log('inside complete')
        const isChecked = todoList.filter((item) => {
            allTodo2.classList.remove('all');
            activeTodo.classList.remove('active1');
            completedTodo.classList.add('completed1');
            return item.isDone == true;
        })
        view(isChecked);
}
    function showClearCompleted () {
        if(todoList.some((todo) => todo.isDone==true)) {
            document.querySelector('.clear_completed').classList.add('clearCompleted');
        }else{
            document.querySelector('.clear_completed').classList.remove('clearCompleted');
        }
};
 
   function active () {
        const isActive = todoList.filter((item) => {
            completedTodo.classList.remove('completed1');
            allTodo2.classList.remove('all');
            activeTodo.classList.add('active1');
            return item.isDone == false;
        })
        view(isActive);
    }
    function activeLength () {
        const isActive = todoList.filter((item) => {
            return item.isDone == false;
        })
        
        return isActive.length;
    }
    function all() {
        completedTodo.classList.remove('completed1');
        allTodo2.classList.add('all');
        activeTodo.classList.remove('active1');
        view(todoList);
    }
    function itemsLeft () {
        const isActive = todoList.filter((item) => {
            return item.isDone == false;
        })
        return isActive.length <= 1 ? item.innerText = "item left" : item.innerText = "items left";
        }
    function clearCompleted (event) {
        const isNotComplete = todoList.filter((item) => {
            selectAllTodo.style.opacity = 0.2;
             return item.isDone == false;
          })
          todoList = isNotComplete;
          view(todoList)
    }
    function selectAll (event){
        const falsed = todoList.filter(item => item.isDone == false)
        console.log(falsed.length); 
        if(falsed.length == 0){
            todoList.forEach((item) => {
                selectAllTodo.style.opacity = 0.2;
                return item.isDone = false;
            })            
        }
        else {
            todoList.forEach((item) => {
                selectAllTodo.style.opacity = 0.8;
                return item.isDone = true;
            })
        }
        
        view(todoList);
    }

    view(todoList);
    enterName.addEventListener('keyup',login);
    passwordInput.addEventListener('keydown',createPassword);
    verifyInput.addEventListener('keydown',verifyPassword);
    input.addEventListener('keydown', handleSubmit);
    completedTodo.addEventListener('click',completed);
    activeTodo.addEventListener('click',active);
    allTodo.addEventListener("click",all);
    clearCompletedTodo.addEventListener('click',clearCompleted);
    selectAllTodo.addEventListener('click',selectAll);


    // ...............................todo end ...........................
