const die1 = {
    side: 6,
    rollDie: function(){
        return Math.floor(1+Math.random() * this.side)
    }
}
console.log(die1.rollDie());

//Vi lägger till ett tärningsobjekt till arrayen dice för varje loop
const dice = [];
for(let i=0; i<5; i++){
    dice.push(
        {
            side: 6,
            currentValue: 1,
            //Metoden genererar ett random nummer 1 till 6 och sparar i egenskapen currentValue
            rollDie: function(){
                this.currentValue = Math.floor(1+Math.random() * this.side)
            }
        })
}
console.log(dice);
//Alla currentValue är 1, vi loggar värdena för att visa
for(let i=0; i<dice.length; i++){
    console.log(dice[i].currentValue);
}
//Vi slår alla tärningar och loggar det nya värdet
for(let i=0; i<dice.length; i++){
    dice[i].rollDie();
    console.log(dice[i].currentValue);
}
