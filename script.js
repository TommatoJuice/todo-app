function addTask(){

    let input=document.getElementById("task");

    let text=input.value;

    if(text==="") return;

    let li=document.createElement("li");

    li.innerHTML=text;

    document.getElementById("list").appendChild(li);

    input.value="";
}
