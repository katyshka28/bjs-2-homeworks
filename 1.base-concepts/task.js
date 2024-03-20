"use strict"

function solveEquation(a, b, c) {
	let descreminant = Math.pow(b, 2) - 4 * a * c;
	if (descreminant < 0) {
		return [];
	} else if (descreminant === 0) {
		let root = -b / (2 * a);
		return [root];
	} else if (descreminant > 0) {
		let root1 = (-b + Math.sqrt(descreminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(descreminant)) / (2 * a);
		return [root1, root2];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 100 / 12;
	let S = amount - contribution;
	let montPay = S * (P + (P / (Math.pow((1 + P), countMonths) - 1)));
	let summ = montPay * countMonths

	return parseFloat(summ.toFixed(2));
}