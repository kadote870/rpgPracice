import {roll_2d10_and_add_10, roll_2d10_and_add_20, roll_2d10_and_add_30} from "../roll/roll.js";

const character = {
    Czlowiek: {
        race: "Czlowiek",
        speed: 4,
        tableZyw: [13, 12, 12, 12, 9, 9, 9, 8, 8, 8],
        tablePP: [3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
    },
    Elf: {
        race: "Elf",
        speed: "5",
        tableZyw: [12, 11, 11, 11, 10, 10, 10, 9, 9, 9],
        tablePP: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2]
    },
    Krasnolud: {
        race: "Krasnolud",
        speed: 3,
        tableZyw: [14, 13, 13, 13, 12, 12, 12, 11, 11, 11],
        tablePP: [3, 3, 3, 2, 2, 2, 1, 1, 1, 1]
    },
    Niziolek: {
        race: "Niziolek",
        speed: 4,
        tableZyw: [11, 10, 10, 10, 9, 9, 9, 8, 8, 8],
        tablePP: [3, 3, 3, 3, 2, 2, 2, 2, 2, 2]
    }
}


// const race = "Czlowiek";
const race = "Elf";
// const race = "Krasnolud";
// const race = "Niziolek";



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


if (race === "Elf") {
    let statUS = roll_2d10_and_add_30;
    let statZr = roll_2d10_and_add_30;

    let speed = 5;

    const tableZyw = [12, 11, 11, 11, 10, 10, 10, 9, 9, 9];
    const statZyw = tableZyw[Math.floor(Math.random() * tableZyw.length)];

    const tablePP = [1, 1, 1, 1, 1, 1, 2, 2, 2, 2];
    const statPP = tablePP[Math.floor(Math.random() * tablePP.length)];

} else if (race === "Krasnolud") {
    let statWW = roll_2d10_and_add_30;
    let statOdp = roll_2d10_and_add_30;
    let statZr = roll_2d10_and_add_10;
    let statOgd = roll_2d10_and_add_10;

    let speed = 3;

    const tableZyw = [14, 13, 13, 13, 12, 12, 12, 11, 11, 11];
    const statZyw = tableZyw[Math.floor(Math.random() * tableZyw.length)];

    const tablePP = [3, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    const statPP = tablePP[Math.floor(Math.random() * tablePP.length)];

} else if (race === "Niziolek") {
    let statWW = roll_2d10_and_add_10;
    let statUS = roll_2d10_and_add_30;
    let statK = roll_2d10_and_add_10;
    let statOdp = roll_2d10_and_add_10;
    let statZr = roll_2d10_and_add_30;
    let statOgd = roll_2d10_and_add_30;

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

}
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