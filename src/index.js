document.addEventListener("DOMContentLoaded", () => {
  // your code here

const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the page from refreshing

  const newTaskValue = taskInput.value;
  
  if (newTaskValue.trim() !== "") {
    addItemToList(newTaskValue);
    taskForm.reset(); // Clears the input field
  }
});

});
