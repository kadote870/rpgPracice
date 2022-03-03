const race = "Elf";

const stat20 = 20;
const stat30 = 30;

const rollDice = () => {
    return Math.floor((Math.random() * 10) + 1)
}

const roll01 = rollDice()
const roll02 = rollDice()
const roll03 = rollDice()
const roll04 = rollDice()
const roll05 = rollDice()
const roll06 = rollDice()
const roll07 = rollDice()
const roll08 = rollDice()
const roll09 = rollDice()
const roll10 = rollDice()
const roll11 = rollDice()
const roll12 = rollDice()
const roll13 = rollDice()
const roll14 = rollDice()
const roll15 = rollDice()
const roll16 = rollDice()

let statWW = roll01 + roll02 + stat20;
let statK = roll05 + roll06 + stat20;
let statOdp = roll07 + roll08 + stat20;
let statInt = roll11 + roll12 + stat20;
let statSW = roll13 + roll14 + stat20;
let statOgd = roll15 + roll16 + stat20;

let statA = 1;
let statS = statK.toString()[0];
let statWt = statOdp.toString()[0];

let statUS = roll03 + roll04 + stat30;
let statZr = roll09 + roll10 + stat30;

let speed = 5;

const tableZyw = [12, 11, 11, 11, 10, 10, 10, 9, 9, 9];
const statZyw = tableZyw[Math.floor(Math.random() * tableZyw.length)];

const tablePP = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2];
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

console.log(character);