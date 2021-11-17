const mammal1 = {
    type: 'gorilla',
    tail: false,
    legs: 2,
    sound: 'AAAAHHH',
    makeSound: function(){
        console.log(this.sound);
    }
}

const mammal2 = {
    type: 'dog',
    tail: true,
    legs: 4,
    sound: 'woof',
    makeSound: function(times){
        for(let i=0; i<times; i++){
            console.log(this.sound);
        }
    }
}

console.log(mammal1.type, mammal1.legs);
console.log(mammal2.type, mammal2.tail);

mammal1.legs = 1;
mammal2.tail = false;

console.log(mammal1.type, mammal1.legs);
console.log(mammal2.type, mammal2.tail);

mammal1.makeSound();
mammal2.makeSound(3);
mammal2.makeSound(15);