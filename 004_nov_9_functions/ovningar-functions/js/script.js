//Return - Övning 2
const strings = ['ett', 'två', 'tre', 'fyra'];
const strings2 = ['häst', 'telefant', 'padda', 'gädda'];

const result = tredjeElementet(strings);
console.log(result);

const result2 = tredjeElementet(strings2);
console.log(result2);

function tredjeElementet( arr ){
    return arr[2];
}

//Return - Övning 3
const numbers = [5, 2, 4, 2, 1];
const numbers2 = [5, 2, 4, 2, 1, 5, 6, 2];

const sum1 = getSum(numbers);
const sum2 = getSum(numbers2);

console.log(sum1, sum2);

function getSum( arrNum ){
    let sum = 0;

    for(let i = 0; i<arrNum.length; i++){
        sum = sum + arrNum[i];
        //sum += arrNum[i];
    }
    return sum;
}

//return - övning 5
const av1 = getAv(3, 7, 2, 7, 3, 8);
const av2 = getAv(52, 4, 34, 73, 166, 3);
console.log(av1, av2);

function getAv(){
    // console.log( arguments );
    let sum = 0;

    for(let i = 0; i<arguments.length; i++){
        sum = sum + arguments[i];
        //sum += arguments[i];
    }
    // console.log(sum);
    const av = sum/arguments.length;
    return av;
}

//Return - övning 6
console.log( celToFar(10) );
console.log( celToFar(44.5) );
console.log( celToFar('g') );

function celToFar(cel){
    // (°F) = (Celsius x 1.8) + 32
    return (cel*1.8)+32;
}

//DOM 1
blueToPurpleH1(3);
blueToPurpleH1(30);

function blueToPurpleH1(nmbOfEl){
    for(let i=0; i<nmbOfEl; i++){
        const h1 = document.createElement('h1');
        h1.innerText = i;

        const hue = 240 + i * (70/nmbOfEl);
        h1.style.backgroundColor = `hsl(${hue}, 90%, 70%)`;

        document.body.appendChild(h1);
    }
}