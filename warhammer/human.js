const race = "Czlowiek";

const stat20 = 20;

const rollDice = () => {
    return Math.floor((Math.random() * 10) + 1);
}

let statWW = rollDice() + rollDice() + stat20;
let statUS = rollDice() + rollDice() + stat20;
let statK = rollDice() + rollDice() + stat20;
let statOdp = rollDice() + rollDice() + stat20;
let statZr = rollDice() + rollDice() + stat20;
let statInt = rollDice() + rollDice() + stat20;
let statSW = rollDice() + rollDice() + stat20;
let statOgd = rollDice() + rollDice() + stat20;

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