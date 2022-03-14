import {races} from "./modules.js";

// const racePrefix = races.czlowiek
// const racePrefix = races.elf
// const racePrefix = races.krasnolud
const racePrefix = races.niziolek

let statS = racePrefix.k.toString()[0];
let statWt = racePrefix.odp.toString()[0];

const statZyw = racePrefix.zyw[Math.floor(Math.random() * racePrefix.zyw.length)];
const statPP = racePrefix.pp[Math.floor(Math.random() * racePrefix.pp.length)];

const characterPrinter = (`---------------------
Rasa: ${racePrefix.race}

WW: ${racePrefix.ww}
US: ${racePrefix.us}
K: ${racePrefix.k}
ODP: ${racePrefix.odp}
ZR: ${racePrefix.zr}
INT: ${racePrefix.int}
SW: ${racePrefix.sw}
OGD: ${racePrefix.odp}

A: 1
Żyw: ${statZyw}
S: ${statS}
Wt: ${statWt}
Sz: ${racePrefix.speed}
Mag: 0
PO: 0
PP: ${statPP}`)

console.log(characterPrinter)