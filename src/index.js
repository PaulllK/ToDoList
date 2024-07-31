import './index.css';

import TasksList from "./components/TasksList.js";
import Container from './components/Container.js';
import TasksForm from './components/TasksForm.js';

document.addEventListener('DOMContentLoaded', function() {

    const body = document.body;

    const container = new Container(body);
    container.appendContent('<h1>Task List</h1>');

    const tasksList = new TasksList(body);

    const tasksForm = new TasksForm(container.htmlElement, tasksList);
});
