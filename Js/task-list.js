const taskValue = document.getElementById("tasklist-item");
const ul = document.getElementById("tasklist-ul");
const createTaskButton = document.querySelector("#create-task-button");

const createTask = () => {
  if (taskValue.value === "") {
    alert("Write something");
  } else {
    var task = document.createElement("p");
    task.innerText = taskValue.value;
    var listItem = document.createElement("li");
    listItem.appendChild(task);
    ul.appendChild(listItem);
    task.innerHTML = taskValue.value;
    listItem.classList.add("tasklist-li", "color", "task-opacity");
    listItem.style.color = color;
    taskValue.value = "";
  }

  listItem.addEventListener("click", () => {
    task.style.textDecoration = "line-through";
  });
  listItem.addEventListener("dblclick", () => {
    ul.removeChild(listItem);
  });
};

taskValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

createTaskButton.addEventListener("click", createTask);
