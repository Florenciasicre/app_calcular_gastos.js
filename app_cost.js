const formElement = document.querySelector('form');
const button = document.getElementById('button');
const total = document.getElementById('total');
const list = document.getElementById('list_elements');
const peopleElem = document.getElementById('people');
const set1 = new Set();
let people = 0;
let sum = 0;

const upDate = (user, cost) => {
  if (!set1.has(user)) {
    set1.add(user);
    people++;
  }
  sum += cost;
  console.log(cost);
  let divide = (sum / people).toFixed(2);
  total.innerHTML = `Total: ${sum}.<br> Cada uno debe pagar ${divide}`;
  peopleElem.innerHTML = people;
};

const agregar = e => {
  e.preventDefault();
  let formData = new FormData(formElement);
  let userName = formData.get('userName');
  let amount = parseFloat(formData.get('amount'));
  console.log(amount);
  let p = document.createElement('p');
  p.innerHTML = `${userName}: $${amount}`;
  list.appendChild(p);
  upDate(userName, amount);
};

button.addEventListener('click', agregar);
