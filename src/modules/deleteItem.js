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

export default deleteItem;