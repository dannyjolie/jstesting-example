define([
], function(){
	// Helper function to validate input
	function _validateInput(value){
		var num = parseInt(value, 10);
		if(isNaN(num)){
			throw "Bogus input dude!";
		} else{
			return num;
		}
	}

	// Make a couple of increment functions, and test them to see if they both work!
	var incrementOne = function(a){
		var ret;
		// Check our argument
		try {
			// Parse int
			ret = _validateInput(a);
		} catch(e) {
			console.error(e);
		}
		ret++;
		return ret;
	};

	var addOne = function(a){
		// Same as incrementOne:
		var ret;
		try {
			ret = _validateInput(a);
		} catch(e) {
			console.error(e);
		}
		return ret + 1;
	};

	return {
		incrementOne: incrementOne,
		addOne: addOne
	};
});