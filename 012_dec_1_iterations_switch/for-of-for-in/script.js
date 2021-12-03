const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log('first loop', arr[i]);
}

for(const el of arr){
    console.log('second loop', el);
}

for(let i=0; i<arr.length; i++){
    const el = arr[i];
    console.log('third loop', el);
}

//for in
const obj = {
    a: "En string",
    b: 42,
    c: false,
  };
const propertyName = 'a';
console.log(obj.a, obj['a'], obj[propertyName] );

for(const p in obj){
    console.log(p, obj[p]);
}