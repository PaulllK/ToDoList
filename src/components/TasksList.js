import Component from "./Component.js";
import Task from "./Task.js";

export default class TasksList extends Component {
    constructor(htmlContainer) {
       super(htmlContainer, 'ul');
       this.htmlElement.classList.add('container');
       this.loadTasks();
    }

    loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        if (tasks.length === 0) {
            this.htmlElement.classList.add('hidden');
        } else {
            tasks.forEach(taskDescription => { new Task(this.htmlElement, taskDescription); });
        }
    }

    addTask(taskDescription) {
        // add task to dom
        const task = new Task(this.htmlElement, taskDescription);
        this.htmlElement.classList.remove('hidden');

        // save task to local storage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskDescription);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}