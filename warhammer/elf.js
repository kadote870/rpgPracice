const character = {
    race: "Elf",
    speed: 5,
    tableZyw: [12, 11, 11, 11, 10, 10, 10, 9, 9, 9],
    tablePP: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
}

function roll_2k10_and_add_20() {
    return Math.floor((Math.random() * 10) + 1) +
        Math.floor((Math.random() * 10) + 1)
        + 20;
}

function roll_2k10_and_add_30() {
    return Math.floor((Math.random() * 10) + 1) +
        Math.floor((Math.random() * 10) + 1)
        + 30;
}

let statWW = roll_2k10_and_add_20();
let statUS = roll_2k10_and_add_30();
let statK = roll_2k10_and_add_20();
let statOdp = roll_2k10_and_add_20();
let statZr = roll_2k10_and_add_30();
let statInt = roll_2k10_and_add_20();
let statSW = roll_2k10_and_add_20();
let statOgd = roll_2k10_and_add_20();

let statA = 1;
let statS = statK.toString()[0];
let statWt = statOdp.toString()[0];

const statZyw = character.tableZyw[Math.floor(Math.random() * character.tableZyw.length)];
const statPP = character.tablePP[Math.floor(Math.random() * character.tablePP.length)];

const characterPrinter = (`---------------------
Rasa: ${character.race}

WW: ${statWW}
US: ${statUS}
K: ${statK}
ODP: ${statOdp}
ZR: ${statZr}
INT: ${statInt}
SW: ${statSW}
OGD: ${statOgd}

A: ${statA}
Żyw: ${statZyw}
S: ${statS}
Wt: ${statWt}
Sz: ${character.speed}
Mag: 0
PO: 0
PP: ${statPP}`)

console.log(characterPrinter);