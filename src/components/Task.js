import Component from "./Component";

export default class Task extends Component {
    constructor(htmlContainer, description) {
        super(htmlContainer, 'li');
        this.description = description;

        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = this.description;
        this.htmlElement.appendChild(descriptionSpan);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('taskButton');
        this.htmlElement.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('taskButton');
        this.htmlElement.appendChild(deleteButton);
        

        editButton.onclick = () => this.changeToEditMode(descriptionSpan, editButton);
        deleteButton.onclick = () => this.delete(); 
    }

    changeToEditMode(descriptionSpan, editButton) {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = this.description;

        this.htmlElement.insertBefore(input, descriptionSpan);
        this.htmlElement.removeChild(descriptionSpan);

        editButton.textContent = 'Save';
        editButton.onclick = () => this.updateTask(input, descriptionSpan, editButton);
    }

    updateTask(input, descriptionSpan, editButton) {
        // change li element back to its initial form
        this.description = input.value;
        descriptionSpan.textContent = this.description;

        this.htmlElement.insertBefore(descriptionSpan, input);
        this.htmlElement.removeChild(input);

        editButton.textContent = 'Edit';
        editButton.onclick = () => this.changeToEditMode(descriptionSpan, editButton);

        // update in local storage
        const taskIndex = Array.from(this.htmlContainer.children).indexOf(this.htmlElement);
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks[taskIndex] = this.description;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    delete() {
        const taskIndex = Array.from(this.htmlContainer.children).indexOf(this.htmlElement);
        this.htmlElement.remove();
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(taskIndex, 1);

        if (tasks.length === 0)
            this.htmlContainer.classList.add('hidden');

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}