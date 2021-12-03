const randomNumber = Math.ceil( Math.random()*3 );
console.log(randomNumber);

switch (randomNumber) {
  case 1:
    console.log("En etta");
    break;
  case 2:
    console.log("En tvåa");
    break;
  case 3:
    console.log("En trea");
    break;
}

if(randomNumber === 1){
  console.log("En etta");
}
else if(randomNumber === 2){
  console.log("En tvåa");
}
else if(randomNumber === 3){
  console.log("En trea");
}

const word = 'three';
switch (word) {
  case 'one':
    console.log("En etta");
    break;
  case 'two':
    console.log("En tvåa");
    break;
  case 'three':
    console.log("En trea");
    break;
}

//case utan break
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const day = days[ Math.floor( Math.random()*7 )];
console.log('today is', day);

switch(day){
  case 'mon':
    console.log('mon');
  case 'tue':
    console.log('tue');
  case 'wed':
    console.log('wed');
  case 'thu':
    console.log('thu');
  case 'fri':
    console.log('fri');
  case 'sat':
    console.log('sat');
  case 'sun':
    console.log('sun');
}

//default
const randNumber = Math.ceil( Math.random()*10 );
console.log(randNumber);
switch (randNumber) {
  case 1:
    console.log("En etta");
    break;
  case 2:
    console.log("En tvåa");
    break;
  case 3:
    console.log("En trea");
    break;
  default:
    console.log('Numret är mer än tre');
}
