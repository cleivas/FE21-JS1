let array1 = [1, 2, 3, 4, 5];
let array2 = array1;
console.log(array1, array2);

array2[0] = 100;
console.log('array1', array1, 'array2', array2);


let arrayCopy = [];
Object.assign(arrayCopy, array2);
console.log('array2', array2); 
console.log('arrayCopy', arrayCopy);

arrayCopy[0] = 0;
console.log('array2', array2); 
console.log('arrayCopy', arrayCopy);