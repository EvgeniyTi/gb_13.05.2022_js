"use strict";

let Tc = +prompt('Задайте температуру в градусах по цельсию');

if (typeof (Tc) == "number") {
    let Tf = (9 / 5) * Tc + 32;
    alert(Tf);
} else {
    alert('Задайте температуру в градусах по цельсию')
}