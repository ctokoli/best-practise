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

export default completeTodo;