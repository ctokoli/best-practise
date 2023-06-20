import './styles/style.css';
import addItem from './modules/addItem.js';
import showTodo from './modules/render.js';
import editItem from './modules/editTodo.js';
import completeTodo from './modules/completed.js';
import deleteItem from './modules/deleteItem.js';
import deleteCompleted from './modules/deleteCompleted.js';

const todoList = JSON.parse(localStorage.getItem('formdata')) || [];
const sortTodoList = todoList.sort((a, b) => a.index - b.index);

showTodo(sortTodoList);
addItem(todoList);
editItem(sortTodoList);
completeTodo(sortTodoList);
deleteItem(todoList);
deleteCompleted(todoList);
