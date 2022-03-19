const skillsAll = ['Aktorstwo', 'Ceremonia parzenia herbaty', 'Dyplomacja', 'Etykieta', 'Fałszerstwo', 'Gawędziarstwo',
    'Handel', 'Hazard', 'Heraldyka', 'Historia', 'Iaijutsu – pojedynek', 'Jeździectwo', 'Kaligrafia', 'Kyujutsu - Łuk',
    'Malarstwo', 'Medycyna', 'Medytacja', 'Kenjutsu - Miecz', 'Miecznik', 'Muzyka', 'Obrona', 'Płatnerz', 'Poezja',
    'Polowanie', 'Prawo', 'Rzemiosło', 'Shintao', 'Skradanie się', 'Szczerość', 'Śledztwo', 'Ślusarstwo', 'Taktyka',
    'Taniec', 'Teologia', 'Torturowanie', 'Trucizny', 'Uwodzenie', 'Wachlarz bojowy', 'Walka wręcz', 'Wiedza',
    'Wysportowanie', 'Zapasy', 'Zielarstwo'];

export const skillRandom = () => skillsAll[Math.floor(Math.random() * skillsAll.length)]


const skills = {
    intuicja: ['Aktorstwo', 'Dyplomacja', 'Etykieta', 'Gawędziarstwo', 'Handel', 'Hazard', 'Iaijutsu – pojedynek', 'Jeździectwo', 'Muzyka', 'Poezja', 'Szczerość', 'Torturowanie', 'Uwodzenie'],
    zrecznosc: ['Muzyka', 'Fałszerstwo', 'Jeździectwo', 'Miecz', 'Obrona', 'Skradanie się', 'Ślusarstwo', 'Taniec', 'Wachlarz bojowy', 'Walka wręcz'],
    inteligencja: ['Historia', 'Malarstwo', 'Medycyna', 'Prawo', 'Shintao', 'Teologia', 'Trucizny', 'Wiedza', 'Zielarstwo'],
    spostrzegawczosc: ['Heraldyka', 'Kaligrafia', 'Polowanie', 'Taktyka'],
    pustka: ['Ceremonia parzenia herbaty', 'Medytacja'],
    rozne: ['Rzemiosło', 'Śledztwo', 'Wysportowanie'],
    refleks: ['Kyujutsu - Łuk'],
    ziemia: ['Miecznik', 'Płatnerz'],
    sila: ['Zapasy']
}

const skillsArrayList = [skills.intuicja, skills.zrecznosc, skills.inteligencja, skills.spostrzegawczosc, skills.pustka, skills.rozne, skills.refleks, skills.ziemia, skills.sila];

const getRandomSkillsList0 = skillsArrayList[Math.floor(Math.random() * skillsArrayList.length)];
const getRandomSkillsList1 = skillsArrayList[Math.floor(Math.random() * skillsArrayList.length)];
const getRandomSkillsList2 = skillsArrayList[Math.floor(Math.random() * skillsArrayList.length)];
const getRandomSkillsList3 = skillsArrayList[Math.floor(Math.random() * skillsArrayList.length)];

const skillRandom0 = getRandomSkillsList0[Math.floor(Math.random() * getRandomSkillsList0.length)];
const skillRandom1 = getRandomSkillsList1[Math.floor(Math.random() * getRandomSkillsList1.length)];
const skillRandom2 = getRandomSkillsList2[Math.floor(Math.random() * getRandomSkillsList2.length)];
const skillRandom3 = getRandomSkillsList3[Math.floor(Math.random() * getRandomSkillsList3.length)];

console.log(getRandomSkillsList0);
console.log(skillRandom0);
console.log(getRandomSkillsList1);
console.log(skillRandom1);
console.log(getRandomSkillsList2);
console.log(skillRandom2);
console.log(getRandomSkillsList3);
console.log(skillRandom3);
