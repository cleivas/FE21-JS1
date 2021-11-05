//Deklaration av variabel. Värdena behöver inte vara av samma datatyp
let trees = ['Ek', 'Al', 'Julgran', 'Birch', 7, 'Tall', 'Bonsai']; 
console.log(typeof trees, trees, trees.length);

trees[4] = 'kastanj';

//Loggar varje värde för sig i konsolen
 for(let i = 0; i<trees.length; i++){
    console.log(trees[i]);
 }


 const body = document.querySelector('body');
 let colors = ['lila', 'grön', 'hotpink', 'blå'];

for(let i=0; i<colors.length; i++){
    const h1 = document.createElement('h1');
    body.appendChild(h1);
    h1.innerText = colors[i];

    //vi kollar om värdet i colors[i] är lika med hotpink och isåfall använder vi det värdet för att bestämma förgen på just det h1-elementet
    if(colors[i] === 'hotpink'){
        h1.style.color = colors[i];
    }
    else if(colors[i] === 'lila'){
        h1.style.color = 'purple';
    }
}
