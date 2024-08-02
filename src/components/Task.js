import Component from "./Component";

const templateHtmlElement = document.createElement('template');

templateHtmlElement.innerHTML = `
    <style>
        li {
            background-color: #f9f9f9;
            padding: 10px;
            margin: 10px 0;
            border-left: 5px solid #5cb85c;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        span {
            flex: 1;
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

        button.taskButton {
            margin: 0 10px;
        }

        input[type="text"] {
            flex: 1;
            padding: 10px;
            font-size: 16px;
        }
    </style>

    <li>
        <span class="description"></span>
        <button class="editButton taskButton">Edit</button>
        <button class="deleteButton taskButton">Delete</button>
    </li>
`;

export default class Task extends Component {
    constructor(htmlContainer, description) {
        super(htmlContainer);
        this.description = description;
    }

    render() {
        this.renderUsingTemplate(templateHtmlElement);

        this.taskLi = this.shadowRoot.querySelector('li');

        this.descriptionSpan = this.shadowRoot.querySelector('.description');
        this.descriptionSpan.textContent = this.description;

        this.editButton = this.shadowRoot.querySelector('.editButton');
        this.deleteButton = this.shadowRoot.querySelector('.deleteButton');

        this.editButton.onclick = () => this.changeToEditMode();
        this.deleteButton.onclick = () => this.delete(); 
    }

    changeToEditMode() {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = this.description;

        this.taskLi.insertBefore(input, this.descriptionSpan);
        this.taskLi.removeChild(this.descriptionSpan);

        this.editButton.textContent = 'Save';
        this.editButton.onclick = () => this.updateTask(input);
    }

    updateTask(input) {
        // update description
        this.description = input.value;
        this.descriptionSpan.textContent = this.description;

        // update li element back to its initial form
        this.taskLi.insertBefore(this.descriptionSpan, input);
        this.taskLi.removeChild(input);

        this.editButton.textContent = 'Edit';
        this.editButton.onclick = () => this.changeToEditMode();

        // update in local storage
        const taskIndex = Array.from(this.parentElement.children).indexOf(this);
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks[taskIndex] = this.description;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    delete() {
        const taskIndex = Array.from(this.parentElement.children).indexOf(this);
        this.remove();
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

customElements.define('task-item', Task);