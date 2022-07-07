import {dice_roll} from "../../roll/roll.js";

const gambling1 = dice_roll(6);
const gambling2 = dice_roll(6);
const modulo = (gambling1 + gambling2) % 2;

if (modulo === 0) {
    console.log('Wynik krupiera: [' + gambling1 + '][' + gambling2 + '] = ' + (gambling1 + gambling2) + ' PARZYSTE');
} else {
    console.log('Wynik krupiera: [' + gambling1 + '][' + gambling2 + '] = ' + (gambling1 + gambling2) + ' NIE PARZYSTE');
}
