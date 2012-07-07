
window.chop = window.chop || [];

window.chop[2] = function chop2(find, arr){
	var indx = -1;
	var half, val;
	if(arr.length <= 1){
		if(arr[0] === find){
			return 0;
		} else {
			return -1;
		}
	}

	half = parseInt((arr.length) / 2, 10);
	if(find < arr[half]){
		return chop2(find, arr.slice(0, half));
	} else {
		val = chop2(find, arr.slice(half));
		val = val >= 0 ? half + val : val;
		return val;
	}
};