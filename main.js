const todoList = document.querySelector("main #todo ul")

const progressList = document.querySelector("main #in_progress ul")

const doneList = document.querySelector("main #done ul")

let liTodo;
let liProgress;
let liDone;

const todoArray = [];
const progressArray = [];
const doneArray = [];

const add = function () {
    const action = prompt("Enter your activity, please?");
    if (action !== "") {
        const todo = document.createElement("li");
        todo.innerText = action;
        const addToProgress = document.createElement("button");
        addToProgress.innerText = "Move to in-progress list";
        const addToDone = document.createElement("button");
        addToDone.innerText = "Move to done list";
        todoList.append(todo);
        todo.append(addToProgress)
        liTodo = todo;
        todoArray.push(liTodo);
        
        addToProgress.onclick = function () {
            todo.innerText = action;
            const progress = document.createElement("li");
            progress.innerText = todo.innerText;
            progressList.append(progress);
            progress.append(addToDone);
            todo.remove();
            addToProgress.remove();
            liProgress = progress;
            progressArray.push(liProgress);

            addToDone.onclick = function () {
                progress.innerText = action;
                const done = document.createElement("li");
                done.innerText = progress.innerText;
                doneList.append(done);
                progress.remove();
                addToDone.remove();
                liDone = done;
                doneArray.push(liDone);
            };
        
        };
    }
};

const reset = function () {
    if (document.querySelector("main #todo ul li")) {
        for (let i = 0; i < todoArray.length; i++) {
            liTodo = todoArray[i];
            liTodo.remove();
        }
    }
    if (document.querySelector("main #in_progress ul li")) {
        for (let i = 0; i < progressArray.length; i++) {
            liProgress = progressArray[i];
            liProgress.remove();
        }
    }
    if (document.querySelector("main #done ul li")) {
        for (let i = 0; i < doneArray.length; i++) {
            liDone = doneArray[i];
            liDone.remove();
        }
    }
};

const footer = document.querySelector("footer");

const close = function () {
    footer.style.display = "none";
}