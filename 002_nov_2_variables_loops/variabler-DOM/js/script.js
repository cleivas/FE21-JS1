// Vi deklarerar en variabel som heter h1 och skapar ett h1-element som vi förvarar i den variabeln
const h1 = document.createElement('h1');
console.log(typeof h1, h1);

// Vi deklarerar en variabel som heter body där förvarar body elementet som vi hämtar från DOMen
const body = document.querySelector('body');
console.log(body);

//Vi lägger till h1-elementet till body-elementet
body.appendChild(h1);

//Vi ger h1-elementet ett textinnehåll
h1.innerText = 'VARIABLER!';

let h1Text = 'Den här texten är sparad i en variabel';
h1.innerText = h1Text;


//Vi lägger till en onumrerad lista med 5 stycken list items

//Vi skapar ett ul-element och förvarar det i variabeln ul
const ul = document.createElement('ul');
body.appendChild(ul);

//vi skapar första li-elementet och förvarar i variaben li1
const li1 = document.createElement('li');
li1.innerText = 'Item 1';
ul.appendChild(li1);

// vi copy pastear koden ovan och byter ut lite siffror för följande 4 li-element
const li2 = document.createElement('li');
li2.innerText = 'Item 2';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Item 3';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Item 4';
ul.appendChild(li4);

const li5 = document.createElement('li');
li5.innerText = 'Item 5';
ul.appendChild(li5);