// Running Sum of 1d Array

let runningSum = function (nums) {
	let arr = [];
	let numTotal = 0;
	for (i = 0; i < nums.length; i++) {
		numTotal += nums[i];
		arr.push(numTotal);
		// console.log(nums);
	}
	return arr;
};

// runningSum([5, 6, 1]);

console.log(runningSum([1, 3, 6, 9]));
