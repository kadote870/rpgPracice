const skills = {
    inteligencja: ['Historia', 'Malarstwo', 'Medycyna', 'Prawo', 'Shintao', 'Teologia', 'Trucizny', 'Wiedza', 'Zielarstwo'],
    intuicja: ['Aktorstwo', 'Dyplomacja', 'Etykieta', 'Gawędziarstwo', 'Handel', 'Hazard', 'Iaijutsu – pojedynek', 'Jeździectwo', 'Muzyka', 'Poezja', 'Szczerość', 'Torturowanie', 'Uwodzenie'],
    refleks: ['Kyujutsu - Łuk'],
    sila: ['Zapasy'],
    spostrzegawczosc: ['Heraldyka', 'Kaligrafia', 'Polowanie', 'Taktyka'],
    zrecznosc: ['Muzyka', 'Fałszerstwo', 'Jeździectwo', 'Miecz', 'Obrona', 'Skradanie się', 'Ślusarstwo', 'Taniec', 'Wachlarz bojowy', 'Walka wręcz'],

    pustka: ['Ceremonia parzenia herbaty', 'Medytacja'],
    ziemia: ['Miecznik', 'Płatnerz'],

    rozne: ['Rzemiosło', 'Śledztwo', 'Wysportowanie']
}

const skillsArrayList = [skills.intuicja, skills.zrecznosc, skills.inteligencja, skills.spostrzegawczosc, skills.pustka, skills.rozne, skills.refleks, skills.ziemia, skills.sila];

export const skillRandom = () => {
    const getSkillsList = skillsArrayList[Math.floor(Math.random() * skillsArrayList.length)];
    return getSkillsList[Math.floor(Math.random() * getSkillsList.length)];
}

//other way
// const skillsArrayList2 = [...skills.intuicja, ...skills.zrecznosc, ...skills.inteligencja, ...skills.spostrzegawczosc, ...skills.pustka, ...skills.rozne, ...skills.refleks, ...skills.ziemia, ...skills.sila];
// const skillsArrayList3 = () => skillsArrayList2[Math.floor(Math.random() * skillsArrayList2.length)];