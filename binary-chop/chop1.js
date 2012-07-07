
var chop = window.chop || {};

chop[1] = function(find, arr){
	var indx = -1;
	var low = 0;
	var high = arr.length - 1;
	var half;
	while(high > low){
		half = parseInt((high - low) / 2, 10) + low;
		if(find <= arr[half]){
			high = half;
		} else {
			low = half + 1;
		}
	}
	if(find === arr[high]){
		indx = high;
	}
	return indx;
};