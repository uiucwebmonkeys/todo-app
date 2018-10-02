const inputField = document.querySelector('input');
const todos = [];
let count = 0;

const defaultTemplate = `
  <li data-id="{{id}}" class="{{completed}}">
    <div class="todo-item">
      <input class="toggle" type="checkbox">
      <label>{{title}}</label>
      <button class="destroy">Remove</button>
    </div>
  </li>
`;

function toggleDone(evt) {
  console.log(evt);
}

function updateList() {
  let html = '';
  todos.forEach(t => {
    let template = defaultTemplate;
    const c = t.completed ? 'complete' : 'not-complete';
    template = template.replace('{{id}}', t.id);
    template = template.replace('{{completed}}', c);
    template = template.replace('{{title}}', t.title);
    html += template;
  });

  document.querySelector('.todo-list').innerHTML = html;
}

function handleNewSubmission(evt) {
  const { value } = inputField
  inputField.value = '';

  if (value === '') return;
  todos.push({
    id: count,
    completed: false,
    title: value,
  });

  count += 1;
  updateList();
}

inputField.addEventListener("keyup", evt => {
  if (evt.keyCode === 13) {
    handleNewSubmission(evt);
  }
});
