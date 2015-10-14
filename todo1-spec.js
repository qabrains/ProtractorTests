describe('Protractor Demo App', function() {
	
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var lastResult = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));
  
	function add(a,b){
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);
		goButton.click();
	}
	
	beforeEach(function(){
		browser.get('http://juliemr.github.io/protractor-demo/');  
	});
  
	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
	
	it('should add numbers properly', function () {
		add(1,3)
		expect(lastResult.getText()).toEqual('4');
		add(3,4)
		expect(lastResult.getText()).toEqual('7');
		
		expect(history.count()).toEqual(2);
		expect(history.first().getText()).toContain('3 + 4');
		expect(history.last().getText()).toContain('1 + 3');
	});
	
	it('should substract numbers properly', function (){
		firstNumber.sendKeys(3);
		secondNumber.sendKeys(2);
		element(by.cssContainingText('option', '-')).click();
		goButton.click();
		
		expect(lastResult.getText()).toEqual('1');
	});
	
	it('should have a history', function(){
			
	});
});