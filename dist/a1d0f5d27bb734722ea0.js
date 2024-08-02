import './index.css';
import TasksList from "./components/TasksList.js";
import Container from './components/Container.js';
import TasksForm from './components/TasksForm.js';
document.addEventListener('DOMContentLoaded', function () {
  var body = document.body;
  var container = new Container(body);
  container.render();
  container.appendContent('<h1>Task List</h1>');
  var tasksList = new TasksList(body);
  tasksList.render();
  var tasksForm = new TasksForm(container, tasksList);
  tasksForm.render();
});