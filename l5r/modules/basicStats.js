import {dice_roll} from "../../roll/roll.js";

export const cecha = {
    //ziemia
    wytrzymalosc: dice_roll(5),
    silaWoli: dice_roll(5),
    //ogien
    zrecznosc: dice_roll(5),
    inteligencja: dice_roll(5),
    //woda
    sila: dice_roll(5),
    spostrzegawczosc: dice_roll(5),
    //powietrze
    refleks: dice_roll(5),
    intuicja: dice_roll(5),
    //walka
    kenjutsu: dice_roll(5),
    katanaRoll: 3,
    katanaKeep: 2,
};
export const krag = {
    ziemia: Math.min(cecha.silaWoli, cecha.wytrzymalosc),
    ogien: Math.min(cecha.zrecznosc, cecha.inteligencja),
    woda: Math.min(cecha.sila, cecha.spostrzegawczosc),
    powietrze: Math.min(cecha.refleks, cecha.intuicja),
    pustka: dice_roll(5),
};