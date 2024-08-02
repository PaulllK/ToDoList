import Component from "./Component.js";
import Task from "./Task.js";

const templateHtmlElement = document.createElement('template');

templateHtmlElement.innerHTML = `
    <style>
        ul {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .hidden {
            display: none;
        }
    </style>

    <ul>
        <slot></slot>
    </ul>
`;

export default class TasksList extends Component {
    constructor(htmlContainer) {
       super(htmlContainer);
    }

    render() {
        this.renderUsingTemplate(templateHtmlElement);
        this.loadTasks();
    }

    loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        if (tasks.length === 0) {
            this.classList.add('hidden');
        } else {
            tasks.forEach(taskDescription => { 
                const task = new Task(this, taskDescription);
                task.render();
            });
        }
    }

    addTask(taskDescription) {
        // add task to dom
        const task = new Task(this, taskDescription);
        task.render();
        this.classList.remove('hidden');

        // save task to local storage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskDescription);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

customElements.define('tasks-list', TasksList);