'use strict';
class JuliemrHomePage {

	constructor() {
	this.firstNumber = element(by.model('first'));
	this.secondNumber = element(by.model('second')); 
	this.goButton = element(by.id('gobutton'));
	this.lastResult = element(by.binding('latest'));
	this.history = element.all(by.repeater('result in memory'));
	}

	operatorElement(operatorSign) {
		return element(by.cssContainingText('option', operatorSign));
	};

	get() {
		browser.get('http://juliemr.github.io/protractor-demo/');
	};

	getHomePageTitle() {
		return browser.getTitle();
	}

	setFirstNumber(number) {
		this.firstNumber.sendKeys(number);
	};

	setSecondNumber(number) {
		this.secondNumber.sendKeys(number);
	};

	selectOperator(operatorSign) {
		this.operatorElement(operatorSign).click();
	}

	clickGoButton() {
		this.goButton.click();
	};

	getLastResult() {
		return this.lastResult.getText();
	};

	getHistoryCount() {
		return this.history.count();
	};

	getLatestFromHistory() {
		return this.history.first().getText();
	};

	getFirstFromHistory() {
		return this.history.last().getText();
	};
};
module.exports = JuliemrHomePage;