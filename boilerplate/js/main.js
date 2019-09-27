// You js goes here

// .........................welcome ..........................

let hey = document.querySelector('.hey');
let enterName = document.querySelector('.enterName');
let userName = document.querySelector('.userName');
let containerAll = document.querySelector('.containerAll');

function login (event) {
    if (event.keyCode === 13 && event.target.value.trim() != ""){
        userName.innerText = enterName.value.toUpperCase() ;
        containerAll.classList.add('allContainer');
        enterName.classList.add('nameEnter');
        hey.innerText = "";
    }
}
enterName.addEventListener('keyup',login);
    

// ..........................Clock...............................
setInterval(displayTime,500);
function displayTime() {
    let time = new Date();
    let hours = time.getHours();
    let mints = time.getMinutes();
    let seconds = time.getSeconds();
    let greetings = document.getElementById('greetings');
    let en = 'AM'
    if (hours > 12 ){
        en = 'PM';
    } else if (hours < 12) {
        en = 'AM';
    }
    if (hours > 5 ) {
        greetings.innerText = "Good evening,";
    } 
    if (hours > 12 && hours <  5 ) {
        greetings.innerText = "Good afternoon,";
    } 
     if (hours < 12 ) {
        greetings.innerText = "Good morning,";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours == 0) {
        hours = 12;
    } 
    if (hours < 10) {
        hours = '0' + hours;
    }
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

function randombg() {
 
    var img = ['img/bg1.jpg','img/bg2.jpg','img/bg3.jpg','img/bg4.jpg','img/bg5.jpg',
                'img/bg6.jpg','img/bg7.jpg','img/bg8.jpg','img/bg9.jpg','img/bg10.jpg',
                'img/bg11.jpg','img/bg12.jpg','img/bg13.jpg','img/bg14.jpg',  'img/bg15.jpg',  'img/bg16.jpg',
                'img/bg17.jpg','img/bg18.jpg', 'img/bg19.jpg','img/bg20.jpg', 'img/bg21.jpg',  'img/bg22.jpg',
                'img/bg23.jpg','img/bg24.jpg', 'img/bg25.jpg','img/bg26.jpg','img/bg27.jpg','img/bg28.jpg',
                'img/bg29.jpg','img/bg30.jpg','img/bg31.jpg','img/bg32.jpg','img/bg33.jpg',
                'img/bg34.jpg', 'img/bg35.jpg', 'img/bg36.jpg','img/bg37.jpg','img/bg38.jpg','img/bg39.jpg',
                'img/bg40.jpg','img/bg41.jpg','img/bg42.jpg','img/bg43.jpg', 'img/bg44.jpg',
                'img/bg45.jpg','img/bg46.jpg','img/bg47.jpg','img/bg48.jpg','img/bg49.jpg',
                'img/bg50.jpg','img/bg51.jpg', 'img/bg52.jpg','img/bg53.jpg','img/bg54.jpg',
                'img/bg55.jpg','img/bg56.jpg','img/bg57.jpg','img/bg58.jpg','img/bg59.jpg',
                'img/bg60.jpg','img/d1.jpg','img/d2.jpg','img/d3.jpg','img/d4.jpg','img/d5.jpg',
                'img/d6.jpg','img/d7.jpg','img/d8.jpg','img/d9.jpg','img/n1.jpg','img/n2.jpg',
                'img/n3.jpg','img/n4.jpg','img/n5.jpg','img/n6.jpg','img/n7.jpg',
                ];

selectBG = img[Math.floor(Math.random() * img.length)];
document.body.style.backgroundImage = 'url(' + selectBG + ')';

}
randombg ()
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
        const check = document.createElement("input");
        check.type = "checkbox";
        check.setAttribute("data-id", index);
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
            p.style.color = "rgba(238, 231, 231,0.4)";
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
    console.log(event.target.value);
    if (event.keyCode === 13 && event.target.value.trim() != "") {
        const todoText = {text: '', isDone: false ,id:''};
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
        
        console.log('hola');
        view(todoList);
    }

    view(todoList);

    input.addEventListener('keydown', handleSubmit);
    completedTodo.addEventListener('click',completed);
    activeTodo.addEventListener('click',active);
    allTodo.addEventListener("click",all);
    clearCompletedTodo.addEventListener('click',clearCompleted);
    selectAllTodo.addEventListener('click',selectAll);


    // ...............................todo end ...........................
