export const countTypes = (options) => {
	const keys = Object.keys(options);

	const totalCount = keys.reduce((acc, item) => {
		if (options[item] == true) return acc + 1;
		return acc + 0;
	}, 0);

	return { ...options, count: totalCount };
};
