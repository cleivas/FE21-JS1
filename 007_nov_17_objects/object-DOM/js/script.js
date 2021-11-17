const el1 = {
    type: 'h1',
    id: 'title',
    color: 'hotpink',
    content: 'Hello, world!'
}

const el2 = {
    type: 'p',
    id: 'paragraph',
    color: 'limegreen',
    content: 'Hello, universe!'
}

createEl(el1);
createEl(el2);

function createEl(obj){
    const newEl = document.createElement(obj.type);
    document.body.appendChild(newEl);

    newEl.id = obj.id;
    newEl.style.color = obj.color;
    newEl.innerText = obj.content;
    obj.id = 'test';
}

console.log(el1.id, el2.id);