import {roll_2d10_and_add_20, roll_2d10_and_add_30} from "../roll/roll.js";
import {races} from "./generator.js";

const rasaPrefix = races.Elf

let statWW = roll_2d10_and_add_20();
let statUS = roll_2d10_and_add_30();
let statK = roll_2d10_and_add_20();
let statOdp = roll_2d10_and_add_20();
let statZr = roll_2d10_and_add_30();
let statInt = roll_2d10_and_add_20();
let statSW = roll_2d10_and_add_20();
let statOgd = roll_2d10_and_add_20();

let statA = 1;
let statS = statK.toString()[0];
let statWt = statOdp.toString()[0];

const statZyw = races.Elf.tableZyw[Math.floor(Math.random() * races.Elf.tableZyw.length)];
const statPP = races.Elf.tablePP[Math.floor(Math.random() * races.Elf.tablePP.length)];

const characterPrinter = (`---------------------
Rasa: ${rasaPrefix.race}

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
Sz: ${races.Elf.speed}
Mag: 0
PO: 0
PP: ${statPP}`)

console.log(characterPrinter);