const square = function(x){
    return x*x;
}
const timesTwo = function(x){
    return x*2;
}

let result = square(23);
console.log(result);

result = timesTwo(23);
console.log(result);

const numbers = [2, 5, 9, 23, 57];
const numbersSquared = [];

//Vi loopar igenom alla element i arrayen numbers
//För varje element skickar vi det värdet som argument till funktionen square
//Det returnerade värdet läggs sedan till till arrayen numbersSquared
for(let i=0; i<numbers.length; i++){
    const result = square( numbers[i])
    numbersSquared.push( result );
}
console.log(numbersSquared);

const numbersTimesTwo = [];
for(let i=0; i<numbers.length; i++){
    const result = timesTwo( numbers[i])
    numbersTimesTwo.push( result );
}
console.log(numbersTimesTwo);


const doMathOnArray = function(arr, func){
    const results = [];
    for(let i=0; i< arr.length; i++){
        results.push( func(arr[i]) );
    }
    return results;
}

const numbersSquared2 = doMathOnArray(numbers, square);
console.log(numbersSquared2);

const numbersTimesTwo2 = doMathOnArray(numbers, timesTwo);
console.log(numbersTimesTwo2);