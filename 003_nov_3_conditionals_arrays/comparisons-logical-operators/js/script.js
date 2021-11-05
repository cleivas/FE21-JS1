let x = 0;
let y = 0;
let result = x == y;
console.log('==', result);

result = x === y;
console.log('===', result);

x = '0';
result = x === y;
console.log('===', result);

x = 10;
y = 11;
result = x!=y;
console.log('!=', result);

x = 10;
y = 10;
result = x!==y;
console.log('!==', result);

//Funkar även med text
x = 'text';
y = 'text';
result = x==y;
console.log('text med ===', result);

x = 7;
y = '7';
result = x===y;
console.log('string och number med ===', result);

x= 10;
y = 100;
result = x<y;
console.log('<', result)

result = x>y;
console.log('>', result)

x = 50;
y = 50;
result = x<=y;
console.log('<=', result);

result = x>=y;
console.log('>=', result);

x = 15;
y = 10;
result = x<y && x>y;
console.log('&&', result);

result = x<y || x>y;
console.log('||', result);

result = !(x>y);
console.log('!', result)

//Ett h1-element 
const body = document.querySelector('body');
const h1 = document.createElement('h1');
body.appendChild(h1);
h1.innerText = result;
