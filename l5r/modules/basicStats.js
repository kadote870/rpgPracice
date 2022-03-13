import {rollD5} from "../../roll/roll.js";

export const cecha = {
    //ziemia
    wytrzymalosc: rollD5(),
    silaWoli: rollD5(),
    //ogien
    zrecznosc: rollD5(),
    inteligencja: rollD5(),
    //woda
    sila: rollD5(),
    spostrzegawczosc: rollD5(),
    //powietrze
    refleks: rollD5(),
    intuicja: rollD5(),
    //walka
    kenjutsu: rollD5(),
    katanaRoll: 3,
    katanaKeep: 2,
};
export const krag = {
    ziemia: Math.min(cecha.silaWoli, cecha.wytrzymalosc),
    ogien: Math.min(cecha.zrecznosc, cecha.inteligencja),
    woda: Math.min(cecha.sila, cecha.spostrzegawczosc),
    powietrze: Math.min(cecha.refleks, cecha.intuicja),
    pustka: rollD5(),
};