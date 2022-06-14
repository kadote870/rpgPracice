import {ktoToJest, jakiKlan} from "./whoIsThis.js";

console.log(ktoToJest)

let tier1 = ['Kami', 'Istota Metafizyczna', 'Fortuna'];
let tier2 = ['Urzędnik cesarskiego dworu (Dom Cesarski)',
    'Urzędnik cesarskiego dworu (' + jakiKlan + ')',
    'Ktoś z najbliższego otoczenia cesarza',
    'Ktoś z bliskiej rodziny cesarza'];


let tier3 = ['Wysoki dygnitarz klanu: ' + jakiKlan,
    'Ktoś z najbliższego otoczenia jednej z czołowych klanu: ' + jakiKlan + '(np. słurząca pani Bayuschi Kachiko, przyboczny Hida Yakomo, ordynans Akodo Toturiego etc. etc.)']

let tier4 = ['Szlachcic - Shugenja z klanu: ' + jakiKlan,
    'Szlachcic - Dyplomata z klanu: ' + jakiKlan,
    'Szlachcic - Szpieg z klanu: ' + jakiKlan,
    'Szlachcic - Specjalista (wg klanu) z klanu: ' + jakiKlan,
    'Szlachcic - Mistrz Miecza z klanu: ' + jakiKlan,
    'Szlachcic - Kupiec z klanu: ' + jakiKlan,
    'Szlachcic - Namiestnik z klanu: ' + jakiKlan,
    'Szlachcic - Pomniejszy Dajmio z klanu: ' + jakiKlan,
    'Szlachcic - Bushi z klanu: ' + jakiKlan];


let tier5 = ['Heimin: Kupiec', 'Heimin: Rzemieślnik (Cieśla)', 'Heimin: Artysta', 'Heimin: Mnich', 'Heimin: Gejsza'];


let tier6 = 'Heimin: Chłop';

let tier7 = 'Gajin';

let tier8 = ['Eta', 'Ronin', 'Gejsza', 'Kurtyzana', 'Przestępca'];
