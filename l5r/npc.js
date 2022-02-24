const cechaWytrzymalosc = Math.floor((Math.random() * 5) + 1);
const cechaSilaWoli = Math.floor((Math.random() * 5) + 1);
const kragZiemia = Math.min(cechaSilaWoli, cechaWytrzymalosc);

const cechaZrecznosc = Math.floor((Math.random() * 5) + 1);
const cechaInteligencja = Math.floor((Math.random() * 5) + 1);
const kragOgnien = Math.min(cechaZrecznosc, cechaInteligencja);

const cechaSila = Math.floor((Math.random() * 5) + 1);
const cechaSpostrzegawczosc = Math.floor((Math.random() * 5) + 1);
const kragWoda = Math.min(cechaSila, cechaSpostrzegawczosc);

const cechaRefleks = Math.floor((Math.random() * 5) + 1);
const cechaIntuicja = Math.floor((Math.random() * 5) + 1);
const kragPowietrze = Math.min(cechaRefleks, cechaIntuicja);

const kragPustka = Math.floor((Math.random() * 5) + 1);

const umiejetnoscKenjutsu = Math.floor((Math.random() * 5) + 1);

const katanaRoll = 3;
const katanaKeep = 2;

const printer = (`
Random NPC:
Ziemia: ${kragZiemia}    | Wytrzymałość: ${cechaWytrzymalosc}   | Siła Woli: ${cechaSilaWoli}
Ogień: ${kragOgnien}      | Zręczność: ${cechaZrecznosc}      | Inteligencja: ${cechaInteligencja}
Woda: ${kragWoda}      | Siła: ${cechaSila}           | Spostrzegawczość: ${cechaSpostrzegawczosc}
Powietrze: ${kragPowietrze}   | Refleks: ${cechaRefleks}       | Intuicja: ${cechaIntuicja}
Pustka: ${kragPustka}
            
Miecz: ${umiejetnoscKenjutsu} (Atak: !${umiejetnoscKenjutsu + cechaZrecznosc}z${cechaZrecznosc}) | Obrażenia: (katana średniej jakości 3z2): !${katanaRoll + cechaSila}l${katanaKeep}
Trudność Trafienia | Bez zbroi: ${cechaRefleks * 5} | Lekka zbroja: ${cechaRefleks * 5 + 5} | Ciężka zbroja: ${cechaRefleks * 5 + 10}
Rany: ${kragZiemia * 2} na poziom | Rany całość: ${kragZiemia * 2 * 8}`);

console.log(printer);