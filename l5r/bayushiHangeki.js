export const bayushiHangeki = {
    cechaWytrzymalosc: 2,
    cechaSilaWoli: 3,
    kragZiemia: Math.min(this.cechaWytrzymalosc, this.cechaSilaWoli),

    cechaZrecznosc: 3,
    cechaInteligencja: 3,
    kragOgien: Math.min(this.cechaZrecznosc, this.cechaInteligencja),

    cechaSila: 3,
    cechaSpostrzegawczosc: 3,
    kragWoda: Math.min(this.cechaSila, this.cechaSpostrzegawczosc),

    cechaRefleks: 3,
    cechaIntuicja: 3,
    kragPowietrze: Math.min(this.cechaRefleks, this.cechaIntuicja),

    pustka: 2,

    umiejetnoscKenjutsu: 4,

    katanaHangekiRoll: 3,
    katanaHangekiKeep: 2,
}