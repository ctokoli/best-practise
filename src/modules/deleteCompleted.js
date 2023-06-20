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

export default deleteCompleted;