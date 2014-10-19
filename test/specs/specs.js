define([
	'demo',
	'sinon',
	'chai'
], function(numberfunctions, sinon, chai){
	// var sinon = require('sinon');
	// var assert = require('assert');
	var expect = chai.expect;
	var sandbox;

	beforeEach(function(){
		sandbox = sinon.sandbox.create();
		sandbox.stub(console, 'error');
	});

	afterEach(function(){
		sandbox.restore();
	});
	describe('MyFunc', function(){
		it('should add one', function(){
			var etTall = numberfunctions.addOne('1');
			expect(2).to.equal(etTall);
			// assert.equal(2, etTall);
		});
		it('should increment by one', function(){
			var etTall = numberfunctions.incrementOne('1');
			expect(2).to.equal(etTall);
			// assert.equal(2, etTall);
		});
		it('should fail when incrementing a non-integerish value', function(){
			// By changing the test value, it becomes evident that parseInt falsely
			// returns an integer value when input is an array of numbers/stringnumbers or
			// is a sequence of numbers in a string separated by space/newline. Derp indeed.
			numberfunctions.incrementOne('derp');
			sinon.assert.called(console.error);
		});
		it('should fail when adding a non-integerish value', function(){
			numberfunctions.addOne('derp');
			sinon.assert.called(console.error);
		});

	});

});