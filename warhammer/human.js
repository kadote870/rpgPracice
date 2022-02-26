const race = "Czlowiek";

const stat20 = 20;

const roll01 = Math.floor((Math.random() * 10) + 1);
const roll02 = Math.floor((Math.random() * 10) + 1);
const roll03 = Math.floor((Math.random() * 10) + 1);
const roll04 = Math.floor((Math.random() * 10) + 1);
const roll05 = Math.floor((Math.random() * 10) + 1);
const roll06 = Math.floor((Math.random() * 10) + 1);
const roll07 = Math.floor((Math.random() * 10) + 1);
const roll08 = Math.floor((Math.random() * 10) + 1);
const roll09 = Math.floor((Math.random() * 10) + 1);
const roll10 = Math.floor((Math.random() * 10) + 1);
const roll11 = Math.floor((Math.random() * 10) + 1);
const roll12 = Math.floor((Math.random() * 10) + 1);
const roll13 = Math.floor((Math.random() * 10) + 1);
const roll14 = Math.floor((Math.random() * 10) + 1);
const roll15 = Math.floor((Math.random() * 10) + 1);
const roll16 = Math.floor((Math.random() * 10) + 1);

let statWW = roll01 + roll02 + stat20;
let statUS = roll03 + roll04 + stat20;
let statK = roll05 + roll06 + stat20;
let statOdp = roll07 + roll08 + stat20;
let statZr = roll09 + roll10 + stat20;
let statInt = roll11 + roll12 + stat20;
let statSW = roll13 + roll14 + stat20;
let statOgd = roll15 + roll16 + stat20;

let statA = 1;
let statS = statK.toString()[0];
let statWt = statOdp.toString()[0];

const speed = 4;

const tableZyw = [13, 12, 12, 12, 9, 9, 9, 8, 8, 8];
const statZyw = tableZyw[Math.floor(Math.random() * tableZyw.length)];

const tablePP = [3, 3, 3, 3, 2, 2, 2, 2, 2, 2];
const statPP = tablePP[Math.floor(Math.random() * tablePP.length)];

const character = (`---------------------
Rasa: ${race}

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
Sz: ${speed}
Mag: 0
PO: 0
PP: ${statPP}`)

console.log(character)