const jsonString = `{"name":"John", "age":30, "car":null}`;

const obj = JSON.parse(jsonString);

console.log(obj); 
console.log( obj.name );


const obj2 = {
    name: 'Ayub',
    superPowers: 'flyga',
    dislikes: {
        most: 'Internet Explorer',
        least: 'JS'
    }
}

console.log(obj2);
console.log(obj2.dislikes.most);

const jsonString2 = JSON.stringify(obj2);
console.log(jsonString2);