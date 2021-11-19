const frukter = ['banan', 'kiwi', 'dragon fruit', 200, 10, 'mango', 'äpple', 'päron','papaya', 'lichi', 'guava'];

console.log(frukter[0]);
console.log(frukter[1]);
console.log(frukter);

for(let i=0; i<frukter.length; i++){
    console.log(frukter[i])
}

//Omvänd ordning och utan nummer
for(let i=frukter.length-1; i>=0; i--){
    
    //Om innehållet i arrayen på index i inte är ett nummer skriver vi ut värdet till konsolen
    if(isNaN(frukter[i])){
        console.log(frukter[i]);
    }

}

//Resulterar i NaN eftersom vi försöker göra en matematisk uträkning med text
console.log(frukter[0] * frukter[1]);