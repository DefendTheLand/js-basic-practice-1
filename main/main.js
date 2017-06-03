// Write your cade below:
function caclRemaindar(x1,x2) {
	if(x2===0||isNaN(x2)) {
		return 'cant calculate'
	} else {
		return x1%x2;
	} 
};

function caclSum(numArray) {
	var sum = 0;
	var length = numArray.length;
	for(var i = 0;i < length;i++){
		sum += numArray[i];
	}
	return sum;
};

function caclSumInConditon(numArray,x) {
	var sum = 0;
	var length = numArray.length;
	for(var i = 0;i < length;i++){
		if (numArray[i]<x) {
			sum += numArray[i];
		}
	}
	return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}