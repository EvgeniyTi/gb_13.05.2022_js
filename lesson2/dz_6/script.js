'use strict'

let x = 1;
let y = [2, 3, 4];
let z = [5, 6, 7, 8, 9, 0]
let c = [11, 12, 13, 14];

let anw = prompt('Введите сколько денег зачислить');

if ((anw.charAt(anw.length - 1) === '1') && (anw.charAt(anw.length - 2) !== '1')) {
    console.log(`Ваша сумма в ${anw} рубль успешно зачислена`);
} else if (((anw.charAt(anw.length - 1) === '2') || (anw.charAt(anw.length - 1) === '3') || (anw.charAt(anw.length - 1) === '4')) && (anw.charAt(anw.length - 2) !== '1')) {
    console.log(`Ваша сумма в ${anw} рубля успешно зачислено`);
} else {
    console.log(`Ваша сумма в ${anw} рублей успешно зачислен0`);
}



