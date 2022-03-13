import {cecha, krag} from "./modules/basicStats.js";
import {ktoToJest} from "./modules/whoIsThis.js";
import {skillRandom} from "./modules/skills.js";


const printer = (`
Random NPC: ${ktoToJest}

Ziemia: ${krag.ziemia} | Wytrzymałość: ${cecha.wytrzymalosc} | Siła Woli: ${cecha.silaWoli}
Ogień: ${krag.ogien} | Zręczność: ${cecha.zrecznosc} | Inteligencja: ${cecha.inteligencja}
Woda: ${krag.ziemia} | Siła: ${cecha.sila} | Spostrzegawczość: ${cecha.spostrzegawczosc}
Powietrze: ${krag.powietrze} | Refleks: ${cecha.refleks} | Intuicja: ${cecha.intuicja}
Pustka: ${krag.pustka}

Mistrzostwo w: ${skillRandom()} 
Inne istotne umiejętności: ${skillRandom()}, ${skillRandom()}, ${skillRandom()}   
 
Miecz: ${cecha.kenjutsu} (Atak: !${cecha.kenjutsu + cecha.zrecznosc}z${cecha.zrecznosc}) | Obrażenia: (katana średniej jakości 3z2): !${cecha.katanaRoll + cecha.sila}l${cecha.katanaKeep}
Trudność Trafienia | Bez zbroi: ${cecha.refleks * 5} | Lekka zbroja: ${cecha.refleks * 5 + 5} | Ciężka zbroja: ${cecha.refleks * 5 + 10}
Rany: ${krag.ziemia * 2} na poziom | Rany całość: ${krag.ziemia * 2 * 8}
-------------------------------------------------------------------------`);

console.log(printer);