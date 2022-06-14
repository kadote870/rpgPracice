import {roll_2d10_and_add_20} from "../roll/roll.js";


let ww = roll_2d10_and_add_20()
let us = roll_2d10_and_add_20()
let k = roll_2d10_and_add_20()
let odp = roll_2d10_and_add_20()
let zr = roll_2d10_and_add_20()
let int = roll_2d10_and_add_20()
let sw = roll_2d10_and_add_20()
let ogd = roll_2d10_and_add_20()

let zywTab = [13, 12, 12, 12, 9, 9, 9, 8, 8, 8]
let speed = 4
let ppTab = [3, 3, 3, 3, 2, 2, 2, 2, 2, 2]


let s = k.toString()[0];
let wt = odp.toString()[0];

const zyw = zywTab[Math.floor(Math.random() * zywTab.length)];
const pp = ppTab[Math.floor(Math.random() * ppTab.length)];

const characterPrinter = `---------------------
WW: ${ww}
US: ${us}
K: ${k}
ODP: ${odp}
ZR: ${zr}
INT: ${int}
SW: ${sw}
OGD: ${ogd}

A: 1
Żyw: ${zyw}
S: ${s}
Wt: ${wt}
Sz: ${speed}
Mag: 0
PO: 0
PP: ${pp}`;

console.log(characterPrinter);
