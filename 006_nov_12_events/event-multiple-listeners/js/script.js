const div = document.querySelector('div');
//Vi har en event listener på en div som innehåller 5 knappar
div.addEventListener('click', function(event){
    //Vi loggar html/DOM-elementet vi klickade på
    console.log(event.target);

    //VI kollar om det elementet är en knapp
    if(event.target.tagName === 'BUTTON'){
        //Endast då ändrar vi texten i p
        const p = document.querySelector('p');
        p.innerText = event.target.innerText;
    }
});