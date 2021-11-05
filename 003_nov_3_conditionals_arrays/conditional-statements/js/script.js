//Ett h1-element 
const body = document.querySelector('body');
const h1 = document.createElement('h1');
body.appendChild(h1);

let age = 15;
const legalAge = 18;

//Om age är mer eller lika med legalAge kommer allt inuti curly brackets efter if att hända
//I alla andra fall kommer koden efter else att hända
if(age >= legalAge ){
    console.log('Yay, du är tillräckligt gammal!');
    h1.innerText = 'Yay, du är tillräckligt gammal!';
    h1.style.color = 'green';
}
else {
    console.log('Tyvärr, du får hitta på något annat.');
    h1.innerText = 'Tyvärr, du får hitta på något annat.';
    h1.style.color = 'red';
}

//
for(let i=0; i<65; i++){
    const h3 = document.createElement('h3');
    body.append(h3);
    h3.innerText = i;
    h3.style.textAlign = 'center';

    //Alla nummer som vi ser i h3 upp till 13
    if(i < 13){ 
        h3.style.backgroundColor = 'skyblue';
    }
    else if( i<=50 && i>=40 ){
        h3.style.backgroundColor = 'orange';
    }
    else if( i<=39 && i>=13 ){
        h3.style.backgroundColor = 'hotpink';
    }
    else{
        h3.style.backgroundColor = 'limegreen';
    }

    //MOdulus ger resten från en division
    //Om vi använder data%2 blir resultatet alltid 0 om data är ett jämnt nummer
    console.log(i, i%2);
    if(i%2 === 1){
        h3.style.color = 'white';
    }

}

