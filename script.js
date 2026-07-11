let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter="all";


function save(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}



function addTask(){

let text=document.getElementById("taskInput").value;

let date=document.getElementById("dateInput").value;

let priority=document.getElementById("priorityInput").value;


if(text===""){
alert("Írj be egy feladatot!");
return;
}


tasks.push({

id:Date.now(),

text:text,

date:date,

priority:priority,

done:false

});


save();

render();


document.getElementById("taskInput").value="";

}



function render(){

let list=document.getElementById("taskList");

list.innerHTML="";


let filtered=tasks.filter(task=>{


if(currentFilter==="active")
return !task.done;


if(currentFilter==="done")
return task.done;


return true;


});



filtered.forEach(task=>{


let li=document.createElement("li");

li.className=
"task "+
(task.done?"done ":"")+
task.priority.toLowerCase();



li.innerHTML=`

<div>

<b>${task.text}</b>

<br>

📅 ${task.date || "Nincs dátum"}

</div>


<div class="actions">


<button onclick="toggle(${task.id})">
✔
</button>


<button onclick="editTask(${task.id})">
✏️
</button>


<button onclick="deleteTask(${task.id})">
🗑
</button>


</div>

`;


list.appendChild(li);


});


}




function toggle(id){

let task=tasks.find(t=>t.id===id);

task.done=!task.done;

save();

render();

}



function deleteTask(id){

tasks=
tasks.filter(t=>t.id!==id);

save();

render();

}



function editTask(id){

let task=tasks.find(t=>t.id===id);


let newText=
prompt(
"Új név:",
task.text
);


if(newText){

task.text=newText;

save();

render();

}

}



function filterTasks(type){

currentFilter=type;

render();

}



function searchTasks(){

let value=
document
.getElementById("search")
.value
.toLowerCase();



document
.querySelectorAll(".task")
.forEach(task=>{


if(task.innerText.toLowerCase().includes(value))

task.style.display="flex";


else

task.style.display="none";


});


}



render();
