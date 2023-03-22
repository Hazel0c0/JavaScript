// <div id='box'>
//   <input id='abc' class='zzz xxx vvv' type='text'>
// </div

let box, input;

box = {
    tagName: 'div',
    attributes: {
        id: 'box'
    },
    children: [input],
    // parentNode: document.body
};

input = {
    tagName: 'input',
    attributes: {
        id: 'abc',
        classList: ['zzz', 'xxx', 'vvv'],
        type: 'text'
    },
    parentNode: box
};


console.log(input);

const $grape = document.getElementById('grape');
$grape.style.backgroundColor = 'violet';

const elements = [...document.querySelectorAll('.fr')];  //찐배열
console.log(elements);