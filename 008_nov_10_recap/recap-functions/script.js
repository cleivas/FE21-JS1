myFunction(100);
myFunction('text');
myFunction(5);

function myFunction( minParameter){
    const text = `Argumentet den här gången var ${minParameter}`;
    console.log(text);
}

function add(x, y){
   return x+y;
}

let addedNumbers = add(4, 8);
addedNumbers = add(1, 3);
console.log( addedNumbers*2 );

function callBothFunctions(){
    myFunction(90);
    add(1, 2);
}

console.log( callBothFunctions() );
let y;
console.log(y);

function minFunktion( minParameter){
    return minParameter *3;
}