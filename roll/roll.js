export const rollD5 = () => Math.floor((Math.random() * 5) + 1);
export const rollD6 = () => Math.floor((Math.random() * 6) + 1);
export const rollD100 = () => Math.floor((Math.random() * 100) + 1);

export const roll_2k10_and_add_20 = () => {
    return Math.floor((Math.random() * 10) + 1) +
        Math.floor((Math.random() * 10) + 1)
        + 20;
}