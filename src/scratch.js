const form = document.getElementById('create-task-form');
const uList = document.getElementById('tasks');

function addTaskToList(eventObj) {
  eventObj.preventDefault();
  eventObj.target.reset();
  const listItem = document.createElement('li');
  const newText = eventObj.target['new-task-description'].value;
  listItem.textContent = newText;
  uList.append(listItem);

  const btn = document.createElement('button');
  btn.textContent = "Remove";
  listItem.append(btn);

  btn.addEventListener('click', () => {
    listItem.remove();
  })
}

form.addEventListener('submit', addTaskToList);




document.addEventListener('DOMContentLoaded', () => {

  
})
