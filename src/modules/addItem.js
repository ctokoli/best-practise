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

export default addItem;