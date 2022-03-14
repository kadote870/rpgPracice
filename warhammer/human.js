import {roll_2d10_and_add_20} from "../roll/roll.js";
import {races} from "./generator.js";

const racePrefix = races.Czlowiek

let statWW = roll_2d10_and_add_20();
let statUS = roll_2d10_and_add_20();
let statK = roll_2d10_and_add_20();
let statOdp = roll_2d10_and_add_20();
let statZr = roll_2d10_and_add_20();
let statInt = roll_2d10_and_add_20();
let statSW = roll_2d10_and_add_20();
let statOgd = roll_2d10_and_add_20();

let statA = 1;
let statS = statK.toString()[0];
let statWt = statOdp.toString()[0];

const statZyw = racePrefix.tableZyw[Math.floor(Math.random() * racePrefix.tableZyw.length)];
const statPP = racePrefix.tablePP[Math.floor(Math.random() * racePrefix.tablePP.length)];

const characterPrinter = (`---------------------
Rasa: ${racePrefix.race}

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
Sz: ${racePrefix.speed}
Mag: 0
PO: 0
PP: ${statPP}`)

console.log(characterPrinter)