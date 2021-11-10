const names = ['Clara', 'Sohny', 'Forqan', 'Sara', 'Michaela', 'Niklas'];

randomH1(names);

function randomH1(nameArr){
    const h1 = document.createElement('h1');
    const randomIndex = Math.floor( Math.random()*nameArr.length );
    console.log(randomIndex);

    h1.innerText = nameArr[randomIndex];
    document.body.appendChild(h1);

    const randomHue = Math.round( Math.random() * 360);
    h1.style.backgroundColor = `hsl(${randomHue}, 90%, 60%)`;
}