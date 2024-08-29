console.log('dom');

/* =========== WINDOW =========== */

// DOM
window.document;

// Navegar pelo histórico do usuário
window.history;

// API de localização do navegador
window.location;

// Armazenamento local em cache
window.localStorage;
window.sessionStorage;

// alert('Olá mundo');

console.log('Depois do alert');

const interval = setTimeout(function () {
  console.log('Passou 1 segundo');
}, 1000);

// clearInterval(interval);

// Eventos
/* addEventListener('click', function () {
  console.log('Você clicou no botão');
}); */

/* ============ DOCUMENT ============= */

const button1 = document.getElementsByTagName('button')[0];
const button2 = document.getElementById('button-2');
const button3 = document.querySelector('.button-3');
const button4 = document.querySelector('[title="button-4"]');
const container = document.getElementById('container');

// console.log(container.parentNode);
// console.log(container.hasChildNodes());
// console.log(container.childNodes);
// console.log(container.firstElementChild);

function createButton(content) {
  const button5 = document.createElement('button');
  button5.type = 'button';
  button5.textContent = content;

  container.appendChild(button5);
}

createButton('Botão 5');

// container.removeChild(button3);
// container.innerHTML = 'Olá mundo';
// container.insertBefore(button3, button2);

button1.addEventListener('click', function () {
  console.log('Olá mundo');
});
