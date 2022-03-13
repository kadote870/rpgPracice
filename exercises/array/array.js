const diceRoll = [statWW, statUS, statK, statOdp,
    statZr, statInt, statSW, statOgd]

diceRoll.forEach(Math.floor((Math.random() * 10) + 1) +
    Math.floor((Math.random() * 10) + 1)
    + 20)


// // const printertest = (`---------------------
// // WW: ${diceRoll[statWW]} US: ${diceRoll[statUS]}
// // K: ${statK} ODP: ${statOdp} ZR: ${statZr} INT: ${statInt} SW: ${statSW} OGD: ${statOgd}
// // `
//
// const printertest = (`---------------------
// WW: ${diceRoll[statWW]} US: ${diceRoll[statUS]}`)
//
//
// console.log(printertest)
