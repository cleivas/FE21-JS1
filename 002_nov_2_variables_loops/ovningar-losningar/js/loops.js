//Övning 4
for(let i = 50; i > -1; i = i-5){
    console.log(i);
}

// Övning 5
/*
Ökningen
0 1 4 9 16 25
1 2 3 4  5  6
0 1 2 3  4  5
*/
for(let i = 0; i<11; i++){
    const result = i*i;
    console.log( result );
}

//Övning 7 och 8 
const body = document.querySelector('body');
const ol = document.createElement('ol');
body.appendChild(ol);

for(let i=0; i<10; i++){
    const li = document.createElement('li');
    ol.appendChild(li);

    const tjocklek = i+1;
    li.style.border = `${tjocklek}px solid green`;
}

//övning 8
const lis = document.querySelectorAll('li');
console.log(lis);

for(let i=0; i<10; i++){
    const light = 100-(i*10);
    console.log('light: ', light);
    lis[i].style.backgroundColor = `hsl(0, 0%, ${light}%)`;
}