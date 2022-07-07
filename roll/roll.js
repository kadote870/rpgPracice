export function dice_roll_explode(dice) {
	let rolls = [];
	let sum = 0;

	if (dice > 1) {
		for (let i = 0; ; i++) {
			rolls.push(Math.floor(Math.random() * dice + 1));
			if (rolls[i] < dice) {
				break;
			}
		}
		for (let i = 0; i < rolls.length; i++) {
			sum = sum + rolls[i];
		}
		return sum;
	}
	if (dice === 1) {
		sum = 1;
		return sum;
	} else {
		return sum;
	}
}

export function dice_roll(dice){
	let sum = 0;
	if (dice > 1) {
		return sum = Math.floor(Math.random() * dice + 1);
	}
	if (dice === 1) {
		sum = 1;
		return sum;
	} else {
		return sum;
	}
};


export const roll_2d10_and_add_10 = () => {
	return dice_roll(10) + dice_roll(10) + 10;
};

export const roll_2d10_and_add_20 = () => {
	return dice_roll(10) + dice_roll(10) + 20;
};

export const roll_2d10_and_add_30 = () => {
	return dice_roll(10) + dice_roll(10) + 30;
};