function double(x){
    return x+x;
}
console.log( double(3) );

const doubleArrow = x => x+x;
console.log( doubleArrow(3) );

const noPar = () => 'Gosia';
console.log(noPar() );

//Arrow function som en callback function
const numbers = [2, 5, 9, 23, 57];
const doMathOnArray = function(arr, func){
    const results = [];
    for(let i=0; i< arr.length; i++){
        results.push( func(arr[i]) );
    }
    return results;
}

const newNumbers = doMathOnArray(numbers, x=>x*2);
console.log(newNumbers);

//Filter-metoder med en arrow function som callback function
const moreNumbers = [34, 16, 64, 2, 56, 83];
const belowTwenty = moreNumbers.filter(
    number => number<=20
);
console.log(belowTwenty);