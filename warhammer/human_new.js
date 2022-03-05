const character = {
    race: "Czlowiek",
    speed: 4,
    tableZyw: [13, 12, 12, 12, 9, 9, 9, 8, 8, 8],
    tablePP: [3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
}

const roll_2k10_and_add_20 = () => Math.floor((Math.random() * 10) + 1) + Math.floor((Math.random() * 10) + 1) + 20;

const statZyw = character.tableZyw[Math.floor(Math.random() * character.tableZyw.length)];
const statPP = character.tablePP[Math.floor(Math.random() * character.tablePP.length)];

const characterPrinter = (`---------------------
Rasa: ${character.race}

WW: ${roll_2k10_and_add_20()}
US: ${roll_2k10_and_add_20()}
K: ${statK = roll_2k10_and_add_20()}
ODP: ${statOdp = roll_2k10_and_add_20()}
ZR: ${roll_2k10_and_add_20()}
INT: ${roll_2k10_and_add_20()}
SW: ${roll_2k10_and_add_20()}
OGD: ${roll_2k10_and_add_20()}

A: 1
Żyw: ${statZyw}
S: ${statK.toString()[0]}
Wt: ${statOdp.toString()[0]}
Sz: ${character.speed}
Mag: 0
PO: 0
PP: ${statPP}`)

console.log(characterPrinter)