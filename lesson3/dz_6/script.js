'use strict'

let anw = prompt('Введите сколько денег зачислить');

if ((anw.charAt(anw.length - 1) === '1') && (anw.charAt(anw.length - 2) !== '1')) {
    console.log(`Ваша сумма в ${anw} рубль успешно зачислена`);
} else if (((anw.charAt(anw.length - 1) === '2') || (anw.charAt(anw.length - 1) === '3') || (anw.charAt(anw.length - 1) === '4')) && (anw.charAt(anw.length - 2) !== '1')) {
    console.log(`Ваша сумма в ${anw} рубля успешно зачислена`);
} else {
    console.log(`Ваша сумма в ${anw} рублей успешно зачислен0`);
}



