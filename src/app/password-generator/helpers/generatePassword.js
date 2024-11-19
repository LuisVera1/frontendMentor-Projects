const distribute = (op) => {
	//importance level
	const impLevel = {
		lowercase: 36,
		uppercase: 26,
		numbers: 10,
		symbols: 8,
	};

	//get total
	const types = Object.keys(impLevel);
	const total = types.reduce((acc, item) => {
		if (op[item] === true) return acc + impLevel[item];
		return acc;
	}, 0);

	//get amount of Sym & Num
	let aNumbers = 0;
	let aSymbols = 0;

	if (op.numbers === true) {
		aNumbers = Math.ceil((impLevel.numbers / total) * op.length);
	}

	if (op.symbols === true) {
		aSymbols = Math.ceil((impLevel.symbols / total) * op.length);
	}

	//get amount lower & uppercase
	const remaining = op.length - aNumbers - aSymbols;
	let aLower = 0;
	let aUpper = 0;

	// if upper & lower are selected
	if (op.lowercase === true && op.uppercase === true) {
		aLower = Math.ceil(remaining / 2);
		aUpper = Math.floor(remaining / 2);
	}

	//if only upper is selected
	if (op.lowercase === false && op.uppercase === true) aUpper = remaining;

	//if only lower is selected
	if (op.uppercase === false && op.lowercase === true) aLower = remaining;

	//return
	return {
		lowercase: aLower,
		uppercase: aUpper,
		numbers: aNumbers,
		symbols: aSymbols,
		length: op.length,
	};
};

const addChars = (dis) => {
	//characters map
	const upper = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];
	const lower = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const symbols = ['.', '-', '_', '#', '!', '%', '&', '@'];

	// selected characters
	let selecChars = '';

	// - - - - ADD CHARS

	//adding uppercase
	for (let i = 0; i < dis.uppercase; i++) {
		const char = upper[Math.round(Math.random() * (upper.length - 1))];
		if (char === undefined) console.log('error upp');
		selecChars += char;
	}

	//adding lowercase
	for (let i = 0; i < dis.lowercase; i++) {
		const char = lower[Math.round(Math.random() * (lower.length - 1))];
		if (char === undefined) console.log('error low');
		selecChars += char;
	}

	//adding numbers
	for (let i = 0; i < dis.numbers; i++) {
		const char = numbers[Math.round(Math.random() * (numbers.length - 1))];
		if (char === undefined) console.log('error num');
		selecChars += char;
	}

	//adding symbols
	for (let i = 0; i < dis.symbols; i++) {
		const char = symbols[Math.round(Math.random() * (symbols.length - 1))];
		if (char === undefined) console.log('error sym');
		// const char = '@';
		selecChars += char;
	}

	//return characters
	return selecChars;
};

const blendChars = (string) => {
	let shuffle = string.split('');
	const length = string.length;
	const cycles = length ** 2;

	for (let i = 0; i < cycles; i++) {
		const direction = Math.round(Math.random()) == 0 ? 'backward' : 'forward';
		const pos = i % length;

		// backward
		if (direction === 'backward' && pos > 0) {
			[shuffle[pos - 1], shuffle[pos]] = [shuffle[pos - 1], shuffle[pos]];
		}

		// forward
		if (direction === 'forward' && pos < length - 1) {
			[shuffle[pos], shuffle[pos + 1]] = [shuffle[pos + 1], shuffle[pos]];
		}
	}

	return shuffle.join('');
};

export const generatePassword = (op) => {
	//distibute # of chars by type
	const distribution = distribute(op);

	//select chars
	const allCharacters = addChars(distribution);

	//blend chars
	const password = blendChars(allCharacters);

	//return
	return password;
};
