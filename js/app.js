const form = document.querySelector('form');
const table = document.querySelector('tbody');
const efface = document.querySelectorAll('.del');
console.log(table);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(form.newQuestion.value);
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const question = document.createTextNode(form.newQuestion.value);
  td.appendChild(question);
  td.innerHTML += '<i class="small material-icons del">delete_outline</i>';
  tr.appendChild(td);
  table.appendChild(tr);
  form.reset();
});

table.addEventListener('click', e => {
  console.log(e.target);
  e.target.classList.toggle('reponse');
})

const poubelles = Array.from(efface);
poubelles.forEach(poubelle => {
  poubelle.addEventListener('click', (e) => {
    poubelle.parentNode.removeChild(e.target);
  })
});