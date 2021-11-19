//Comparisons
console.log(1<10);
console.log(10<1);
console.log(1 !== 2); //ett är inte lika med två

//Om jämförelsen är sann händer koden inuti cirly brackets
//Om den är falsk hoppas koden över
if(1<10){
    console.log('ett är mindre än 10');
}
else if(1<100){
    console.log('det här kommer aldrig hända trots att det är sant eftersom det tidigare if-statement var sant');
}

//Är det här ett nummer 
console.log( isNaN(2) );
console.log( !isNaN(2) );
console.log( isNaN('g') );
console.log( !isNaN('g') );


//logga 1 till 100
//byt ut de tal som är delbara med 3 mot fizz
//Byt ut de tal som är delbara med 5 mot buzz
//de som går att dela med 3 och 5 till buzzfizz
for(let i=1; i<=100; i++){
    
    if(i%3 === 0 && i%5 === 0){
        console.log(i, 'buzzfizz');
        break; //Gör så att for-loopen avslutas
    }
    else if(i%3 === 0){
        console.log(i, 'fizz')
    }
    else if(i%5 === 0){
        console.log(i, 'buzz');
    }
    else{
        console.log(i);
    }
}

