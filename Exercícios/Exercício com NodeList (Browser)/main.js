const paragrafos = document.querySelector('paragrafos');
const ps = document.querySelectorAll('p');
const h1 = document.querySelector('h1');

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = "#FFF";
    p.style.textAlign = "center";
    p.style.border = "1px solid #1C1C1C ";
}

h1.style.color = "#CCC";