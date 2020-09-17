const todoAdd = document.querySelector("main #todo");

const inProgressAdd = document.querySelector("main #in_progress");

const doneAdd = document.querySelector("main #done");

const todoList = document.createElement("ul");

const progressList = document.createElement("ul");

const doneList = document.createElement("ul");

todoAdd.append(todoList);
inProgressAdd.append(progressList);
doneAdd.append(doneList);

const add = function () {
    const action = prompt("Enter your activity, please?");
    if (action !== "") {
        const element = document.createElement("li");
        element.innerText = action;
        const addToProgress = document.createElement("button");
        addToProgress.innerText = "Move to in-progress list";
        const addToDone = document.createElement("button");
        addToDone.innerText = "Move to done list";
        todoList.append(element);
        element.append(addToProgress)
        
        addToProgress.onclick = function () {
            element.innerText = action;
            const progress = document.createElement("li");
            progress.innerText = element.innerText;
            progressList.append(progress);
            progress.append(addToDone);
            element.remove();
            addToProgress.remove();

            addToDone.onclick = function () {
                progress.innerText = action;
                const done = document.createElement("li");
                done.innerText = progress.innerText;
                doneList.append(done);
                progress.remove();
                addToDone.remove();
            };
        
        };
    }
};

const reset = function () {
    doneList.remove();
    progressList.remove();
    todoList.remove();
    return function () {
        const todoAdd = document.querySelector("main #todo");
    
        const inProgressAdd = document.querySelector("main #in_progress");
    
        const doneAdd = document.querySelector("main #done");
    
        const todoList = document.createElement("ul");
    
        const progressList = document.createElement("ul");
    
        const doneList = document.createElement("ul");
    
        todoAdd.append(todoList);
        inProgressAdd.append(progressList);
        doneAdd.append(doneList);
    };
};

