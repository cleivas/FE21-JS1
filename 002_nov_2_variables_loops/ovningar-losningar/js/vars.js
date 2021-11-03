const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerText = 'Vi lär oss mycket idag!';

body.appendChild(h1);

const bCol = 'hsl(120, 80%, 80%)';
const tCol = 'white';

h1.style.backgroundColor = bCol;
h1.style.color = tCol;

const thickness = '10px';
const type = 'dotted';
const col = 'blue';

h1.style.border = `${thickness} ${type} ${col}`;
// h1.style.border = thickness + ' ' + type + ' ' + col;

const ol = document.createElement('ol');
body.appendChild(ol);

const li1 = document.createElement('li');
li1.innerText = 'There was a man ...';
ol.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'And there was a woman ...';
ol.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'And there was another man ...';
ol.appendChild(li3);