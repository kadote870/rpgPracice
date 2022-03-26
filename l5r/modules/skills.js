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

export const skillRandom = () => {
    const getSkillsList = skillsArrayList[Math.floor(Math.random() * skillsArrayList.length)];
    return getSkillsList[Math.floor(Math.random() * getSkillsList.length)]
}
