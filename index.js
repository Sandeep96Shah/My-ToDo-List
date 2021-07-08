var count=0;
function todo_task(){

    let form = document.getElementById('input_form_field');
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
    })
    let totalTask = document.getElementById('total_task');
    //getting the input field value
    let task = document.getElementById('my_task').value;
    document.getElementById('my_task').value='';
    if(task == ''){
        alert("Please Enter You Task");
        return;
    }

    //creating the p tag and assigning the input text to it
    let para = document.createElement('p');
    para.appendChild(document.createTextNode(task));
    
    //creating the div and i tag and adding class to it
    let inner_div_1 = document.createElement('div');
    inner_div_1.classList.add('task_title');
    let circle = document.createElement('i');
    circle.classList.add("far", "fa-circle");
    inner_div_1.appendChild(circle);
    inner_div_1.appendChild(para);

    //creating the div and i tag and adding class to it
     let inner_div_2 = document.createElement('div');
     let cross = document.createElement('i');
     cross.classList.add("far", "fa-times-circle");
     inner_div_2.appendChild(cross);
     cross.addEventListener('click',()=>{
        count--;
        totalTask.innerText=count;
        outer_div.parentNode.removeChild(outer_div);
    });

    //creating the div tag and appending the above div into it
    let outer_div = document.createElement('div');
    outer_div.classList.add('task');
    outer_div.appendChild(inner_div_1);
    outer_div.appendChild(inner_div_2);
    
    //outer_div.appendChild(inner_div_2);
    let taskDisplay = document.getElementById('your_task');
    taskDisplay.appendChild(outer_div);

    //for couting the total number of tasks
    count++;
    totalTask.innerText=count;
    
}

function complete_all_tasks(){
    let yourTask = document.getElementById('your_task');
    let totalTask = document.getElementById('total_task');
    count = 0;
    totalTask.innerText=count;
    yourTask.parentNode.removeChild(yourTask);
}


