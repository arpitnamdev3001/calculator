let display = document.querySelector('#display');
// console.log(display);
let btns = document.querySelectorAll('.button');
let clear = document.querySelector('.clear');
let calculate = document.querySelector('.equal');

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        display.value += btn.innerText;
    });
});
clear.onclick = function() {
display.value = '';
}
calculate.onclick = function() { 
    display.value = eval(display.value);
}


