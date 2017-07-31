'use strict';
var JuliemrHomePage = require('../pages/juliemr-home-page.po');
var testData = require('../test-data/add-functionality-test-data.json');

describe('Protractor Demo App - data driven testing -->', () => {
	var page = new JuliemrHomePage();

	function add(a,b) {
		page.setFirstNumber(a);
		page.setSecondNumber(b);
		page.clickGoButton();
	}

	beforeEach( () => {
		page.get();
	});

	testData.forEach((data) => {
		it('should test add functionality for all the data present in the json file', () => {
			add(data.firstNumber, data.secondNumber);
			expect(page.getLastResult()).toEqual(data.expectedResult);
		});
	});	
});