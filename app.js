// Define UI Variables
const form = document.querySelector('#task-form');
const newTaskInputField = document.querySelector('#task');
const taskListCollection = document.querySelector('.collection');
const clearTheFilter = document.querySelector('#filter');
const clearTasksBtn = document.querySelector('.clear-tasks');

/*
we're going to need a submit button on the task form, but instead of putting 
it in the global scope, we're going to call a funtion to 
LOAD ALL EVENT LISTENERS
*/

// calls the function
loadEventListners();

// creates the function
function loadEventListners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add task
function addTask(e) {
  // REMIND user to add a task
  if (newTaskInputField.value === '') {
    alert('ADD A TASK PLEASE!');
  }

  /*
  Next, what do we want to happen when a user adds a task?
  We want to create a list item of course!
  */

  // Create li element from scratch
  const li = document.createElement('li');

  /*
  Next, we want to add a class because in Materialize, we have to add a 
  class to the list-item as well so we can make it look nice.
  We're adding that class using JS instead of HTML...Kathy-make sure to 
  look up the reason for this
  */

  // Add class to li collection item
  li.className = 'collection-item';

  // Create text node and append (add/attach/usually to the end) to the li
  // Inside the createTextNode parentheses, we want to put whatever's being
  // passed into the New Task input field
  li.appendChild(document.createTextNode(newTaskInputField.value));

  // Next, create a new link element, b/c we're going to implement deletion
  // ability.
  // Delete link element
  const link = document.createElement('a');

  // Add class to link element for same reason as above on lines 39 - 42
  // secondary-content class is Materialize specific, list items require it
  link.className = 'delete-item secondary-content';

  // Add icon html
  link.innerHTML = '<i class="far fa-trash-alt"></i>';

  // Append the link to the li
  li.appendChild(link);

  // Append the li to the ul
  taskListCollection.appendChild(li);

  // Clear the input after the button has been clicked
  newTaskInputField.value = '';

  // Prevent default behavior of form being submitted
  // ALERT! I made a mistake here and spent about 8 minutes trying to figure it
  // out. The mistake I made was forgetting to add the word Default to the
  // method below  /:[
  e.preventDefault();
}
