//Variabler övning 1
const body = document.body;
const h1 = document.createElement('h1');

h1.innerText = 'lite text';
h1.style.color = 'hotpink';
body.appendChild(h1);

//Utan variabler hade det sett ut såhär
document.body.appendChild(document.createElement('h1') );
document.querySelectorAll('h1')[1].innerText = 'lite mer text';
document.querySelectorAll('h1')[1].style.color = 'green';



//for loop
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

for(let i=0; i<10; i++){
    console.log(i);
}

//Skapa fem numrerade listor med tre list items i varje
for(let i=0; i<5; i++ ){
    const list = document.createElement('ol');
    document.body.appendChild(list);

    for(let j=0; j<3; j++){
        const listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.innerText = `Lista ${i+1}`;
    }
}