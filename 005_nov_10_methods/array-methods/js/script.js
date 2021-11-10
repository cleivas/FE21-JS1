//Kolla exakt beskrivning under dokumentationen i W3schools eller MDN web docs
//Lenght - enda array-egenskapen
let cars = ['volvo', 'saab', 'maybach', 'fiat', 'lucid'];
console.log(cars, cars.length );

//Push
cars.push('tesla');
console.log(cars, cars.length );

//Metoden returnera även den uppdaterade egenskapen length.
console.log( cars.push('bmw', 'toyota') );
console.log(cars, cars.length );

//Pop
console.log( cars.pop() );
console.log(cars);
console.log(cars.pop());
console.log(cars);

//Shift
console.log( cars.shift());
console.log(cars);
console.log( cars.shift());
console.log(cars);

//Unshift
// cars.unshift('volvo', 'audi');
cars.unshift('volvo')
cars.unshift('audi')
console.log( cars );

//concat
let motorcycles = ['suzuki', 'ducati', 'yamaha'];
let vehicles = cars.concat(motorcycles);
console.log(vehicles);

//includes
console.log( motorcycles.includes('dukati') );
console.log( cars.includes('audi') );

//reverse - returnerar en ny reversed array SAMT reversar original-arrayn
let reverseVehicles = vehicles.reverse();
console.log(reverseVehicles);
console.log(vehicles);

//Filter
const ages = [13, 63, 23, 18, 9];
const adultAges = ages.filter(
    function(element){
        return element >= 18;
    }
)
console.log(adultAges);

//forEach - ingenting returneras
let sum = 0;
ages.forEach(
    function(el){
        sum = sum +=el;
    }
);
console.log(sum);

console.log(ages);
ages.forEach(
    function(element, index){
        ages[index] = element*element;
        console.log(index, element);
    }
);
console.log(ages);