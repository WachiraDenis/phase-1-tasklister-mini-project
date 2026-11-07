
document.addEventListener("DOMContentLoaded", () => {

  /
const form = document.getElementById("create-task-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const taskInput = document.getElementById("new-task-description");
  const task = taskInput.value;

  buildToDo(task);

});

function buildToDo(task) {
  const li = document.createElement("li");

  li.textContent = task;

  const taskList = document.getElementById("tasks");

  taskList.appendChild(li);
}


});
