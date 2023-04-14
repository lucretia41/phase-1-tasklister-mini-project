// document.addEventListener('DOMContentLoaded', () => {
//     addingEventListener()
// })
// let taskObjArr = []

// function addingEventListener() {
//     document.getElementById("create-task-form")
//     document.addEventListener("submit", handleFormSubmit)
// };

// function handleFormSubmit(e) {

//     e.prevent.Default()
//     // console.log(task)
//     const task = e.target[0].value
//     const priorityLevel = parseInt(e.target.priority.value)

//     console.log(priorityLevel)
    

//     displayTask(task, priorityLevel)



// }



// function displayTask(task, priorityLevel) {
//     const taskUl = document.getElementById("tasks")
//     const taskLi = document.createElement("li")
//     const deleteBtn = document.createElement("button")

//     deleteBtn.textContent = "x"
//     deleteBtn.addEventListener("click", deleteTask)



//     task.textContent = task + " "
//     // console.log(taskLi)
//     task.li.style.color = getPriorityColor(priorityLevel)
//     taskLi.appendChild(deleteBtn)
//     taskUl.appendChild(taskLi)
// }

// function deleteTask(e){
//     // console.log(e)
//     e.target.parentNode.remove()

// }
// function getPriorityColor(priorityLevel) {
//     // console.log(priorityLevel)
//     if (priorityLevel === 1) {
//         return "red"
//     } else if (priorityLevel === 2) {
//         return "cornflowerblue"
//     } else {
//         return "green"
//     }

// }






document.addEventListener("DOMContentLoaded", () => {
    addingEventListeners()
 })
 
 let todos = []
 
 function addingEventListeners() {
    document
       .getElementById("create-task-form")
       .addEventListener("submit", handleFormSubmit)
    document
       .getElementById("sort")
       .addEventListener("change", sortAndDisplayTodos)
 }
 
 function handleFormSubmit(e) {
    e.preventDefault()
 
    let todo = { task: e.target[0].value, priority: Number(e.target[1].value) }
 
    addToArray(todo)
    sortAndDisplayTodos()
 
    e.target.reset()
 }
 
 function addToArray(todo) {
    todos.push(todo)
 }
 
 function displayTodos() {
    let tasks = document.getElementById("tasks")
    tasks.innerHTML = ""
 
    todos.forEach((todo) => {
       let p = document.createElement("p")
       let deleteBtn = document.createElement("button")
 
       deleteBtn.textContent = "remove"
       deleteBtn.addEventListener("click", (e) => {
          deleteTask(e, todo)
       })
 
       p.textContent = `${todo.task} `
 
       if (todo.priority === 1) {
          p.style.color = "red"
       } else if (todo.priority === 2) {
          p.style.color = "green"
       } else {
          p.style.color = "blue"
       }
 
       p.appendChild(deleteBtn)
 
       tasks.appendChild(p)
    })
 }
 
 function deleteTask(e, todo) {
    todos = todos.filter((el) => el.task !== todo.task)
    e.target.parentNode.remove()
 }
 
 function sortAndDisplayTodos() {
    let sort = document.getElementById("sort")
 
    if (sort.value === "high-low") {
       todos.sort((a, b) => a.priority - b.priority)
    } else {
       todos.sort((a, b) => b.priority - a.priority)
    }
 
    displayTodos()
 }

