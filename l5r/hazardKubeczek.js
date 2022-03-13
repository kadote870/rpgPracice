import {rollD6} from "../roll/roll.js";

let gambling1 = rollD6();
let gambling2 = rollD6();
let parzyste = (gambling1 + gambling2) % 2;

if (parzyste === 0) {
    console.log('Wynik krupiera: [' + gambling1 + '][' + gambling2 + '] = ' + (gambling1 + gambling2) + ' PARZYSTE');
} else {
    console.log('Wynik krupiera: [' + gambling1 + '][' + gambling2 + '] = ' + (gambling1 + gambling2) + ' NIE PARZYSTE');
}
