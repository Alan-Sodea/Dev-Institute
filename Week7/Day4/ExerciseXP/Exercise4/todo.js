class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, complete: false });
    }

    markTaskAsComplete(taskName) {
        const task = this.tasks.find(t => t.task === taskName);
        if (task) {
            task.complete = true;
        }
    }

    listTasks() {
        return this.tasks.map(t => `${t.task} - ${t.complete ? 'Complete' : 'Incomplete'}`).join('\n');
    }
}

export default TodoList;
