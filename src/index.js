document.addEventListener("DOMContentLoaded", () => {
  // your code here
document.addEventListener('DOMContentLoaded', () => {

    // Select the form using id 'create-task-form'
    const form = document.getElementById('create-task-form');

    // Add submit event listener
    form.addEventListener('submit', (event) => {

        // Prevent the page from refreshing on submit
        event.preventDefault();

        // Get the task value from the input with name 'new-task-description'
        const task = event.target['new-task-description'].value;

        // Only add the task if it is not empty
        if (task.trim() !== '') {

            // Call buildToDo and pass the task string
            buildToDo(task);

            // Reset the form to clear the input field after submission
            form.reset();
        }
    });

    // buildToDo creates a new li element and appends it to the task list
    function buildToDo(task) {

        // Create a new <li> element
        const li = document.createElement('li');

        // Set the text content to the task the user entered
        li.textContent = task;

        // Try getting task list by 'task-list' first (used by test)
        // Fall back to 'task' id if 'task-list' doesn't exist
        const taskList = document.getElementById('task-list') || document.getElementById('task');

        // Append the li to the task list so it shows on the page
        taskList.appendChild(li);
    }

    // Export buildToDo so the Mocha test can import and test it
    module.exports = { buildToDo };

});

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
