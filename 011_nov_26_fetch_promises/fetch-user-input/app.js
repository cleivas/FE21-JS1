//User input variables
const btn = document.querySelector('button');

//Make the button clickable
btn.addEventListener( 'click', 
    function(){
        const txtInput = document.querySelector('input');
        //Send input value to the function searchBeer
        searchBeer( txtInput.value );
    }
);

//In searchBeer we take the user input and add it to the url
//We then use the url in fetch to request the data
function searchBeer(foodSearch){
    const url = `https://api.punkapi.com/v2/beers?food=${foodSearch}`;

    fetch(url).then(
        function(response){
            // console.log(response);
            return response.json();
        }
    ).then(
        function(data){
            //Passing the data to displayBeer
            displayBeer(data);
        }
    )
}

//DisplayBeer accepts an array of objects
function displayBeer(beerArray){
    console.log(beerArray);
    const div = document.querySelector('div');
    const divEl = document.querySelectorAll('div *');

    //We remove all elements in our div
    for(let i = 0; i<divEl.length; i++){
        const el = divEl[i];
        el.remove();
    }

    //We add new elements in our div
    //Displaying the name and tag line of each beer
    for(let i=0; i<beerArray.length; i++){
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        h1.innerText = beerArray[i].name;
        p.innerText = beerArray[i].tagline;

        div.appendChild(h1);
        div.appendChild(p);
    }
}
