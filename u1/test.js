function exercise07() {
	const setA = new Set([2, 4, 6, 8]);
	const setB = new Set([1, 2, 3, 4, 8, 9]);
	const setAuB = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const setAB = new Set([...setA, ...setB]);
	const setAnCBuSetCAnB = new Set([...setAuB].filter((x) => !setAB.has(x)));

	return setAnCBuSetCAnB;
}

const a = exercise07();
console.log('🚀 ~ file: test.js ~ line 12 ~ a', a);
