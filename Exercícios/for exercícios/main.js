const element = [
    { tag: 'p', text: 'Qualquer coisa' },
    { tag: 'div', text: 'Frase 2' },
    { tag: 'section', text: 'Frase 3' },
    { tag: 'footer', text: 'Frase 4' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < element.length; i++) {
    let { tag, text } = element[i];
    let tagCreate = document.createElement(tag);
    let textCreate = document.createTextNode(text);

    tagCreate.appendChild(textCreate);
    div.appendChild(tagCreate);
}

container.appendChild(div);