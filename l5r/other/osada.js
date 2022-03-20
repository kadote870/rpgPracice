// const status = [
//     '0 - wymiera',
//     '9 - wioska nie ma sobie równych i przynosi w każdym kwartale przynajmniej 1200 koku zysku',
//     '2- osada ledwo przędzie',
//     '1- osada ledwo przędzie'
// ];

const coWyrozniaTaOsade = ['Alkohol', 'Alkohol', 'Alkohol', 'Alkohol', 'Alkohol', 'Artyści', 'Artyści', 'Artyści', 'Artyści', 'Artyści', 'Bambus', 'Bambus', 'Bambus', 'Mosty', 'Mosty', 'Mosty', 'Mosty', 'Cieśle', 'Cieśle', 'Cieśle', 'Cieśle', 'Cieśle', 'Jaskinie', 'Jaskinie', 'Wypadki niebiańskie', 'Kuchmistrze', 'Kuchmistrze', 'Kuchmistrze', 'Bawełna', 'Bawełna', 'Bawełna', 'Bawełna', 'Rzemieślnicy', 'Rzemieślnicy', 'Rzemieślnicy', 'Rzemieślnicy', 'Rzemieślnicy', 'Sztukmistrze', 'Sztukmistrze', 'Sztukmistrze', 'Sztukmistrze', 'Sztukmistrze', 'Festiwal lub święto', 'Festiwal lub święto', 'Festiwal lub święto', 'Jedzenie', 'Jedzenie', 'Jedzenie', 'Las', 'Las', 'Sady Owocowe', 'Sady Owocowe', 'Sady Owocowe', 'Ogrody', 'Ogrody', 'Ogrody', 'Gejsze', 'Zboże', 'Zboże', 'Zboże', 'Jubilerzy', 'Jezioro (staw, sadzawka itp.)', 'Jezioro (staw, sadzawka itp.)', 'Młyny', 'Młyny', 'Młyny', 'Kopalnie', 'Krajobraz (klify, ostańce, wodospad itp.)', 'Krajobraz (klify, ostańce, wodospad itp.)', 'Naturalny port', 'Naturalny port', 'Święta sadzawka', 'Szczególna odmiana ryżu', 'Rzeka (strumień, potok, bród itp.)', 'Rzeka (strumień, potok, bród itp.)', 'Rzeka (strumień, potok, bród itp.)', 'Sznury', 'Kaplica', 'Kaplica', 'Kaplica', 'Kaplica', 'Jedwab', 'Jedwab', 'Kowale', 'Kowale', 'Kowale', 'Kowale', 'Murarze', 'Murarze', 'Słodycze', 'Herbata', 'Herbata', 'Herbata', 'Świątynia', 'Świątynia', 'Tofu', 'Tofu', 'Tofu', 'Tkacze', 'Tkacze'];

const coWyrozniaTaOsadeRoll = coWyrozniaTaOsade[Math.floor(Math.random() * coWyrozniaTaOsade.length)];

let wiocha

if (coWyrozniaTaOsadeRoll === 'Festiwal lub święto') {
    const festiwal = ['Festiwal Kanto', 'Festiwal Płatków Wiśni', 'Festiwal Setsuban', 'Festiwal Bon', 'Festiwal Rzeki Gwiazd', 'Święto kami (lokalne)', 'Dzień Krzyków (święto lokalne)', 'Oshogatsu (Nowy Rok)'];
    const festiwalRoll = festiwal[Math.floor(Math.random() * festiwal.length)];
    wiocha = coWyrozniaTaOsadeRoll + ': ' + festiwalRoll;
} else {
    wiocha = coWyrozniaTaOsadeRoll
}

console.log(wiocha)