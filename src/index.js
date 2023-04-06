document.addEventListener('DOMContentLoaded', () => {

  
})

const form = document.getElementById('create-task-form');
form.addEventListener('submit', addToList);
const uList = document.getElementById('tasks');

function addToList(eventObj) {
  eventObj.preventDefault();
  const listItem = document.createElement('li');
  const newText = eventObj.target['new-task-description'].value;
  listItem.textContent = newText;
  uList.append(listItem);
  eventObj.target.reset();
  
  const btn = document.createElement('button');
  btn.textContent = "REMOVE";
  listItem.append(btn);

  btn.addEventListener('click', () => {
    listItem.remove();
  })
//   add new functions here

}












