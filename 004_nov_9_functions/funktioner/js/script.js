//GÅr att anropa trots att funktionen deklareras senare i koden. Pga hoisting
minFunktion();
minAndraFunktion();
minFunktion();

//Deklarera en funktion
function minFunktion(){
    console.log('Nu befinner jag mig i funktionen minFunktion');
}

//Går att deklarera om
function minFunktion(){
    console.log('Första funktionen omdefinierad');
}

function minAndraFunktion(){
    console.log('Andra funktionen');
}

function createH1(){
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    h1.innerText = 'Created in createH1';
    h1.style.color = 'hotpink';
}

createH1();
createH1();
createH1();
createH1();
createH1();