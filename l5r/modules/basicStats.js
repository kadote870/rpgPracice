import {roll_d5} from "../../roll/roll.js";

export const cecha = {
    //ziemia
    wytrzymalosc: roll_d5(),
    silaWoli: roll_d5(),
    //ogien
    zrecznosc: roll_d5(),
    inteligencja: roll_d5(),
    //woda
    sila: roll_d5(),
    spostrzegawczosc: roll_d5(),
    //powietrze
    refleks: roll_d5(),
    intuicja: roll_d5(),
    //walka
    kenjutsu: roll_d5(),
    katanaRoll: 3,
    katanaKeep: 2,
};
export const krag = {
    ziemia: Math.min(cecha.silaWoli, cecha.wytrzymalosc),
    ogien: Math.min(cecha.zrecznosc, cecha.inteligencja),
    woda: Math.min(cecha.sila, cecha.spostrzegawczosc),
    powietrze: Math.min(cecha.refleks, cecha.intuicja),
    pustka: roll_d5(),
};