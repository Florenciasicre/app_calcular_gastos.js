const formElement = document.querySelector('form'),
  button = document.getElementById('button'),
  download = document.querySelector('#donwload'),
  total = document.getElementById('total'),
  ul = document.getElementById('listElem'),
  peopleElem = document.getElementById('people'),
  information = [];
let sum = 0;

const saveData = () => {
  let formData = new FormData(formElement);
  information.push({
    name: formData.get('userName'),
    amount: formData.get('amount'),
    date: new Date().toString(),
  });
};

const calculation = (people, spend) => {
  sum += spend;
  console.log(sum);
  let divide = sum / people;
  return divide;
};

const addInformation = () => {
  const lastPerson = information.length,
    cur = information[lastPerson - 1];
  let li = document.createElement('li');
  li.classList.add('list-group-item');
  li.innerHTML = `${cur.name}: $${cur.amount}`;
  ul.appendChild(li);
  const personalPay = calculation(lastPerson, parseFloat(cur.amount));
  total.innerHTML = `Total: ${sum}.<br> Cada uno debe pagar ${personalPay}`;
  peopleElem.innerHTML = sum;
};

const downloaData = () => {
  const a = document.createElement('a'),
    file = new Blob([JSON.stringify(information)], {
      type: 'text/plain',
    });
  a.href = URL.createObjectURL(file);
  a.download = 'sesion.json';
  a.click();
};

const agregar = e => {
  e.preventDefault();
  saveData();
  addInformation();
};

button.addEventListener('click', agregar);
