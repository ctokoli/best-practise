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

const addItem = (todoData) => {
    const button = document.querySelector('.add');
    const textInput = document.querySelector('.text');
    button.addEventListener('click', () => {
      const len = todoData.length;
      if (textInput.value !== '') {
        const todoItem = {
          index: len + 1,
          description: textInput.value,
          completed: false,
        };
        todoData.push(todoItem);
        localStorage.setItem('formdata', JSON.stringify(todoData));
        window.location.reload();
      }
    });
  };


  const completeTodo = (sortTodoList) => {
    const updateIndex = (index, value, name) => {
      sortTodoList.forEach((todo) => {
        if (todo.index === parseInt(index, 10)) {
          todo.completed = value;
          name.setAttribute('data-bool', value);
          localStorage.setItem('formdata', JSON.stringify(sortTodoList));
        }
      });
    };
    document.querySelectorAll('.checkbox').forEach((element) => {
      const textTag = element.nextElementSibling;
      const ParentE = element.parentElement.parentElement;
      const getIndex = ParentE.getAttribute('data-index');
      element.addEventListener('change', () => {
        if (element.checked === true) {
          updateIndex(getIndex, true, ParentE);
          textTag.classList.add('checked');
        } else {
          updateIndex(getIndex, false, ParentE);
          textTag.classList.remove('checked');
        }
      });
    });
  };

  const deleteCompleted = (todoList) => {
    document.querySelector('.clear').addEventListener('click', () => {
      todoList = todoList.filter((todo) => todo.completed !== true);
      todoList.forEach((value, indd) => {
        value.index = indd + 1;
      });
      localStorage.setItem('formdata', JSON.stringify(todoList));
      window.location.reload();
    });
  };
  
  const deleteItem = (todoList) => {
    document.querySelectorAll('.delete').forEach((element) => {
      element.addEventListener('click', () => {
        const getIndex = element.parentElement.getAttribute('data-index');
        todoList = todoList.filter((todo) => todo.index !== parseInt(getIndex, 10));
        todoList.forEach((value, indd) => {
          value.index = indd + 1;
        });
        localStorage.setItem('formdata', JSON.stringify(todoList));
        window.location.reload();
      });
    });
  };

  const editItem = (sortTodoList) => {
    const updateIndex = (index, value) => {
      sortTodoList.forEach((todo) => {
        if (todo.index === parseInt(index, 10)) {
          todo.description = value;
          localStorage.setItem('formdata', JSON.stringify(sortTodoList));
        }
      });
    };
  
    document.querySelectorAll('.item-input').forEach((element) => {
      element.addEventListener('click', () => {
        const ParentE = element.parentElement.parentElement;
        ParentE.style.backgroundColor = 'lightgoldenrodyellow';
        element.style.outline = '';
        const getIndex = ParentE.getAttribute('data-index');
        const inputVal = element.innerHTML;
        element.onblur = () => {
          ParentE.style.backgroundColor = '';
          const newValue = element.innerHTML;
          if (inputVal !== newValue) {
            updateIndex(getIndex, newValue);
          }
        };
      });
    });
  };

  const showTodo = (sortTodoList) => {
    const listContainer = document.querySelector('.list-items');
    let placeholder = '';
    listContainer.innerHTML = '';
    sortTodoList.forEach((todo) => {
      placeholder += `
            <li class="item-list"  data-index="${todo.index}" data-bool="${todo.completed}">
                <div class="list-cont">
                    <input type="checkbox" class="checkbox" name="checkbox" ${todo.completed === true ? 'checked' : ''}>
                    <p class="item-input ${todo.completed === true ? 'checked' : ''}" contenteditable ="true">${todo.description}</p>
                </div>
                <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
            </li>
            `;
    });
  
    listContainer.innerHTML = placeholder;
  };
  
  
