let calcInp = document.querySelector('.calc__display');

let calcBtns = document.querySelectorAll('.calc__btn');

let first = '';
let second = first;

calcBtns.forEach(item => item.addEventListener('click', () => {
    calcInp.value = first
    first += item.value;
    console.log(first)
}))

function separator(e, a, b){
    switch(e){
        case e.split('+'):
            return a + b;
        case e.split('-'):
            return a - b;
        case e.split('*'):
            return a * b;
        case e.split('/'):
            return a / b;
        default:
            break;
    }
}