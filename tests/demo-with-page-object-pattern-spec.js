'use strict';
var JuliemrHomePage = require('../pages/juliemr-home-page.po');

describe('Protractor Demo App - with Page object pattern -->', () => {
	var page = new JuliemrHomePage();

	function add(a,b) {
		page.setFirstNumber(a);
		page.setSecondNumber(b);
		page.clickGoButton();
	}

	beforeEach(() => {
		page.get();
	});

	it('should have a title', () => {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it('should add numbers properly', () => {
		add(1,3);
		expect(page.getLastResult()).toEqual('4');
		add(3,4);
		expect(page.getLastResult()).toEqual('7');

		expect(page.getHistoryCount()).toEqual(2);
		expect(page.getLatestFromHistory()).toContain('3 + 4');
		expect(page.getFirstFromHistory()).toContain('1 + 3');
	});

	it('should substract numbers properly', () => {
		page.setFirstNumber(3);
		page.setSecondNumber(2);
		page.selectOperator('-')
		page.clickGoButton();

		expect(page.getLastResult()).toEqual('1');
	});
});