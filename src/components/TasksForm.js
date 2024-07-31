import Component from "./Component.js";

export default class TasksForm extends Component {
    constructor(htmlContainer, tasksList) {
        super(htmlContainer, 'form');
        this.tasksList = tasksList;

        // add input element
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter a new task';
        input.required = true;

        // add button element
        const button = document.createElement('button');
        button.type = 'submit';
        button.textContent = 'Add Task';

        // Append the input and button to the form element
        this.htmlElement.appendChild(input);
        this.htmlElement.appendChild(button);

        this.htmlElement.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const taskDescription = input.value;
            
            if (taskDescription) {
                this.tasksList.addTask(taskDescription);
                input.value = '';
            }
        }.bind(this));
    }
}