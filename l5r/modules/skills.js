const skillsAll = ['Aktorstwo', 'Ceremonia parzenia herbaty', 'Dyplomacja', 'Etykieta', 'Fałszerstwo', 'Gawędziarstwo',
    'Handel', 'Hazard', 'Heraldyka', 'Historia', 'Iaijutsu – pojedynek', 'Jeździectwo', 'Kaligrafia', 'Kyujutsu - Łuk',
    'Malarstwo', 'Medycyna', 'Medytacja', 'Kenjutsu - Miecz', 'Miecznik', 'Muzyka', 'Obrona', 'Płatnerz', 'Poezja',
    'Polowanie', 'Prawo', 'Rzemiosło', 'Shintao', 'Skradanie się', 'Szczerość', 'Śledztwo', 'Ślusarstwo', 'Taktyka',
    'Taniec', 'Teologia', 'Torturowanie', 'Trucizny', 'Uwodzenie', 'Wachlarz bojowy', 'Walka wręcz', 'Wiedza',
    'Wysportowanie', 'Zapasy', 'Zielarstwo'];

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

export const skillRandom = () => skillsAll[Math.floor(Math.random() * skillsAll.length)];