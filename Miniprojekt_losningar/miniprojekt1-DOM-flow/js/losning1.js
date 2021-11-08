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
 
//Array med text som ska användas i tredje kolumnen
const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

//Tre section-element, ett för varje kolumn med lila border
for(let i=0; i<3; i++){
    //skapar ett section element med lila border och lägger till till diven
    const section = document.createElement('section');
    section.style.border = 'hsl(240, 70%, 80%) solid 10px';
    section.style.margin = '3rem';
    div.appendChild(section);

    //10 p-element för varje section
    //den här for loopen loopas tio gånger för varje loop i den 'yttre' for-loopen. 
    for(let j=0; j<10; j++){
        //Skapar ett p-element utan margin och lägger till till section
        const par = document.createElement('p');
        par.style.margin = '0';
        par.style.width = '3rem';
        section.appendChild(par);
        
        //Första section har inner text j (alltså 0-9)
        //När i är lika med 0 är vi i den första 'yttre' loopen 
        if(i===0){
            par.innerText = j;
            //OM j är 4 är bakgrundsfärgen lila
            if( j === 4){
                par.style.backgroundColor = 'hsl(240, 70%, 80%)';
            }
            //Om j är jämnt är bakgrundsfärgen svart och textfärgen vit
            else if(j % 2 === 0){
                par.style.backgroundColor = 'black';
                par.style.color = 'white';
            }
        }
        //Andra section har inner text 9-j (alltså 9-0) och centrerad text
        //när i är lika ned 1 är vi i den andra yttre loopen
        else if(i===1){
            par.innerText = 9-j;
            par.style.textAlign = 'center';

            //Om j är 1 (då inner text är 8 eftersom 9-1 är åtta) är bakgrundsfärgen lila
            if( j === 1){
                par.style.backgroundColor = 'hsl(240, 70%, 80%)';
            }
            //Om j är udda är bakgrundsfärgen svart och texten vit
            else if(j % 2 === 1){
                par.style.backgroundColor = 'black';
                par.style.color = 'white';
            }
        }
        //tredje section har inner text ett-tio, från arrayen numbers
        //annars är vi i den tredje och sista loopen
        else{
            par.innerText = numbers[j];
            par.style.textAlign = 'right';
            if( j === 5){
                par.style.backgroundColor = 'hsl(240, 70%, 80%)';
            }
            else if(j % 2 === 0){
                par.style.backgroundColor = 'black';
                par.style.color = 'white';
            }
        }
        
        
    }
}
