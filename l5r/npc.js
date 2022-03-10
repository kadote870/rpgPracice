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

let ktoToJest;
// const ktoToJestRoll = Math.floor((Math.random() * 100) + 1);
const ktoToJestRoll = 1

if (ktoToJestRoll < 5) {
    ktoToTable = ['Kami', 'Istota Metafizyczna', 'Fortuna']
    ktoToJest = ktoToTable[Math.floor(Math.random() * ktoToTable.length)];

} else if (ktoToJestRoll < 10) {
    ktoToTable = ['Wysoki urzędnik cesarskiego dworu (dom cesarski)',
        'Wysoki urzędnik cesarskiego dworu (inny klan)',
        'Ktoś z najbliższego otoczenia cesarza',
        'Ktoś z bliskiej rodziny cesarza']
    ktoToJest = ktoToTable[Math.floor(Math.random() * ktoToTable.length)];

} else if (ktoToJestRoll < 15) {
//dygnitarz

    const zJakiegoKlanuOnJestRoll = Math.floor((Math.random() * 100) + 1);

    if (zJakiegoKlanuOnJestRoll > 10) {
        klanTable = ['Feniks', 'Jednorożec', 'Krab', 'Lew', 'Skorpion', 'Smok', 'Żuraw'];
    } else {
        klanTable = ['Borsuk', 'Lis', 'Modliszka', 'Osa', 'Ważka', 'Wróbel', 'Sokół', 'Stonoga', 'Zając', 'Żółw', 'Dom Cesarski'];
    }

    let zJakiegoKlanuOnJest = klanTable[Math.floor(Math.random() * klanTable.length)];

    ktoToJest = 'Wysoki dygnitarz / Ktoś z najbliższego otoczenia jednej z czołowych postaci poszczególnego klanu: ' + zJakiegoKlanuOnJest;

} else if (ktoToJestRoll < 45) {
    //Samuraje

    const zJakiegoKlanuOnJestRoll = Math.floor((Math.random() * 100) + 1);

    if (zJakiegoKlanuOnJestRoll > 10) {
        klanTable = ['Feniks', 'Jednorożec', 'Krab', 'Lew', 'Skorpion', 'Smok', 'Żuraw'];
    } else {
        klanTable = ['Borsuk', 'Lis', 'Modliszka', 'Osa', 'Ważka', 'Wróbel', 'Sokół', 'Stonoga', 'Zając', 'Żółw', 'Dom Cesarski'];
    }

    let zJakiegoKlanuOnJest = klanTable[Math.floor(Math.random() * klanTable.length)];

    ktoToJest = 'Samuraj - Bushi / Shugenja z klanu: ' + zJakiegoKlanuOnJest;

} else if (ktoToJestRoll < 65) {
    ktoToJest = 'Heimin: Kupiec / Rzemieślnik / Artysta / Mnich';
} else if (ktoToJestRoll < 85) {
    ktoToJest = 'Heimin: Chłop';
} else {
    ktoToJest = 'Eta / Ronin';
}

const skillRandom = () => skills[Math.floor(Math.random() * skills.length)];

const skills = ['Aktorstwo', 'Ceremonia parzenia herbaty', 'Dyplomacja', 'Etykieta', 'Fałszerstwo', 'Gawędziarstwo',
    'Handel', 'Hazard', 'Heraldyka', 'Historia', 'Iaijutsu – pojedynek', 'Jeździectwo', 'Kaligrafia', 'Kyujutsu - Łuk',
    'Malarstwo', 'Medycyna', 'Medytacja', 'Kenjutsu - Miecz', 'Miecznik', 'Muzyka', 'Obrona', 'Płatnerz', 'Poezja',
    'Polowanie', 'Prawo', 'Rzemiosło', 'Shintao', 'Skradanie się', 'Szczerość', 'Śledztwo', 'Ślusarstwo', 'Taktyka',
    'Taniec', 'Teologia', 'Torturowanie', 'Trucizny', 'Uwodzenie', 'Wachlarz bojowy', 'Walka wręcz', 'Wiedza',
    'Wysportowanie', 'Zapasy', 'Zielarstwo'];

const printer = (`
Random NPC: ${ktoToJest}

Ziemia: ${krag.ziemia} | Wytrzymałość: ${cecha.wytrzymalosc} | Siła Woli: ${cecha.silaWoli}
Ogień: ${krag.ogien} | Zręczność: ${cecha.zrecznosc} | Inteligencja: ${cecha.inteligencja}
Woda: ${krag.ziemia} | Siła: ${cecha.sila} | Spostrzegawczość: ${cecha.spostrzegawczosc}
Powietrze: ${krag.powietrze} | Refleks: ${cecha.refleks} | Intuicja: ${cecha.intuicja}
Pustka: ${krag.pustka}

Mistrzostwo w: ${skillRandom()} 
Inne istotne umiejętności: ${skillRandom()}, ${skillRandom()}, ${skillRandom()}   
 
Miecz: ${cecha.umiejetnoscKenjutsu} (Atak: !${cecha.umiejetnoscKenjutsu + cecha.zrecznosc}z${cecha.zrecznosc}) | Obrażenia: (katana średniej jakości 3z2): !${cecha.katanaRoll + cecha.sila}l${cecha.katanaKeep}
Trudność Trafienia | Bez zbroi: ${cecha.refleks * 5} | Lekka zbroja: ${cecha.refleks * 5 + 5} | Ciężka zbroja: ${cecha.refleks * 5 + 10}
Rany: ${krag.ziemia * 2} na poziom | Rany całość: ${krag.ziemia * 2 * 8}`);

console.log(printer);