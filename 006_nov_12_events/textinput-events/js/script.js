// const btn = document.querySelector('button');
// const btn = document.querySelector('#btn');
//har vi flera knappar kan vi identifiera dom genom att ge dem ett id och hitta dem genom id:t
const btn = document.getElementById('btn');

//när vi klickr på knappen hämtas innehållet i textinputen
btn.addEventListener('click', function(){
    const input = document.querySelector('input');
    const p = document.querySelector('p');

    p.innerText = input.value;
    input.value = '';
});