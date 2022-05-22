'use strict'

function sum(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'плюс':
        case '+':
            console.log(sum(arg1, arg2));
            break;

        case 'минус':
        case '-':
            console.log(minus(arg1, arg2));
            break;

        case 'умножить':
        case '*':
            console.log(mul(arg1, arg2));
            break;

        case 'делить':
        case '/':
            console.log(divide(arg1, arg2));
            break;
    }
}

let answer = prompt('Введите математический оператор')
mathOperation(10, 20, answer);