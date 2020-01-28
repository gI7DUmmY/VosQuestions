const form = document.querySelector('form');
const table = document.querySelector('tbody');
const btnSub = document.querySelector('button[type="submit"]');
const btnClr = document.querySelector('#clear');

// génère question dans tableau
const template = question => {
  const html = `
    <tr>
      <td>
        ${question}
        <i class="small
          material-icons
          del
          no-print
          orange-text
          text-accent-2"
        >
          delete_outline
        </i>
      </td>
    </tr>
  `;
  table.innerHTML += html;
};

// add question
const add = question => {
  if (question.trim() != '') template(question);
  localStorage.setItem('liste', table.innerHTML);
  btnClr.classList.remove('disabled');
  form.reset();
};

// submit form
form.addEventListener('submit', e => {
  e.preventDefault();
  add(form.newQuestion.value);
});

btnSub.addEventListener('click', () => {
  add(form.newQuestion.value);
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
  const r = confirm('Vider le tableau ?');
  if (r === true) {
    table.innerHTML = '';
    localStorage.setItem('liste', table.innerHTML);
    btnClr.classList.add('disabled');
    form.reset();
  }
});

// chargement des questions avec localStorage
if (localStorage.getItem('liste')) {
  if (localStorage.getItem('liste').length > 0) table.innerHTML = localStorage.getItem('liste');
} else btnClr.classList.add('disabled');
