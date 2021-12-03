const dots = document.querySelectorAll('.animation div');

//Vi sparar ner våran definierade animation i en variabel
const dotAnimation = anime({
  targets: dots,
  translateX: '92vw',
  backgroundColor: `hsl(200, 90%, 71%)`,
  delay: anime.stagger(100),
  direction: 'alternate',
  easing:  	'easeOutInBounce',
  loop: true,
  duration: 3000,
})

const play = document.querySelector('#play');
const pause = document.querySelector('#pause');

//Vi använder dotAnimation med metoden play/pause som callback-funktion i våra event listenters
play.addEventListener('click', dotAnimation.play );
pause.addEventListener('click', dotAnimation.pause );