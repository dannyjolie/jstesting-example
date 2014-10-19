require.config({
	baseUrl: '.',
	paths: {
		'demo': 'js/modules/demo'
	}
});

require(['demo'], function(numberfunctions){
	/* Initiate app */
	var btn = document.getElementById('calc-button');
	btn.onclick = function(){
		// Find current value
		var number = document.getElementById('number').innerHTML;

		// Run both addition functions
		var firstAnswer = numberfunctions.incrementOne(number);
		var secondAnswer = numberfunctions.addOne(number);

		// Print answers
		document.getElementById('first-answer').innerHTML = firstAnswer;
		document.getElementById('second-answer').innerHTML = secondAnswer;

	};
});