const body = document.querySelector('body');

//Headers
for(let i=0; i<5; i++){
    //Skapar ett h1-element
    const h1 = document.createElement('h1');
    h1.innerText = `Rad ${i+1}`;
    h1.style.fontSize = `${i*10+10}px`
    h1.style.textAlign = 'center';

    //Sätter bakgrundsfärgen
    let hue = i*20+120;
    h1.style.backgroundColor = `hsl(${hue}, 90%, 85%)`;
    h1.style.color = `hsl(240, 90%, 70%)`;

    //Lägger till elementet till body
    body.appendChild(h1);
}

//Skapar en div med black border och gör till flex container
const div = document.createElement('div');
div.style.border = 'black solid 1px';
div.style.display = 'flex';
div.style.justifyContent = 'space-evenly';
body.appendChild(div);

//Skapar tre sections med lila border
for(let i=0; i<3; i++){
    const s = document.createElement('section');
    s.style.border = 'hsl(240, 70%, 80%) solid 10px';
    s.style.margin = '3rem';
    s.style.width = '3rem';
    div.appendChild(s);
}
//Hämtar alla sections
const sections = document.querySelectorAll('section');

//Skapar tio p-element till första section
for(let i=0; i<10; i++){
    const par = document.createElement('p');
    par.innerText = i;
    par.style.margin = '0';
    
    //Lägger till p-elementet till fösta section
    sections[0].appendChild(par);

    //Är i lika med fyra blir bakgrundsfärgen lila
    if( i === 4){
        par.style.backgroundColor = 'hsl(240, 70%, 80%)';
    }
    //Är i jämnt sätts bakgrundsfärgen till svart och texen till vitt
    else if(i % 2 === 0){
        par.style.backgroundColor = 'black';
        par.style.color = 'white';
    }
    
}

//Skapar tio p-element till andra section
for(let i=0; i<10; i++){
    const par = document.createElement('p');
    par.innerText = 9-i;
    par.style.margin = '0';
    par.style.textAlign = 'center';

    //Lägger till till andra section
    sections[1].appendChild(par);

    //Bestämmer bakgrundsfärg
    if( i === 1){
        par.style.backgroundColor = 'hsl(240, 70%, 80%)';
    }
    else if(i % 2 === 1){
        par.style.backgroundColor = 'black';
        par.style.color = 'white';
    }
    
}

//Array med text som ska användas som innerText
const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

//Tio p-element till tredje section
for(let i=0; i<10; i++){
    const par = document.createElement('p');
    par.innerText = numbers[i];
    par.style.margin = '0';
    par.style.textAlign = 'right';
    sections[2].appendChild(par);

    //Bakgrundsfärgen
    if( i === 5){
        par.style.backgroundColor = 'hsl(240, 70%, 80%)';
    }
    else if(i % 2 === 0){
        par.style.backgroundColor = 'black';
        par.style.color = 'white';
    }
}