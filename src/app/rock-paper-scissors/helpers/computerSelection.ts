export const computerSelection = (basicType: boolean): string => {
	const limit = basicType == true ? 3 : 5;
	const selection = Math.floor(Math.random() * limit);

	const items = {
		0: 'rock',
		1: 'paper',
		2: 'scissors',
		3: 'lizard',
		4: 'spock',
	};

	return items[selection as keyof typeof items];
};
