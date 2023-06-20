const fetch = () => {
  let tasklist = '';
  if (localStorage.getItem('tasklist')) {
    tasklist = JSON.parse(localStorage.getItem('tasklist'));
  } else {
    tasklist = [];
  }
  return tasklist;
};

export default fetch;