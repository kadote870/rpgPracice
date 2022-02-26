// const race = "Czlowiek";
const race = "Elf";
// const race = "Krasnolud";
// const race = "Niziolek";

const stat10 = 10;
const stat20 = 20;
const stat30 = 30;

//
// let rollDice = Math.floor((Math.random() * 10) + 1);
//
// rollDice.forEach[roll01, roll02, roll03, roll04, roll05, roll06, roll07, roll08, roll09, roll10, roll11, roll12, roll13, roll14, roll15, roll16, roll17, roll18];
// //
// // const rollDice = [roll01, roll02, roll03, roll04, roll05, roll06, roll07, roll08, roll09, roll10, roll11, roll12, roll13, roll14, roll15, roll16, roll17, roll18];
// //
// // rollDice.forEach(roll => Math.floor((Math.random() * 10) + 1));

// const roll01 = Math.floor((Math.random() * 10) + 1);const roll02 = Math.floor((Math.random() * 10) + 1);const roll03 = Math.floor((Math.random() * 10) + 1);const roll04 = Math.floor((Math.random() * 10) + 1);const roll05 = Math.floor((Math.random() * 10) + 1);const roll06 = Math.floor((Math.random() * 10) + 1);const roll07 = Math.floor((Math.random() * 10) + 1);const roll08 = Math.floor((Math.random() * 10) + 1);const roll09 = Math.floor((Math.random() * 10) + 1);const roll10 = Math.floor((Math.random() * 10) + 1);const roll11 = Math.floor((Math.random() * 10) + 1);const roll12 = Math.floor((Math.random() * 10) + 1);const roll13 = Math.floor((Math.random() * 10) + 1);const roll14 = Math.floor((Math.random() * 10) + 1);const roll15 = Math.floor((Math.random() * 10) + 1);const roll16 = Math.floor((Math.random() * 10) + 1);const roll17 = Math.floor((Math.random() * 10) + 1);const roll18 = Math.floor((Math.random() * 10) + 1);

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

let statZyw = 0;

if (race === "Elf") {
    let statUS = roll03 + roll04 + stat30;
    let statZr = roll09 + roll10 + stat30;

    let speed = 5;

    const tableZyw = [12, 11, 11, 11, 10, 10, 10, 9, 9, 9];
    const statZyw = tableZyw[Math.floor(Math.random() * tableZyw.length)];

    const tablePP = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2];
    const statPP = tablePP[Math.floor(Math.random() * tablePP.length)];

} else if (race === "Krasnolud") {
    let statWW = roll01 + roll02 + stat30;
    let statOdp = roll07 + roll08 + stat30;
    let statZr = roll09 + roll10 + stat10;
    let statOgd = roll15 + roll16 + stat10;

    let speed = 3;

    const tableZyw = [14, 13, 13, 13, 12, 12, 12, 11, 11, 11];
    const statZyw = tableZyw[Math.floor(Math.random() * tableZyw.length)];

    const tablePP = [3, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    const statPP = tablePP[Math.floor(Math.random() * tablePP.length)];

} else if (race === "Niziolek") {
    let statWW = roll01 + roll02 + stat10;
    let statUS = roll03 + roll04 + stat30;
    let statK = roll05 + roll06 + stat10;
    let statOdp = roll07 + roll08 + stat10;
    let statZr = roll09 + roll10 + stat30;
    let statOgd = roll15 + roll16 + stat30;

    let speed = 4

    const tableZyw = [11, 10, 10, 10, 9, 9, 9, 8, 8, 8];
    const statZyw = tableZyw[Math.floor(Math.random() * tableZyw.length)];

    const tablePP = [3, 3, 3, 3, 2, 2, 2, 2, 2, 2];
    const statPP = tablePP[Math.floor(Math.random() * tablePP.length)];

} else {
    var speed = 4;

    const tableZyw = [13, 12, 12, 12, 9, 9, 9, 8, 8, 8];
    var statZyw = tableZyw[Math.floor(Math.random() * tableZyw.length)];

    const tablePP = [3, 3, 3, 3, 2, 2, 2, 2, 2, 2];
    var statPP = tablePP[Math.floor(Math.random() * tablePP.length)];


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
}

// console.log(character)