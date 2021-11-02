// Deklaration och initiering av en variabel
// av typen let, med namnet firstName, och värdet 'Forqan'
let firstName = 'Forqan';
console.log('Förnamn:', firstName);
console.log('Förnamnet är fortfarande:', firstName);

//Vi ändrar innehållet eller värdet av variabeln firstName
firstName = 'Hamed';
console.log('Förnamn har nu ändrats till:', firstName);

// Deklaration och initiering av en variabel
// av typen const, med namnet lastName, och värdet 'Andersson'
const lastName = 'Andersson';
console.log('Efternamn:', lastName);

//Nedan ger ett error eftersom man kan aldrig ändra på värdet av en const variabel
// lastName = 'Leivas';

//Datatyp String
const text = 'Det här är lite text';
console.log(typeof text, text);

// Datatyp number
const nr = 36586;
console.log(typeof nr, nr);

// Datatyp boolean
const bol = true; 
console.log(typeof bol, bol);

// Undefined 
let empty;
console.log(typeof empty, empty);

// Uträkningar med variabler som innehåller datatypen number
const moms = 0.25;
const pris = 300;
const totaltPris = pris * (1 + moms);

console.log('Moms', moms);
console.log('Pris', pris);
console.log('Det totala priset:', totaltPris);

const nr1 = 4;
const nr2 = 50;
let resultat = nr2/nr1;
console.log('nr2 delat med nr1', resultat)

resultat = nr1*nr2;
console.log('nr2 gånger nr1', resultat);

resultat = nr2 % nr1;
console.log('nr2 modulo nr1', resultat);


// Uträkningar med text, string
// Vi använder variablerna firstName och lastName som vi deklarerat tidigare i koden

const fullName = firstName + ' ' + lastName;
console.log('Full name:', fullName);

const test = firstName - lastName;
console.log(test); //NaN, Not a Number. SÅ det går inte