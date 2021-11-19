const car = {
    color: 'red',
    window: 'manual',
    model: 'tesla',
    honk: function(){
        console.log('ingen kommer köpa mig');
    },
    seat: {
        color: 'blue',
        material: 'leather'
    }
}

console.log(car);
console.log( car.color );
car.honk();

console.log( car.seat.material );

//Spelar-objekt i vårat låtsasspel
const spelare1 = {
    namn: 'lian',
    score: 0,
    position: {
        x: 0,
        y: 0
    },
    level: 0,
    appearance: {
        helmet: false,
        color: 'black'
    }
}

function drawPlayer(obj){
    //sätt positionen på obj.x och obj.y
}

const obj = {
    propertyName: propertyValue,
    methodName: function(){
        console.log(this.propertyName);
    }
}