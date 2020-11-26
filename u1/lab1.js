// Author: Olle Bergkvist
// Student acronym: olbe19

/*
 * MA1487 Matematisk modellering
 * Kursmoment 01
 *
 * Exercise 01-10 Set theory
 * Exercise 11-14 Probability
 * Exercise 15-18 Combinatorics and Probability
 * Exercise 19-23 Probability with sets
 * Exercise 24-30 Conditional probability
 */

/**
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * for documentation for the set object in JavaScript
 *
 * In the following exercises the complements are denoted with prefix C.
 * Thus, CA is the complement of A, C(A ∩ B) is the complement of A ∩ B.
 *
 * The set U is the universal set.
 */

/**
 * Exercise01
 * Create the following sets
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * Compute and the return the set A ∩ B
 *
 * @returns {Set} the set A ∩ B
 */
function exercise01() {
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
	const setA = new Set([2, 4, 6, 8]);
	const setB = new Set([1, 2, 3, 4, 8, 9]);
	const setAnB = new Set([...setA].filter((x) => setB.has(x)));

	return setAnB;
}

/**
 * Exercise02
 * Create the following sets
 * A = {1,3,5,7,9}
 * B = {1,2,3,4,5,6,7,8,9,10}
 *
 * Compute and return the set A ∪ B
 *
 * @returns {Set} the set A ∪ B
 */
function exercise02() {
	const setA = new Set([1, 3, 5, 7, 9]);
	const setB = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	const setAuB = new Set(setA);

	for (let elem of setB) {
		setAuB.add(elem);
	}

	return setAuB;
}

/**
 * Exercise03
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * * U = {5,6,7}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set A ∩ CB
 */
function exercise03() {
	const setA = new Set([2, 4, 6, 8]);
	const setB = new Set([1, 2, 3, 4, 8, 9]);
	const setAuB = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const CB = new Set([...setAuB].filter((x) => !setB.has(x)));
	const setAnCB = new Set([...setA].filter((x) => CB.has(x)));

	return setAnCB;
}

/**
 * Exercise04
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set CA ∩ B
 */
function exercise04() {
	const setA = new Set([2, 4, 6, 8]);
	const setB = new Set([1, 2, 3, 4, 8, 9]);
	const setAuB = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const CA = new Set([...setAuB].filter((x) => !setA.has(x)));
	const setCAnB = new Set([...setB].filter((x) => CA.has(x)));

	return setCAnB;
}

/**
 * Exercise05
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set CA ∩ CB
 */
function exercise05() {
	const setA = new Set([2, 4, 6, 8]);
	const setB = new Set([1, 2, 3, 4, 8, 9]);
	const setAuB = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const removeBFromAuB = new Set([...setAuB].filter((x) => !setB.has(x)));
	const setCAnCB = new Set([...removeBFromAuB].filter((x) => !setA.has(x)));

	return setCAnCB;
}

/**
 * Exercise06
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set C(A ∪ B)
 */
function exercise06() {
	const setA = new Set([2, 4, 6, 8]);
	const setB = new Set([1, 2, 3, 4, 8, 9]);
	const setAuB = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const removeBFromAuB = new Set([...setAuB].filter((x) => !setB.has(x)));
	const setCAuB = new Set([...removeBFromAuB].filter((x) => !setA.has(x)));

	return setCAuB;
}

/**
 * Exercise07
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set (A ∩ CB)∪(CA ∩ B)
 */
function exercise07() {
	// 1, 3, 6, 9
	const setA = new Set([2, 4, 6, 8]);
	const setB = new Set([1, 2, 3, 4, 8, 9]);
	const setAuB = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const setCA = new Set([...setAuB].filter((x) => !setA.has(x)));
	const setCB = new Set([...setAuB].filter((x) => !setB.has(x)));
	const setAnCB = new Set([...setA].filter((x) => setCB.has(x)));
	const setCAnB = new Set([...setCA].filter((x) => setB.has(x)));
	const setAnCBuCAnB = new Set([...setAnCB, ...setCAnB]);

	return setAnCBuCAnB;
}
/**
 * Exercise 08
 * Write a function to detemine if A is a proper subset of B
 *
 * @returns {Boolean} true if A is a proper subset of B, otherwise false
 */
function exercise08(A, B) {
	if (
		[...A].every((elem) => [...B].includes(elem)) &&
		[...A].length != [...B].length
	) {
		return true;
	}

	return false;
}

/**
 * Exercise09
 * Let A and B be sets. Write a function that returns the number of
 * elements in the set A ∪ B
 *
 * @param {Set} A
 * @param {Set} B
 * @return {Number} the number of elements in the set A ∪ B
 *
 */
function exercise09(A, B) {
	let union = new Set([...A, ...B]);
	const answer = union.size;

	return answer;
}

/**
 * Exercise10
 * Two sets A and B are disjoint if they have no elements in common
 * Write a function to determine if A and B are disjoint
 *
 * @param {Set} A
 * @param {Set} B
 * @return {Boolean} true if A and B are disjoint, otherwise false
 */
function exercise10(A, B) {
	let intersection = new Set([...A].filter((x) => B.has(x)));

	if ([...intersection].length === 0) {
		return true;
	}

	return false;
}

/**
 * Exercise11
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice exactly p dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show exactly p dots with 3 decimal precision
 */
function exercise11(n, p) {
	const favorableOutcomes = 1;
	const totalOutcomes = n;

	const calculation = favorableOutcomes / totalOutcomes;

	const answer = calculation.toFixed(3);

	return answer;
}

/**
 * Exercise12
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice shows p or less dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show p dots or less
 * with 3 decimal precision
 */
function exercise12(n, p) {
	const favorableOutcomes = p;
	const nrOfSidesOfDice = n;

	const calculation = favorableOutcomes / nrOfSidesOfDice;

	const answer = calculation.toFixed(3);

	return answer;
}

/**
 * Exercise13
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice shows at least p dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show at least p dots
 * with 3 decimal precision
 */
function exercise13(n, p) {
	const favorableOutcomes = n - p + 1;
	const nrOfSidesOfDice = n;

	const calculation = favorableOutcomes / nrOfSidesOfDice;

	const answer = calculation.toFixed(3);

	return answer;
}

/**
 * Exercise14
 * A regular six sided dice is tossed 100000 times.
 * Compute the relative frequence of observering a 5 or 6 when tossing a
 * dice with 3 decimal precision
 *
 * @returns {Number}    The relative frequency a dice will show a 5 or 6 with 3 decimal precision
 */
function exercise14() {
	function rollDice(min, max) {
		return min + Math.floor(Math.random() * (max - min + 1));
	}

	let diceArrayWithFavorableRolls = [];
	const nrOfRolls = 100000;

	for (let index = 0; index < nrOfRolls; index++) {
		let diceValue = rollDice(1, 6);

		if (diceValue === 5 || diceValue === 6) {
			diceArrayWithFavorableRolls.push(diceValue);
		}
	}

	const calculation = diceArrayWithFavorableRolls.length / nrOfRolls;
	const answer = Math.round(calculation * 1000) / 1000;

	return answer;
}

/**
 * Exercise15
 * Write a function that returns n factorial (n!)
 *
 * @param {Number} n
 * @return {Number} n-factorial (n!)
 */

function exercise15(n) {
	function factorial(number) {
		var rval = 1;
		for (var i = 2; i <= number; i++) rval = rval * i;
		return rval;
	}

	const number = n;
	const answer = factorial(number);

	return answer;
}

/**
 * Exercise16
 * Write a function that returns the number of ways you can choose k from n
 * options with respect to order
 *
 * @param {Number} n
 * @param {NUmber} k
 * @return {Number}
 */
function exercise16(n, k) {
	Math.factorial = function (n) {
		var i = n;
		while (--i) n *= i;
		return n;
	};

	Math.combinations = function (n, r) {
		const difference = n - r;
		if (n < r) return 0;
		if (n === r) return 1;

		return Math.factorial(n) / Math.factorial(difference);
	};

	chooseK = k;
	fromN = n;
	permutationsChooseKFromN = Math.combinations(fromN, chooseK);

	return permutationsChooseKFromN;
}

/**
 * Exercise17
 * Write a function that return the number of ways you can choose k from n
 * options without respect to order (combinations)
 *
 * @param {Number} n
 * @param {Number} k
 * @return {Number}
 */
function exercise17(n, k) {
	Math.factorial = function (n) {
		var i = n;
		while (--i) n *= i;
		return n;
	};

	Math.combinations = function (n, r, repeats) {
		if (n < r) return 0;
		if (n === r) return 1;

		return Math.factorial(n) / (Math.factorial(r) * Math.factorial(n - r));
	};

	chooseK = k;
	fromN = n;
	combinationsChooseKFromN = Math.combinations(fromN, chooseK);

	return combinationsChooseKFromN;
}

/**
 * Exercise16
 * Given a group of n persons and another group of m persons.
 * Five persons are choosen randomly from both groups.
 * Compute the probability 3 persons are chosen from group 1 and 2 persons are
 * choosen from group 2. Return the answer with 3-decimal precision
 *
 * @param {Number} n total number of people in group 1
 * @param {Number} m total number of people in from group 2
 * @return {Number} Probability described above
 */
function exercise18(n, m) {
	Math.factorial = function (n) {
		var i = n;
		while (--i) n *= i;
		return n;
	};

	Math.combinations = function (n, r, repeats) {
		if (n < r) return 0;
		if (n === r) return 1;
		return Math.factorial(n) / (Math.factorial(r) * Math.factorial(n - r));
	};

	const totalNrOfPeopleGroup1 = n;
	const totalNrOfPeopleGroup2 = m;
	const totalNrOfPeople = totalNrOfPeopleGroup1 + totalNrOfPeopleGroup2;

	const combinations3OutOfGroup1 = Math.combinations(totalNrOfPeopleGroup1, 3);
	const combinations2OutOfGroup2 = Math.combinations(totalNrOfPeopleGroup2, 2);
	const combinations5OutOfTotalNrOfPeople = Math.combinations(
		totalNrOfPeople,
		5
	);

	const favorableOutcome =
		(combinations3OutOfGroup1 * combinations2OutOfGroup2) /
		combinations5OutOfTotalNrOfPeople;

	const answer = favorableOutcome.toFixed(3);

	return answer;
}

/**
 * Exercise19
 * Given two events A and B, such that
 *
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003
 * Pr(CA ∩ B) = 0.12
 *
 * Compute the probability Pr(A ∪ B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A ∪ B) with 3 decimal precision
 */
function exercise19() {
	const probabilityA = 0.16;
	const probabilityAComplimentIntersectionB = 0.12;
	const probabilityAUnionB = probabilityA + probabilityAComplimentIntersectionB;
	const answer = probabilityAUnionB.toFixed(3);

	return answer;
}

/**
 * Exercise20
 * Given two events A and B, such that
 *
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003, and
 * Pr(CA ∩ B) = 0.12
 *
 * Compute the probability Pr(B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(B) with 3 decimal precision
 */
function exercise20() {
	const probabilityAIntersectionB = 0.003;
	const probabilityComplimentAIntersectionB = 0.12;
	const probabilityB =
		probabilityAIntersectionB + probabilityComplimentAIntersectionB;
	const answer = probabilityB.toFixed(3);

	return answer;
}

/**
 * Exercise21
 * Given two events A and B, such that
 *
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003, and
 * Pr(CA ∩ B) = 0.12
 *
 * Compute the probability Pr(A ∩ CB) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A ∩ CB) with 3 decimal precision
 */
function exercise21() {
	const probabilityA = 0.16;
	const probabilityAIntersectionB = 0.003;
	const probabilityAIntersectionComplimentB =
		probabilityA - probabilityAIntersectionB;
	const answer = probabilityAIntersectionComplimentB.toFixed(3);

	return answer;
}

/**
 * Exercise22
 * Let A and B be events such that
 *
 * Pr(A) = x,
 * Pr(B) = y, and
 * Pr(A ∩ B) = z
 *
 * Write a function to determine the probability of Pr(CA ∩ CB),
 * (the probability that neither of the events A nor B occurs)
 * with 3 decimal precision
 *
 * @param {Number} x probability Pr(A)
 * @param {Number} y probability Pr(B)
 * @param {Number} z probability Pr(A ∩ B)
 * @returns {Number} probability of Pr(CA ∩ CB) with 3 decimal precision
 */
function exercise22(x, y, z) {
	// 0.321, 0.416, 0.102), 0.365

	const probabilityA = x;
	const probabilityB = y;
	const probabilityAIntersectionB = z;
	const probabilityThatNeitherANorBOccurs =
		1 - (probabilityA + probabilityB - probabilityAIntersectionB);
	const answer = probabilityThatNeitherANorBOccurs.toFixed(3);

	return answer;
}

/**
 * Exercise23
 * Let A, B and C be event such that
 *
 * Pr(A) = 0.2
 * Pr(B) = 0.3
 * Pr(C) = 0.4
 * The events A and B are independent
 * The events A and C are independent
 * The events B anc C can not occur simultaneously
 *
 * Compute and the return the probability that at
 * least one event will occur (Pr(A ∪ B ∪ C) )with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A ∪ B ∪ C) with 3 decimal precision
 */
function exercise23() {
	const probabilityA = 0.2;
	const probabilityB = 0.3;
	const probabilityC = 0.4;
	const probabilityAIntersectionB = 0.2 * 0.3;
	const probabilityAIntersectionC = 0.2 * 0.4;
	const probabilityThatAtLeastOneEventWillOccur =
		probabilityA +
		probabilityB +
		probabilityC -
		probabilityAIntersectionB -
		probabilityAIntersectionC;
	const answer = probabilityThatAtLeastOneEventWillOccur.toFixed(3);

	return answer;
}

/**
 * Exercise24
 * Let A and B be event such that
 * Pr(A) = x
 * Pr(B) = y
 * Pr(A ∩ B) = z
 *
 * Compute and the return the probability Pr(A|B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A|B) with 3 decimal precision
 */
function exercise24(x, y, z) {
	const probabilityA = x;
	const probabilityB = y;
	const probabilityAIntersectionB = z;
	const probabilityAGivenB = probabilityAIntersectionB / probabilityB;
	const answer = probabilityAGivenB.toFixed(3);

	return answer;
}

/**
 * Exercise25
 * Let A and B be two events such that
 * Pr(A ∩ B) = 0.212, and
 * P(CA ∩ B) = 0.431
 *
 * Compute and return the probability Pr(A|B) with 3 decimal precision
 *
 *
 * @returns {Number} the probability Pr(A|B) with 3 decimal precision
 */
function exercise25() {
	const probabilityAIntersectionB = 0.212;
	const probabilityAComplimentIntersectionB = 0.431;
	const probabilityB =
		probabilityAComplimentIntersectionB + probabilityAIntersectionB;
	const probabilityAGivenB = probabilityAIntersectionB / probabilityB;
	const answer = probabilityAGivenB.toFixed(3);

	return answer;
}

/**
 * Exercise 26
 * Let A and B be two events such that
 * P(A) = 0.8
 * P(A ∩ B) = 0.2, and
 * P(A ∪ B) = 0.9.
 *
 * Compute and return the probability Pr(A|B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A|B) with 3 decimal precision
 */
function exercise26() {
	const probabilityA = 0.8;
	const probabilityAIntersectionB = 0.2;
	const probabilityAUnionB = 0.9;
	const probabilityB =
		probabilityAUnionB - probabilityA + probabilityAIntersectionB;
	const probabilityAGivenB = probabilityAIntersectionB / probabilityB;
	const answer = probabilityAGivenB.toFixed(3);

	return answer;
}

/**
 * Exercise27
 * A regular 6-sided die is tossed twice.
 *
 * Compute and return the probability of an odd sum of the dots with
 * 3 decimal precision given that the sum of the dots is 11 or greater.

 *  @returns {Number} the probability of 2 dice showing an odd sum given
 *                      given that the sum of the dots is 11 or greater
 *                      with 3 decimal precision
 *
 */
function exercise27() {
	const favorableDiceRoll1 = 1; // (5,6)
	const favorableDiceRoll2 = 1; // (6,5)
	const favorableOutcome = favorableDiceRoll1 + favorableDiceRoll2;
	const totalOutcomes = 3; // (5,6), (6,5), (6,6)
	const probability = favorableOutcome / totalOutcomes;
	const answer = probability.toFixed(3);

	return answer;
}

/**
 * Exercise28
 * A gambler is playing a game where the probability of winning is x.
 * Suppose the gambler is playing the game 10 times.
 *
 * Compute and return the probability that the gambler will win the game
 * exactly n times with 3 decimal precision.
 *
 * @param {Number} x probability of winning the game
 * @param {Number} n games won
 * @returns {Number} probability that the gambler will win the game
 *                     exactly n times with 3 decimal precision.
 */
function exercise28(x, n) {
	Math.factorial = function (n) {
		var i = n;
		while (--i) n *= i;
		return n;
	};

	Math.combinations = function (n, r, repeats) {
		if (n < r) return 0;
		if (n === r) return 1;
		// if (repeats) {
		// 	return (
		// 		Math.factorial(n + r - 1) / (Math.factorial(r) * Math.factorial(n - 1))
		// 	);
		// }
		return Math.factorial(n) / (Math.factorial(r) * Math.factorial(n - r));
	};

	const probabilityOfWinning = x;
	const gamesWon = n;
	const gamesPlayed = 10;
	const combinations = Math.combinations(gamesPlayed, gamesWon);
	const difference = gamesPlayed - gamesWon;
	const probabilityOfWinningNTimes =
		combinations *
		probabilityOfWinning ** gamesWon *
		(1 - probabilityOfWinning) ** difference;
	const answer = probabilityOfWinningNTimes.toFixed(3);
	return answer;
}

/**
 * Exercise29 (Bayes' theorem)
 *
 * A fictional university offers three different programmes A,B, and C.
 * Currently 30 students are enrolled in A, 60 in students in B, and 60 students in C.
 *
 * A student enrolled in the A-programme passes an exam with 0.6 probability
 * A student enrolled in the B-programme passes an exam with 0.5 probability
 * A student enrolled in the B-programme passes an exam with 0.4 probability
 *
 * Student X passed the exam.
 * Compute and return the probaility student X is enrolled in the A-programme
 * with 3 decimal precision
 */
function exercise29() {
	const studentsEnrolledInA = 30;
	const studentsEnrolledInB = 60;
	const studentsEnrolledInC = 60;
	const studentPassProbabilityA = 0.6;
	const studentPassProbabilityB = 0.5;
	const studentPassProbabilityC = 0.4;
	const numberOfStudentsPassedInA =
		studentsEnrolledInA * studentPassProbabilityA;
	const numberOfStudentsPassedInB =
		studentsEnrolledInB * studentPassProbabilityB;
	const numberOfStudentsPassedInC =
		studentsEnrolledInC * studentPassProbabilityC;
	const totalNumberOfStudentsPassed =
		numberOfStudentsPassedInA +
		numberOfStudentsPassedInB +
		numberOfStudentsPassedInC;
	const probabilityStudentXIsEnrolledInA =
		numberOfStudentsPassedInA / totalNumberOfStudentsPassed;
	const answer = probabilityStudentXIsEnrolledInA.toFixed(3);

	return answer;
}

/**
 * Exercise30 (Bayes' theorem)
 * In a employee survey, the results shows that x% of the M male employee are satisfied
 * with their salary, and y% of the F female employee are satisfied with their salary.
 *
 * Compute and return the probability a satisfied person is a female
 *
 */
function exercise30(x, y, M, F) {
	const percentageMaleEmployeeSatisfaction = x;
	const percentageFemaleEmployeeSatisfaction = y;
	const numberOfMaleEmployees = M;
	const numberOfFemaleEmployees = F;
	const numberOfSatisfiedMaleEmployees =
		percentageMaleEmployeeSatisfaction * numberOfMaleEmployees;
	const numberOfSatisfiedFemaleEmployees =
		percentageFemaleEmployeeSatisfaction * numberOfFemaleEmployees;
	const totalNumberOfSatisfiedEmployees =
		numberOfSatisfiedMaleEmployees + numberOfSatisfiedFemaleEmployees;
	const probabilitySatisfiedFemaleEmployee =
		numberOfSatisfiedFemaleEmployees / totalNumberOfSatisfiedEmployees;
	const answer = probabilitySatisfiedFemaleEmployee.toFixed(3);

	return answer;
}

module.exports.exercise01 = exercise01;
module.exports.exercise02 = exercise02;
module.exports.exercise03 = exercise03;
module.exports.exercise04 = exercise04;
module.exports.exercise05 = exercise05;
module.exports.exercise06 = exercise06;
module.exports.exercise07 = exercise07;
module.exports.exercise08 = exercise08;
module.exports.exercise09 = exercise09;
module.exports.exercise10 = exercise10;
module.exports.exercise11 = exercise11;
module.exports.exercise12 = exercise12;
module.exports.exercise13 = exercise13;
module.exports.exercise14 = exercise14;
module.exports.exercise15 = exercise15;
module.exports.exercise16 = exercise16;
module.exports.exercise17 = exercise17;
module.exports.exercise18 = exercise18;
module.exports.exercise19 = exercise19;
module.exports.exercise20 = exercise20;
module.exports.exercise21 = exercise21;
module.exports.exercise22 = exercise22;
module.exports.exercise23 = exercise23;
module.exports.exercise24 = exercise24;
module.exports.exercise25 = exercise25;
module.exports.exercise26 = exercise26;
module.exports.exercise27 = exercise27;
module.exports.exercise28 = exercise28;
module.exports.exercise29 = exercise29;
module.exports.exercise30 = exercise30;
