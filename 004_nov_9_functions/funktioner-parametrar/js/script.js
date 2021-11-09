//Funktionen har tre parametrar, ett för typ av element, ett för inner text och ett för bakgrundsfärgen
function createEl(typeOfElement, text, color){
    const el = document.createElement(typeOfElement);
    el.innerText = text;
    el.style.backgroundColor = color;
    document.body.appendChild(el);
}

//Skapar ett h1-element med texten 'det här är ett h1-element' och bakgrundsfärgen hotpink
createEl('h1', 'Det här är ett h1-element', 'hotpink');
createEl('p', 'Ett P', 'hsl(200, 50%, 80%)');
createEl('a', 'ett a', 'limegreen');

//Alla parametrar kommer vara undefined
// createEl();


function createMultiEl(typeOfElement, text = 'default', color, amount = 5){

    for(let i = 0; i<amount; i++){
        const el = document.createElement(typeOfElement);
        el.innerText = text;
        el.style.backgroundColor = color;
        document.body.appendChild(el);
    }
}

createMultiEl('h5', 'H5', 'green', 3);
createMultiEl('h3', 'H3', 'skyblue', 8);
createMultiEl('p', 'P', 'violet');
//Agumenten som anges går alltid i samma ordning som parametrarna där funktionen definieras. 
createMultiEl('h1', 'limegreen');
