const rollStat = () => Math.floor((Math.random() * 5) + 1);

const cecha = {
    //ziemia
    wytrzymalosc: rollStat(),
    silaWoli: rollStat(),
    //ogien
    zrecznosc: rollStat(),
    inteligencja: rollStat(),
    //woda
    sila: rollStat(),
    spostrzegawczosc: rollStat(),
    //powietrze
    refleks: rollStat(),
    intuicja: rollStat(),
    //walka
    kenjutsu: rollStat(),
    katanaRoll: 3,
    katanaKeep: 2,
};
const krag = {
    ziemia: Math.min(cecha.silaWoli, cecha.wytrzymalosc),
    ogien: Math.min(cecha.zrecznosc, cecha.inteligencja),
    woda: Math.min(cecha.sila, cecha.spostrzegawczosc),
    powietrze: Math.min(cecha.refleks, cecha.intuicja),
    pustka: rollStat(),
};
const skills = ['Aktorstwo', 'Ceremonia parzenia herbaty', 'Dyplomacja', 'Etykieta', 'Fałszerstwo', 'Gawędziarstwo',
    'Handel', 'Hazard', 'Heraldyka', 'Historia', 'Iaijutsu – pojedynek', 'Jeździectwo', 'Kaligrafia', 'Kyujutsu - Łuk',
    'Malarstwo', 'Medycyna', 'Medytacja', 'Kenjutsu - Miecz', 'Miecznik', 'Muzyka', 'Obrona', 'Płatnerz', 'Poezja',
    'Polowanie', 'Prawo', 'Rzemiosło', 'Shintao', 'Skradanie się', 'Szczerość', 'Śledztwo', 'Ślusarstwo', 'Taktyka',
    'Taniec', 'Teologia', 'Torturowanie', 'Trucizny', 'Uwodzenie', 'Wachlarz bojowy', 'Walka wręcz', 'Wiedza',
    'Wysportowanie', 'Zapasy', 'Zielarstwo'];
const skillRandom = () => skills[Math.floor(Math.random() * skills.length)];

const klanRoll = Math.floor((Math.random() * 100) + 1);

if (klanRoll > 10) {
    klanTable = ['Feniks', 'Jednorożec', 'Krab', 'Lew', 'Skorpion', 'Smok', 'Żuraw'];
} else {
    klanTable = ['Borsuk', 'Lis', 'Modliszka', 'Osa', 'Ważka', 'Wróbel',
        'Sokół', 'Stonoga', 'Zając', 'Żółw', "Dom cesarski - niski prestiż"];
}

let jakiKlan = klanTable[Math.floor(Math.random() * klanTable.length)];

const ktoToJestRoll = Math.floor((Math.random() * 100) + 1);
// const ktoToJestRoll = 11

if (ktoToJestRoll < 5) {
    ktoToTable = ['Kami', 'Istota Metafizyczna', 'Fortuna']
    ktoToJest = ktoToTable[Math.floor(Math.random() * ktoToTable.length)];

} else if (ktoToJestRoll < 10) {
    ktoToTable = ['Urzędnik cesarskiego dworu (Dom Cesarski)',
        'Urzędnik cesarskiego dworu (' + jakiKlan + ')',
        'Ktoś z najbliższego otoczenia cesarza',
        'Ktoś z bliskiej rodziny cesarza']
    ktoToJest = ktoToTable[Math.floor(Math.random() * ktoToTable.length)];

} else if (ktoToJestRoll < 15) {
    ktoToTable = ['Wysoki dygnitarz klanu: ' + jakiKlan,
        'Ktoś z najbliższego otoczenia jednej z czołowych klanu: ' + jakiKlan]
    ktoToJest = ktoToTable[Math.floor(Math.random() * ktoToTable.length)];

} else if (ktoToJestRoll < 45) {
    ktoToJest = 'Samuraj - Bushi / Shugenja z klanu: ' + jakiKlan;

} else if (ktoToJestRoll < 65) {
    ktoToTable = ['Kupiec', 'Rzemieślnik', 'Artysta', 'Mnich', 'Gejsza'];
    ktoToJest = 'Heimin: ' + ktoToTable[Math.floor(Math.random() * ktoToTable.length)];

} else if (ktoToJestRoll < 85) {
    ktoToJest = 'Heimin: Chłop';
} else {
    ktoToTable = ['Eta', 'Ronin', 'Gejsza', 'Kurtyzana', 'Przestępca'];
    ktoToJest = 'Eta: ' + ktoToTable[Math.floor(Math.random() * ktoToTable.length)];
}


const printer = (`
Random NPC: ${ktoToJest}

Ziemia: ${krag.ziemia} | Wytrzymałość: ${cecha.wytrzymalosc} | Siła Woli: ${cecha.silaWoli}
Ogień: ${krag.ogien} | Zręczność: ${cecha.zrecznosc} | Inteligencja: ${cecha.inteligencja}
Woda: ${krag.ziemia} | Siła: ${cecha.sila} | Spostrzegawczość: ${cecha.spostrzegawczosc}
Powietrze: ${krag.powietrze} | Refleks: ${cecha.refleks} | Intuicja: ${cecha.intuicja}
Pustka: ${krag.pustka}

Mistrzostwo w: ${skillRandom()} 
Inne istotne umiejętności: ${skillRandom()}, ${skillRandom()}, ${skillRandom()}   
 
Miecz: ${cecha.umiejetnoscKenjutsu} (Atak: !${cecha.kenjutsu + cecha.zrecznosc}z${cecha.zrecznosc}) | Obrażenia: (katana średniej jakości 3z2): !${cecha.katanaRoll + cecha.sila}l${cecha.katanaKeep}
Trudność Trafienia | Bez zbroi: ${cecha.refleks * 5} | Lekka zbroja: ${cecha.refleks * 5 + 5} | Ciężka zbroja: ${cecha.refleks * 5 + 10}
Rany: ${krag.ziemia * 2} na poziom | Rany całość: ${krag.ziemia * 2 * 8}`);

console.log(printer);