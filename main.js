function criaul (array) {
    let newstring = '';
    for (const i of array) {
        newstring += `<li>${i}</li>`;
    }
    return newstring;
}
const local = localStorage;
const span = document.querySelector('ul');

list = local.getItem('lista');
if (list === null) list = '';
list = list.split(',');
if (list[0] === '') list.splice(0, 1);
span.innerHTML = criaul(list);

const envia = document.querySelector('#enviar');
if (!local.getItem('lista')) local.setItem('lista', '');

envia.addEventListener('click', () => {
    const text = document.querySelector('#texto').value;
    if (text !== '') {
        let list = local.getItem('lista');
        list = list.split(',');
        list.push(text)
        if (list[0] === '') list.splice(0,1);
        span.innerHTML = criaul(list);
        local.setItem('lista', list);
    }
});
remove = document.querySelector('#remover');

remove.addEventListener('click', () => {
    const text = document.querySelector('#texto').value;
    let list = local.getItem('lista');
    list = list.split(',');
    let num = list.lastIndexOf(text);
    num1 = num+1
    list.splice(num, 1);
    span.innerHTML = criaul(list);
    local.setItem('lista', list);
});
