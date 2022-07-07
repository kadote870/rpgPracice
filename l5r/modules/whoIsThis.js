import {dice_roll} from "../../roll/roll.js";

export let ktoToJest;

let klanTable;
let ktoToTable;
let klasa;
let specjalistaTable;

if (roll_d100() > 10) {
    klanTable = ['Feniks', 'Jednorożec', 'Krab', 'Lew', 'Skorpion', 'Smok', 'Żuraw'];
} else {
    klanTable = ['Borsuk', 'Lis', 'Modliszka', 'Osa', 'Ważka', 'Wróbel',
        'Sokół', 'Stonoga', 'Zając', 'Żółw', "Dom cesarski - niski prestiż"];
}

export let jakiKlan = klanTable[Math.floor(Math.random() * klanTable.length)];

const ktoToJestRoll = dice_roll(100);

if (ktoToJestRoll < 5) {
    ktoToTable = ['Kami', 'Istota Metafizyczna', 'Fortuna'];
    ktoToJest = ktoToTable[Math.floor(Math.random() * ktoToTable.length)];

} else if (ktoToJestRoll < 10) {
    ktoToTable = ['Urzędnik cesarskiego dworu (Dom Cesarski)',
        'Urzędnik cesarskiego dworu (' + jakiKlan + ')',
        'Ktoś z najbliższego otoczenia cesarza',
        'Ktoś z bliskiej rodziny cesarza'];
    ktoToJest = ktoToTable[Math.floor(Math.random() * ktoToTable.length)];

} else if (ktoToJestRoll < 15) {
    ktoToTable = ['Wysoki dygnitarz klanu: ' + jakiKlan,
        'Ktoś z najbliższego otoczenia jednej z czołowych klanu: ' + jakiKlan +
        '\n(np. słurząca pani Bayuschi Kachiko, przyboczny Hida Yakomo, ordynans Akodo Toturiego etc. etc.)']
    ktoToJest = ktoToTable[Math.floor(Math.random() * ktoToTable.length)];

} else if (ktoToJestRoll < 45) {
    //Szlachcic
    const roll = dice_roll(100);
    if (roll < 10) {
        klasa = 'Shugenja';
    }
    if (roll < 30) {
        specjalistaTable = ['Dyplomata', 'Szpieg', 'Specjalista (wg klanu)',
            'Mistrz Miecza', 'Kupiec', 'Namiestnik', 'Pomniejszy Dajmio']
        klasa = specjalistaTable[Math.floor(Math.random() * specjalistaTable.length)];
    } else {
        klasa = 'Bushi';
    }
    ktoToJest = 'Szlachcic - ' + klasa + ' z klanu: ' + jakiKlan;

} else if (ktoToJestRoll < 65) {
    ktoToTable = ['Kupiec', 'Rzemieślnik (Cieśla)', 'Artysta', 'Mnich', 'Gejsza'];
    ktoToJest = 'Heimin: ' + ktoToTable[Math.floor(Math.random() * ktoToTable.length)];

} else if (ktoToJestRoll < 80) {
    ktoToJest = 'Heimin: Chłop';

} else if (ktoToJestRoll === 100) {
    ktoToJest = 'Gajin';

} else {
    ktoToTable = ['Eta', 'Ronin', 'Gejsza', 'Kurtyzana', 'Przestępca'];
    ktoToJest = 'Eta: ' + ktoToTable[Math.floor(Math.random() * ktoToTable.length)];
}