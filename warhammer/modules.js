import {roll_2d10_and_add_10, roll_2d10_and_add_20, roll_2d10_and_add_30} from "../roll/roll.js";

export const races = {
    czlowiek: {
        race: "Czlowiek",
        ww: roll_2d10_and_add_20(),
        us: roll_2d10_and_add_20(),
        k: roll_2d10_and_add_20(),
        odp: roll_2d10_and_add_20(),
        zr: roll_2d10_and_add_20(),
        int: roll_2d10_and_add_20(),
        sw: roll_2d10_and_add_20(),
        ogd: roll_2d10_and_add_20(),
        zyw: [13, 12, 12, 12, 9, 9, 9, 8, 8, 8],
        speed: 4,
        pp: [3, 3, 3, 3, 2, 2, 2, 2, 2, 2]

    },
    elf: {
        race: "Elf",
        ww: roll_2d10_and_add_20(),
        us: roll_2d10_and_add_30(),
        k: roll_2d10_and_add_20(),
        odp: roll_2d10_and_add_20(),
        zr: roll_2d10_and_add_30(),
        int: roll_2d10_and_add_20(),
        sw: roll_2d10_and_add_20(),
        ogd: roll_2d10_and_add_20(),
        zyw: [12, 11, 11, 11, 10, 10, 10, 9, 9, 9],
        speed: 5,
        pp: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2]

    },
    krasnolud: {
        race: "Krasnolud",
        ww: roll_2d10_and_add_30(),
        us: roll_2d10_and_add_20(),
        k: roll_2d10_and_add_20(),
        odp: roll_2d10_and_add_30(),
        zr: roll_2d10_and_add_10(),
        int: roll_2d10_and_add_20(),
        sw: roll_2d10_and_add_20(),
        ogd: roll_2d10_and_add_10(),
        zyw: [14, 13, 13, 13, 12, 12, 12, 11, 11, 11],
        speed: 3,
        pp: [3, 3, 3, 2, 2, 2, 1, 1, 1, 1]

    },
    niziolek: {
        race: "Niziolek",
        ww: roll_2d10_and_add_10(),
        us: roll_2d10_and_add_30(),
        k: roll_2d10_and_add_10(),
        odp: roll_2d10_and_add_10(),
        zr: roll_2d10_and_add_30(),
        int: roll_2d10_and_add_20(),
        sw: roll_2d10_and_add_20(),
        ogd: roll_2d10_and_add_30(),
        zyw: [11, 10, 10, 10, 9, 9, 9, 8, 8, 8],
        speed: 4,
        pp: [3, 3, 3, 3, 2, 2, 2, 2, 2, 2]

    }
}

