const divs = document.querySelectorAll('div');
// console.log(divs[0]);

divs[0].addEventListener('click', function(){
  anime({
    targets: divs[0],
    backgroundColor: 'hsl(330, 100%, 71%)',
    translateX: '50vw',
    borderRadius: ['0%', '50%'],
    duration: 1000,
    easing: 'linear',
    direction: 'alternate',
  });
})

divs[1].addEventListener('click', function(){
  anime({
    targets: divs[1],
    backgroundColor: 'hsl(200, 100%, 71%)',
    translateX: '50vw',
    rotate: '360deg',
    duration: 1000,
    easing: 'linear',
    direction: 'alternate',
  });
})

