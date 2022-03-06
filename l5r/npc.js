const rollStat = () => Math.floor((Math.random() * 5) + 1);

const cechaWytrzymalosc = rollStat();
const cechaSilaWoli = rollStat();
const kragZiemia = Math.min(cechaSilaWoli, cechaWytrzymalosc);

const cechaZrecznosc = rollStat();
const cechaInteligencja = rollStat();
const kragOgnien = Math.min(cechaZrecznosc, cechaInteligencja);

const cechaSila = rollStat();
const cechaSpostrzegawczosc = rollStat();
const kragWoda = Math.min(cechaSila, cechaSpostrzegawczosc);

const cechaRefleks = rollStat();
const cechaIntuicja = rollStat();
const kragPowietrze = Math.min(cechaRefleks, cechaIntuicja);

const kragPustka = rollStat();

const umiejetnoscKenjutsu = rollStat();

const katanaRoll = 3;
const katanaKeep = 2;

let ktoToJest;
const ktoToJestRoll = Math.floor((Math.random() * 100) + 1);

if (ktoToJestRoll < 5) {
    ktoToJest = 'Kami'
} else if (ktoToJestRoll < 10) {
    ktoToJest = 'Ktoś z najbliższego otoczenia/rodziny cesarza';
} else if (ktoToJestRoll < 15) {
    ktoToJest = 'Ktoś z najbliższego otoczenia jednej z czołowych postaci poszczególnego klanu';
} else if (ktoToJestRoll < 45) {
    ktoToJest = 'Samuraj - Bushi/Shugenja';

    klan = [
        skorpion = ['Bayushi', 'Shosuro', 'Soshi', 'Yogo'],
        feniks = ['Issawa', 'Shiba', 'Asako'],
        jednorozec = ['Shinjo', 'Ide', 'Iuchi', 'Otaku', 'Moto'],
        krab = ['Hida', 'Hiruma', 'Kaiu', 'Kuni', 'Yasuki'],
        lew = ['Akodo', 'Matsu', 'Ikoma', 'Kitsu'],
        smok = ['Togashi', 'Agasha', 'Mirumoto', 'Kitsuki'],
        zwuraw = ['Doji', 'Kakita', 'Daidoji', 'Asahina'],
        malyKlan = ['Borsuk - Ichiro' , 'Lis - Kitsune' , 'Modliszka - Gusai', 'Osa', 'Ważka - Tonbo', 'Wróbel - Suzume','Sokół - Toritaka(nieoficjalnie)', 'Stonoga - Moshi', 'Zając', 'Żółw'],
        domCesarski = [ 'Seppun', 'Otomo', 'Miya']
    ]
} else if (ktoToJestRoll < 65) {
    ktoToJest = 'Kupiec / Rzemieślnik / Mnich';
} else if (ktoToJestRoll < 85) {
    ktoToJest = 'Chłop';
} else {
    ktoToJest = 'Eta';
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
Ziemia: ${kragZiemia} | Wytrzymałość: ${cechaWytrzymalosc} | Siła Woli: ${cechaSilaWoli}
Ogień: ${kragOgnien} | Zręczność: ${cechaZrecznosc} | Inteligencja: ${cechaInteligencja}
Woda: ${kragWoda} | Siła: ${cechaSila} | Spostrzegawczość: ${cechaSpostrzegawczosc}
Powietrze: ${kragPowietrze} | Refleks: ${cechaRefleks} | Intuicja: ${cechaIntuicja}
Pustka: ${kragPustka}

Mistrzostwo w: ${skillRandom()} 
Inne istotne umiejętności: ${skillRandom()}, ${skillRandom()}, ${skillRandom()}   
 
Miecz: ${umiejetnoscKenjutsu} (Atak: !${umiejetnoscKenjutsu + cechaZrecznosc}z${cechaZrecznosc}) | Obrażenia: (katana średniej jakości 3z2): !${katanaRoll + cechaSila}l${katanaKeep}
Trudność Trafienia | Bez zbroi: ${cechaRefleks * 5} | Lekka zbroja: ${cechaRefleks * 5 + 5} | Ciężka zbroja: ${cechaRefleks * 5 + 10}
Rany: ${kragZiemia * 2} na poziom | Rany całość: ${kragZiemia * 2 * 8}`);

console.log(printer);