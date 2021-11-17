//En tärning som är ett objekt sparat i en variabel
const die = {
    sides: 6,
    currentSide: 1,
    roll: function(){
        this.currentSide = Math.ceil(Math.random()*this.sides);
    }
}
//Default-värdet av currentSide är ett
console.log(die.currentSide);

//Efter att vi kastat tärningen får currentSide ett nytt värde
die.roll();
console.log(die.currentSide);

//Vi skapar en tom array där vi sedan sparar ner 5 stycken tärningsobjekt, ett i varje element
const dice = [];
for(let i=0; i<5; i++){
    dice.push(
        {
            sides: 6,
            currentSide: 1,
            roll: function(){
                this.currentSide = Math.ceil(Math.random()*this.sides);
            }
        }
    )
}
console.log(dice);

//Vi går igenom alla enskilda tärningsobjekt och 'kastar' dem. När vi sedan loggar arrayn ser vi att alla currentValue har fått andra värden
for(let i=0; i<dice.length; i++){
    dice[i].roll();
}
console.log(dice);

let person = {
    name: 'Sixten Faceplant',
    email: 'sixten.faceplant@zocom.se',
    role: 'ninjah',
    adress: {
        street: 'Karatevägen 3',
        zip: '41477',
        city: 'Kablam City'
    }
}

let person = { 
    name: 'sixten',
    email: 'sixten@zocom.se', 
    role: 'ninjah',
    age: 32 
}