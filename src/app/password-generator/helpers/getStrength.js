const optionsValue = {
	uppercase: 26,
	lowercase: 26,
	numbers: 10,
	symbols: 9,
};

const categories = {
	tooWeak: 1000,
	weak: 2000000,
	medium: 2000000000,
};

export const level = {
	empty: 0,
	tooWeak: 1,
	weak: 2,
	medium: 3,
	strong: 4,
};

export const getStrength = (op) => {
	// count possibilities
	const types = Object.keys(op);

	const possibilities = types.reduce((acc, type) => {
		if (op[type] === true) return acc + optionsValue[type];
		return acc;
	}, 0);

	const combinations = possibilities ** op.length;
	const secondsInDay = 60 * 60 * 24;
	const time = combinations / secondsInDay;

	const crackSpeed = time / (20000 * 100);

	// strenth classification
	if (crackSpeed < categories.tooWeak) {
		return level.tooWeak;
	} else if (crackSpeed >= categories.tooWeak && crackSpeed < categories.weak) {
		return level.weak;
	} else if (crackSpeed >= categories.weak && crackSpeed < categories.medium) {
		return level.medium;
	} else {
		return level.strong;
	}
};
