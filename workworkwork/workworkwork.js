var tasks = JSON.parse(localStorage.getItem("myTasks"));
if (tasks == null){
    var tasks = [];
}
createTable();

function createTable(){
    var result = `<table border="1" cellSpacing="0" style="margin-left:auto;margin-right:auto">`;    
    for (var index=0;index<tasks.length;index++){     
        if (tasks[index].taskDone == false) {  
        result += `
            <tr>
                <td>${tasks[index].taskName}</td>
                <td>${tasks[index].taskDate}</td>
                <td><input type="checkbox" ${tasks[index].taskDone?"checked":""} onchange="taskIsDone(${index})"/></td>
            </tr>
        `;
        } else { result += `
        <tr>
            <td><s>${tasks[index].taskName}</s></td>
            <td><s>${tasks[index].taskDate}</s></td>
            <td><input type="checkbox" ${tasks[index].taskDone?"checked":""} onchange="taskIsDone(${index})"/></td>
        </tr>
        `;
        }
    }
    result+="</table>" 
    document.getElementById("taskList").innerHTML = result;
}

//c'tor
function Tasks(taskName,taskDate,taskDone){
    this.taskName=taskName;
    this.taskDate=taskDate;
    this.taskDone=taskDone;
}

function taskIsDone (index) {
    tasks[index].taskDone=true;
    createTable();
    saveTasks();
}

const saveTasks = ()=>{
    localStorage.setItem("myTasks",JSON.stringify(tasks));
}

const addTask = ()=>{
    var taskName = document.getElementById("taskName").value;
    var taskDate = document.getElementById("taskDate").value;
    var taskDone = false;
    tasks.push(new Tasks(taskName,taskDate,taskDone));
    createTable();
    saveTasks();
}


const clearTasks = ()=>{
    localStorage.removeItem("myTasks")
    tasks=[];
    createTable();
}