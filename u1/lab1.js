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
	return new Set([]);
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
	return new Set([]);
}

/**
 * Exercise03
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set A ∩ CB
 */
function exercise03() {
	return new Set([]);
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
	return new Set([]);
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
	return new Set([]);
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
	return new Set([]);
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
	return new Set([]);
}

/**
 * Exercise 08
 * Write a function to detemine if A is a proper subset of B
 *
 * @returns {Boolean} true if A is a proper subset of B, otherwise false
 */
function exercise08(A, B) {
	return null;
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
	return null;
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
function exercise10() {
	return null;
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
	return null;
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
	return null;
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
	return null;
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
	return null;
}

/**
 * Exercise15
 * Write a function that returns n factorial (n!)
 *
 * @param {Number} n
 * @return {Number} n-factorial (n!)
 */

function exercise15(n) {
	return null;
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
	return null;
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
	return null;
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
	const dice1 = 2 / 6; // Either a 5 or a 6
	const dice2 = 2 / 6; // Either a 5 or a 6
	const favorableOutcome = dice1 + dice2;
	const answer = favorableOutcome.toFixed(3);

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
