export const roll_d5 = () => Math.floor(Math.random() * 5 + 1);

export const roll_d6 = () => Math.floor(Math.random() * 6 + 1);

const roll_d10 = () => Math.floor(Math.random() * 10 + 1);

export const roll_d100 = () => Math.floor(Math.random() * 100 + 1);

export const roll_2d10_and_add_10 = () => {
	return roll_d10() + roll_d10() + 10;
};

export const roll_2d10_and_add_20 = () => {
	return roll_d10() + roll_d10() + 20;
};

export const roll_2d10_and_add_30 = () => {
	return roll_d10() + roll_d10() + 30;
};