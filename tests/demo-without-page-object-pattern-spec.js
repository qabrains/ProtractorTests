'use strict';
describe('Protractor Demo App - without Page object pattern -->', () => {

	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var minusOperator = element(by.cssContainingText('option', '-'));
	var goButton = element(by.id('gobutton'));
	var lastResult = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));

	function add(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		goButton.click();
	};

	beforeEach( () => {
		browser.get('http://juliemr.github.io/protractor-demo/');
		//browser.pause();
	});

	it('should have a title', () => {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it('should add numbers properly', () =>  {
		add(1,3);
		expect(lastResult.getText()).toEqual('4');
		add(3,4);
		expect(lastResult.getText()).toEqual('7');
		
		expect(history.count()).toEqual(2);
		expect(history.first().getText()).toContain('3 + 4');
		expect(history.last().getText()).toContain('1 + 3');
	});

	it('should subtract numbers properly', () => {
		firstNumber.sendKeys(3);
		secondNumber.sendKeys(2);
		minusOperator.click()
		goButton.click();
		expect(lastResult.getText()).toEqual('1');
	});
});