const div = document.querySelector('div');
div.addEventListener('click', function(){
    alert('DIV');
});

const art = document.querySelector('article');
art.addEventListener('click', function(){
    alert('ARTICLE');
});

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    alert('BUTTON');
});

const sec = document.querySelector('section');
sec.addEventListener('click', function(){
    alert('SECTION');
});

const par = document.querySelector('p');
par.addEventListener('click', function(event){
    alert('PARAGRAPH');

    //Nedan förhindrar event bubblandet så att endast en alert kommer upp, den som tillhör just den här eventlyssnaren
    event.stopPropagation();
});