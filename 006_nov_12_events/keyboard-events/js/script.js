const body = document.body;
body.style.height = '100vh';

let light = 50;
//Vi kollar om en tangent blir nedtryckt. 
body.addEventListener('keydown', function(event){
    //Vi kollar egenskapen key, alltså vilken tangent som blev nedtryckt 
    // console.log(event.key);

    //Vi ändrar innerText på h1 till värdet av tangenten
    const h1 = document.querySelector('h1');
    h1.innerText = event.key;

    //Om vi trycker på ArrowUp eller ArrowDown så kommer lightness att ändras på body bakgrundsfärgen

    
    if(event.key === 'ArrowUp'){
        light++;
        if(light >= 100){
            light=100;
        }
        //light = light +1
    }
    else if(event.key === 'ArrowDown'){
        light--;
        if(light <= 0){
            light=0;
        }
    }
    console.log(light);
    body.style.backgroundColor = `hsl(140, 70%, ${light}%)`;
});

//Vi kollar om en tangent släpps från att varit nedtryckt i input-taggen och sätter sedan p - innerText till all text som finns i vår input
const input = document.querySelector('input');
input.addEventListener('keyup', function(event){
    const p = document.querySelector('p');
    p.innerText = input.value;
});

