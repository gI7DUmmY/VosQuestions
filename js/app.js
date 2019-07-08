const form = document.querySelector('form');
const table = document.querySelector('tbody');
const btnSub = document.querySelector('button[type="submit"]');
const btnClr = document.querySelector('button.clear');

// génère question dans tableau
const template = question => {
  const html = `
    <tr><td>${question}<i class="small material-icons del no-print">delete_outline</i></td></tr>
  `;
  table.innerHTML += html;
  localStorage.setItem('liste', table.innerHTML);
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
  if (e.target.classList.contains('del')) {
    e.target.parentElement.parentElement.remove();
    localStorage.setItem('liste', table.innerHTML);
  };
});

// vider tableau des questions
btnClr.addEventListener('click', () => {
  table.innerHTML = '';
  localStorage.setItem('liste', table.innerHTML);
});

// chargement des questions avec localStorage
if (localStorage.getItem('liste')) {
  if (localStorage.getItem('liste').length > 0) table.innerHTML = localStorage.getItem('liste');
}
