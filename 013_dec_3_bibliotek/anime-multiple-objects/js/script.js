//Vi roterar alla h1-element
anime({
  targets: 'h1',
  rotate: '1turn',
  easing: 'linear',
  duration: 400,
  delay: anime.stagger(100),
  endDelay: 500,
  loop: true,
})

//Vi sätter en event listener på diven som innehåller alla h1
const div = document.querySelector('div');
div.addEventListener('click', function(event){
  //Random
  const hue = _.random(0, 360);

  if(event.target.nodeName === 'H1'){
    anime({
      targets: event.target,
      scale: '500%',
      color: `hsl(${hue}, 80%, 60%)`,
      easing: 'linear',
      direction: 'alternate',
      duration: 200
    })
  }
})