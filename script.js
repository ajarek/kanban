import { Label } from "./classes/label.js"
import { Input } from "./classes/input.js"
import { Button } from "./classes/button.js"
import { Select } from "./classes/select.js"
const addTaskButton=document.querySelector('.add-task')
let ArrayTasks=[]
let task={
   
    title:'',
    description:'',
    status:'',
}


function loadTasks(status){
 let data=ArrayTasks.reverse().find((el) =>el.status===status)
    if(data){
        const div=document.createElement('div')
        div.classList.add('.rows')
        div.innerHTML=`<div class="item">
        <h5>${data.title}</h5>
        <p>${data.description}</p>
      </div>`
        document.querySelector(`#${status}>.rows`).append(div)
    }       
}

function columnsLength(){
    const columns=document.querySelector('#todo>.rows').children.length
    document.querySelector('#todo> .title>h4>span').innerHTML=columns
    const columns1=document.querySelector('#doing>.rows').children.length
    document.querySelector('#doing> .title>h4>span').innerHTML=columns1
    const columns2=document.querySelector('#done>.rows').children.length
    document.querySelector('#done> .title>h4>span').innerHTML=columns2
}

function crateTaskBoard(){
   if(document.querySelector('.task-board')){
         document.querySelector('.task-board').remove()
    }
    const taskBoard=document.createElement('div')
    taskBoard.classList.add('task-board')
    const headerBoard=document.createElement('h3')
    headerBoard.classList.add('header-board')
    headerBoard.innerHTML='Add New Task'
    const label=new Label('Title').render()
    const input=new Input('text','Title','input').render()
    const label2=new Label('Description').render()
    const input2=new Input('text','Description','input').render()
    const label3=new Label('Subtasks').render()
    const input3=new Input('text','Subtasks','input-subtask').render()
    const button=new Button('+ Add New Subtask',addSubtask,'add-subtask').render()
    const label4=new Label('Status').render()
    const select=new Select('select').render()
    const option1=new Select('option').renderOption('todo','todo')
    const option2=new Select('option').renderOption('doing','doing')
    const option3=new Select('option').renderOption('done','done')
    select.append(option1,option2,option3)
    const button2=new Button('Create Task',CreateTask,'create-task').render()
  
    taskBoard.append(headerBoard,label,input,label2,input2,label3,input3,button,label4,select,button2)
    document.body.append(taskBoard)
}

function addSubtask(){
    console.log('add subtask')
}

function CreateTask(){
    const options = document.querySelectorAll("option");
   const inputs= document.querySelectorAll('.input')
   const taskBoard=document.querySelector('.task-board')
         task={
            title:inputs[0].value,
            description:inputs[1].value,
            status:[...options].filter((el) => el.selected)[0].value
        }
        ArrayTasks.push(task)
        loadTasks(task.status)
        columnsLength()
taskBoard.remove()
console.log(ArrayTasks)
}

function init(){
    columnsLength()
    addTaskButton.addEventListener('click',crateTaskBoard)
}
init()