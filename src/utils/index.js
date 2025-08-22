export const createIdMap = (arr) => {
	return arr.reduce((acc, curr) => {
		if (curr.id) {
			const { id } = curr;
			acc[id] = !acc[id] ? [curr] : acc[id].push(curr);
		}

		return acc;
	}, {});
};

export const generateRandomGradient = () => {
	const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;

	const color1 = randomColor(); 
	const color2 = randomColor(); 
	const color3 = randomColor(); 

	const angle = Math.floor(Math.random() * 360);
	
	return `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;
};