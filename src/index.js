import './index.css';

import TasksList from "./components/TasksList.js";
import Container from './components/Container.js';
import TasksForm from './components/TasksForm.js';

document.addEventListener('DOMContentLoaded', function() {

    const body = document.body;

    const container = new Container(body);
    container.render();

    container.appendContent('<h1>Task List</h1>');

    const tasksList = new TasksList(body);
    tasksList.render();

    const tasksForm = new TasksForm(container, tasksList);
    tasksForm.render();
});
