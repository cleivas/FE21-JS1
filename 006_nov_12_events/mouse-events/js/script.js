const knapp = document.querySelector('button');
const par = document.querySelector('p');

//Event listener för musklick
knapp.addEventListener('click', function(event){
    //event kan vi döpa till vad som helst. Det är som en variabel. Det kommer innehålla event-objektet
    console.log(event);

    //Ändrar texten på paragrafen
    par.innerText = 'NU är knappen klickad!'
});

//Mouseenter och mouseleave
document.body.style.backgroundColor = 'skyblue';
par.addEventListener('mouseenter', function(){
    //När muspekaren entrar paragrafen blir bakgrundsfärgen hotpink
    par.style.backgroundColor = 'hotpink';
});

par.addEventListener('mouseleave', function(){
    //När muspekaren lämnar paragrafen blir bakgrundsfärgen genomskinlig
    par.style.backgroundColor = 'transparent';
});

//Mouse move - alltså när muspekaren rör på sig
const body = document.body;
body.style.height = '100vh'; //Så att bodyn tar upp hela höjden av viewporten

body.addEventListener('mousemove', function(event){
    //X-positionen av muspekaren bestämmer hue-värdet i bakgrundsfärgen
    console.log(event.clientX);
    const hue = event.clientX;
    
    body.style.backgroundColor = `hsl(${hue}, 80%, 60%)`;
});
