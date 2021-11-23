const ar = [1, 2, 3, 4, 5];
console.log(ar);
ar.pop();
console.log(ar);

const string = 'det här är en string';
console.log(string);

//en array med spelarobjekt
const players = [
    {
        name: 'Lina',
        score: 0
    },
    {
        name: 'Benny',
        score: 0
    },
    {
        name: 'Forqan',
        score: 0
    },
    {
        name: 'Natha',
        score: 0
    }, 
    {
        name: 'Lian',
        score: 0
    }
]
console.log(players);

//Forqan blir banned så den spelaren behöver tas bort
console.log(players[0].name )
let banIndex = 0;

for(let i=0; i<players.length; i++){
    if( players[i].name === 'Forqan'){
        players.splice(i, 1);
        break;
    }
}
console.log(players);

