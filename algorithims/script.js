// Running Sum of 1d Array

const runningSum = function (nums) {
	let arr = [];
	let numTotal = 0;

	for (let i = nums[0]; i <= nums.length; i++) {
		numTotal += i;
		arr.push(numTotal);
	}
	return arr;
};
