// fibNums
const fibNums = num => {
    if (num <= 2) return 1;

    return fibNums(num - 1) + fibNums(num - 2)
};

// w/ Memoization
const fibNums = (num, mem = {}) => { 
	if (num in mem) return mem[num];
	if (num <= 2) return 1;
	
	mem[num] = fibNums(num - 1, mem) + fibNums(num - 2, mem);
	return mem[num]; 
};

// w/ Tabulation
const fibNums = num => {
	const tab = Array(num + 1).fill(0);
	tab[0] = 0;
	tab[1] = 1;

	for (let i = 0; i < num; i++) {
		tab[i + 1] += tab[i];
		tab[i + 2] += tab[i];
	};

	return tab[num]; 
};