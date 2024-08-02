import Component from "./Component.js";

const templateHtmlElement = document.createElement('template');

templateHtmlElement.innerHTML = `
    <style>
       form {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        input[type="text"] {
            flex: 1;
            padding: 10px;
            font-size: 16px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #5cb85c;
            color: #fff;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #4cae4c;
        }
    </style>

    <form>
        <input type="text" placeholder="Enter a new task" required>
        <button type="submit">Add Task</button>
    </form>
`;

export default class TasksForm extends Component {
    constructor(htmlContainer, tasksList) {
        super(htmlContainer);
        this.tasksList = tasksList;
    }

    render() {
        this.renderUsingTemplate(templateHtmlElement);

        const form = this.shadowRoot.querySelector('form');
        const input = this.shadowRoot.querySelector('input');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const taskDescription = input.value;
            
            if (taskDescription) {
                this.tasksList.addTask(taskDescription);
                input.value = '';
            }
        }.bind(this));
    }
}

customElements.define('tasks-form', TasksForm);