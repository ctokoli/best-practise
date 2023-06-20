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

export default editItem;