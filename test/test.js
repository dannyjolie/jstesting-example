/* jshint ignore:start */
var require = require('requirejs');
/* jshint ignore:end */
require.config({
	baseUrl: '.',
	paths: {
		'sinon': 'node_modules/sinon',
		'chai': 'node_modules/chai',
		'specs': 'test/specs/specs',
		'demo': 'src/js/modules/demo'
	}
});


require('specs');