const form = document.querySelector('form');
const table = document.querySelector('tbody');
console.log(table);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(form.newQuestion.value);
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const question = document.createTextNode(form.newQuestion.value);
  td.appendChild(question);
  tr.appendChild(td);
  table.appendChild(tr);
  form.reset();
});
