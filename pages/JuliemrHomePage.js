var JuliemrHomePage = function(){
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var lastResult = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));
  
	this.get = function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
	};

	this.setFirstNumber = function(number){
		firstNumber.sendKeys(number);
	};

	this.setSecondNumber = function(number){
		secondNumber.sendKeys(number);
	};

	this.clickGoButton = function(){
		goButton.click();
	};

	this.getLastResult = function(){
		return lastResult.getText();
	};

	this.getHistoryCount= function(){
		return history.count();
	};

	this.getLatestFromHistory = function(){
		return history.first().getText();
	};

	this.getFirstFromHistory = function(){
		return history.last().getText();
	};

};
module.exports = JuliemrHomePage;