interface input {
	userItem: string;
	computerItem: string;
}

export const setWinner = (data: input): string => {
	const { userItem: user, computerItem: computer } = data;

	//draw
	if (user == computer) return 'draw';

	// rock > scissors | lizard
	if (user == 'rock') {
		if (computer == 'scissors' || computer == 'lizard') return 'user';
	}

	// paper > rock | spock
	if (user == 'paper') {
		if (computer == 'rock' || computer == 'spock') return 'user';
	}

	// scissors > paper | lizard
	if (user == 'scissors') {
		if (computer == 'paper' || computer == 'lizard') return 'user';
	}

	// lizard > spock | paper
	if (user == 'lizard') {
		if (computer == 'spock' || computer == 'paper') return 'user';
	}

	// spock >  scissors | rock
	if (user == 'spock') {
		if (computer == 'scissors' || computer == 'rock') return 'user';
	}

	// if user does not beat to computer
	return 'computer';
};
