'use strict'

let a = 2;
let x = 1 + (a *= 2);

//x = 5 Так как в скобах произошло следующее - a = a * 2 = 4. Т.е. x = 1 + 4 = 5