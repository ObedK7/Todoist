const add = document.getElementById("add");
const addBtn = document.getElementById('addBtn')
const input = document.getElementById("input")
const task = document.getElementById("task")
const toggleMenu = document.getElementById("toggle-menu")
const darkMode = document.getElementById("dark-btn")
const search = document.getElementById("search")
const overview = document.getElementById("overview")
const asideMenu = document.getElementById("aside-menu")
const totalTask = document.querySelector(".total-task")
const overviewTotal = document.querySelector(".totalTask")
const update = document.querySelector(".update");
const updateOverview = document.querySelector(".updateOverview");
const completeDisplay = document.getElementById("completed-tasks")


addBtn.addEventListener("click", () => {
    const inputValue = input.value;
    if (inputValue.trim() === "") return;

    if (task.children.length >= totalCount) {
        totalCount += 1;
        totalTask.textContent = totalCount;
        overviewTotal.textContent = totalCount;
    }

    if (totalCount > 1) {
        update.textContent = "tasks";
        updateOverview.textContent = "Tasks";
    }



    // Button Styling Helper
    const button = document.createElement("button")
    button.classList.add("delete");
    button.textContent = "Delete"
    button.style.backgroundColor = "red"
    button.style.borderRadius = "0.10rem"
    button.style.border = "0px solid black"
    button.style.boxShadow = "2px 5px 15px 10px rgba(0, 0, 0, 0.12)"
    button.style.marginRight = "0.25em"
    button.style.cursor = "pointer"
    button.style.color = "white"


    // List Styling helper
    const newLi = document.createElement("li");
    newLi.style.display = 'flex'
    newLi.style.justifyContent = 'flex-start'
    newLi.style.alignItems = 'center'
    newLi.style.gap = '0.5em'
    newLi.style.margin = "0.25em";
    newLi.style.border = "0px solid black"
    newLi.style.borderRadius = "5px"
    newLi.style.backgroundColor = "white"
    newLi.style.boxShadow = "0 3px 8px 2px rgba(0, 0, 0, 0.12)"
    newLi.style.padding = "5px"



    // Checkbox helper function
    const inputcheckbox = document.createElement("input")
    inputcheckbox.type = "checkbox"
    inputcheckbox.name = "checkbox"
    inputcheckbox.style.accentColor = "green"

    // const checkbox = document.querySelector(':checked')

    inputcheckbox.addEventListener("change", (e) => {
        TaskText.style.textDecoration = "line-through"
    })

    // Task Text Helper
    const TaskText = document.createElement("p")
    TaskText.textContent = inputValue;
    TaskText.style.width = "50%";
    TaskText.style.marginRight = "auto"

    // Completed Task Helper
    // const completeText = document.createElement("p")
    // completeText.textContent = "Completed"
    // completeText.style.color = "green"
    // completeText.style.fontSize = "8px"
    // completeText.style.fontWeight = "bolder"
    // completeText.style.marginRight = "1em"

    // Appending Helper
    newLi.appendChild(inputcheckbox)
    newLi.appendChild(TaskText)
    newLi.appendChild(button)
    task.appendChild(newLi);
})



let totalCount = 0;
let completeCount = 0;

add.addEventListener("click", () => {
    const inputValue = input.value;
    if (inputValue.trim() === "") return;

    if (task.children.length >= totalCount) {
        totalCount += 1;
        totalTask.textContent = totalCount;
        overviewTotal.textContent = totalCount;
    }

    if (totalCount > 1) {
        update.textContent = "tasks"
        updateOverview.textContent = "Tasks"
    }




    // Button Styling Helper
    const button = document.createElement("button")
    button.classList.add("delete");
    button.textContent = "Delete"
    button.style.backgroundColor = "red"
    button.style.borderRadius = "0.10rem"
    button.style.border = "0px solid black"
    button.style.boxShadow = "2px 5px 15px 10px rgba(0, 0, 0, 0.12)"
    button.style.marginRight = "0.25em"
    button.style.cursor = "pointer"
    button.style.color = "white"


    // List Styling helper
    const newLi = document.createElement("li");
    newLi.style.display = 'flex'
    newLi.style.justifyContent = 'flex-start'
    newLi.style.alignItems = 'center'
    newLi.style.gap = '0.5em'
    newLi.style.margin = "0.25em";
    newLi.style.border = "0px solid black"
    newLi.style.borderRadius = "5px"
    newLi.style.backgroundColor = "white"
    newLi.style.boxShadow = "0 3px 8px 2px rgba(0, 0, 0, 0.12)"
    newLi.style.padding = "5px"



    // Checkbox helper function
    const inputcheckbox = document.createElement("input")
    inputcheckbox.type = "checkbox"
    inputcheckbox.name = "checkbox"
    inputcheckbox.classList.add("check")

    inputcheckbox.addEventListener("change", () => {
        completeText.classList.add("complete")
        if (inputcheckbox.checked) {
            TaskText.classList.add("strikethrough")
            TaskText.style.width = "auto"
            completeText.textContent = "Completed"
            completeText.style.display = "flex"
            completeText.style.justifyContent = "flex-start"
            completeText.style.width = "0 auto"
            completeCount += 1;
            completeDisplay.textContent = completeCount;
        } else {
            TaskText.classList.remove("strikethrough")
            completeText.textContent = ""
            completeText.style.display = "none"
            TaskText.style.width = "auto"
            completeCount -= 1;
            completeDisplay.textContent = completeCount;
        }

    })



    // Task Text Helper
    const TaskText = document.createElement("p")
    TaskText.textContent = inputValue;
    TaskText.style.width = "auto";
    TaskText.style.flex = "1"
    TaskText.style.margin = "0"


    // Completed Task Helper
    const completeText = document.createElement("p")
    completeText.style.color = "green"
    completeText.style.fontSize = "8px"
    completeText.style.fontWeight = "bolder"
    completeText.style.margin = "auto"
    completeText.style.flex = "1"
    completeText.style.padding = "0.25em 0"
    completeText.style.marginRight = "0.5em"
    completeText.style.display = "flex"
    completeText.style.justifyContent = "flex-start"
    completeText.style.alignItems = "center"


    // // Important Task Helper
    // const importantTask = document.createElement("input");
    // importantTask.type = 'range'
    // importantTask.style.width = "10%"

    // Appending Helper
    newLi.appendChild(inputcheckbox)
    newLi.appendChild(TaskText)
    newLi.appendChild(completeText)
    newLi.appendChild(button)
    task.appendChild(newLi);
})



darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    overview.classList.toggle("bg-overview");
    task.classList.toggle("bg-color")
})


toggleMenu.addEventListener("click", () => {
    asideMenu.classList.toggle("aside-menu")
})


search.addEventListener('click', () => {
    search.classList.toggle("highlight")
})



task.addEventListener("click", (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        if (task.children.length < totalCount) {
            totalCount -= 1;
            totalTask.textContent = totalCount;
            overviewTotal.textContent = totalCount;
        }
        if (totalCount < 2) {
            update.textContent = "task";
            updateOverview.textContent = "Task"
        }
        const inputcheckbox = document.createElement("input")
        inputcheckbox.type = "checkbox"
        inputcheckbox.name = "checkbox"
        if (!inputcheckbox.checked <= completeCount) {
            completeCount -= 1;
            completeDisplay.textContent = completeCount;
            alert("Are you sure you want to remove?")
        }
    }
})
