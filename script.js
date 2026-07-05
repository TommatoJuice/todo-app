let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function addTask(){
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if(text === "") return;

    tasks.push({
        text: text,
        done: false
    });

    input.value = "";
    saveTasks();
}

function deleteTask(index){
    tasks.splice(index, 1);
    saveTasks();
}

function toggleTask(index){
    tasks[index].done = !tasks[index].done;
    saveTasks();
}

function renderTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li class="${task.done ? 'done' : ''}">
                <span onclick="toggleTask(${index})">${task.text}</span>

                <div>
                    <button class="btn" onclick="deleteTask(${index})">❌</button>
                </div>
            </li>
        `;
    });
}

renderTasks();
