import {roll_2k10_and_add_20} from "../roll/roll.js";

const character = {
    race: "Czlowiek",
    speed: 4,
    tableZyw: [13, 12, 12, 12, 9, 9, 9, 8, 8, 8],
    tablePP: [3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
}

let statWW = roll_2k10_and_add_20();
let statUS = roll_2k10_and_add_20();
let statK = roll_2k10_and_add_20();
let statOdp = roll_2k10_and_add_20();
let statZr = roll_2k10_and_add_20();
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

console.log(characterPrinter)