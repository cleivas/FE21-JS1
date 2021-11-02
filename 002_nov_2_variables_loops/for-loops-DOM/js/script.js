// skapar ett ul-element och ägger till till body-elementet
const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);

// Skapar 5 li element och lägger till i ul-elementet

for(let index = 0; index<100; index++ ){

    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = `Item ${ index +1 }`;
}

//Ändrar bakgrundsfärg på alla element
const allLi = document.querySelectorAll('li');
console.log(allLi);
console.log(allLi.length);

//Gör alla elements bakgrundsfärg till blå
// for(let i = 0; i < allLi.length; i++ ){
//     allLi[i].style.backgroundColor = 'blue';
// }

//Ändrar bakgrundsfärgen från röd till röd över alla nyanser däremellan
for(let i = 0; i < allLi.length; i++ ){
    let hue = (360 / allLi.length) * i;

    console.log('hue: ', hue);
    allLi[i].style.backgroundColor = `hsl(${hue}, 100%, 80%)`;
}