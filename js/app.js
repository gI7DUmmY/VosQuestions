const form = document.querySelector('form');
const table = document.querySelector('tbody');
const btnSub = document.querySelector('button[type="submit"]');
const btnClr = document.querySelector('button.clear');

// génère question dans tableau
const template = question => {
  const html = `
    <tr><td>${question}<i class="small material-icons del">delete_outline</i></td></tr>
  `;
  table.innerHTML += html;
};

// submit question
form.addEventListener('submit', e => {
  e.preventDefault();
  if (form.newQuestion.value.trim() != '') template(form.newQuestion.value);
  form.reset();
});

btnSub.addEventListener('click', () => {
  if (form.newQuestion.value.trim() != '') template(form.newQuestion.value);
  form.reset();
  btnSub.blur();
});

// toggle question répondue ou suppr question
table.addEventListener('click', e => {
  if (!e.target.classList.contains('del')) e.target.classList.toggle('reponse');
  if (e.target.classList.contains('del')) e.target.parentElement.parentElement.remove();
});

// vider tableau des questions
btnClr.addEventListener('click', () => table.innerHTML = '');
