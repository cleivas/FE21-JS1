//vi multiplicerar x och y och returnerar resultatet av uträkningen
function mult(x, y){
    return x*y;
}

//Loggar produkten av 6x6
console.log( mult(6, 6) );

const result = mult(234, 23);
//loggar produkten av 234x23
console.log(result);

//Funktionen tar ett argument och kollar om det är jämnt 
function isEven(x){
    if( x%2 === 0){
        return true;
    }
    else{
        return false;
    }
}

//Nedan funktion gör exakt samma som ovan men på ett förenklat sätt
/*
function isEven(x){
    return x%2 === 0;
}
*/

console.log( isEven(3) ); //false
console.log( isEven(322) ); //true

//Hitta minsta värdet av alla argument
function getMin(){
    //loggar arrayen arguments och längden på arrayen
    console.log(arguments, arguments.length)

    //En variabel med största möjiga värde
    let minVal = Infinity;
    for(let i=0; i<arguments.length; i++){
        // console.log(arguments[i]);
        //Om värdet av det aktuella argumentet är mindre än minVal sparar vi ner det värdet i minVal
        if(arguments[i] < minVal){
            minVal = arguments[i];
        }
    }

    return minVal;
}

const minValResult = getMin(4, 2, 754, -3);
console.log(minValResult); //Loggar -3