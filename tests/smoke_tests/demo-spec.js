var JuliemrHomePage = require('../../pages/JuliemrHomePage');

describe('Protractor Demo App', function() {
	var page = new JuliemrHomePage();
	
	function add(a,b){
		page.setFirstNumber(a);
		page.setSecondNumber(b);
		page.clickGoButton();
	}
	
	beforeEach(function(){
		  page.get();
	});
  
	it('should have a title', function() {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
	
	it('should add numbers properly', function () {
		add(1,3);
		expect(page.getLastResult()).toEqual('4');
		add(3,4);
		expect(page.getLastResult()).toEqual('7');
		
		expect(page.getHistoryCount()).toEqual(2);
		expect(page.getLatestFromHistory()).toContain('3 + 4');
		expect(page.getFirstFromHistory()).toContain('1 + 3');
	});
	
	it('should substract numbers properly', function (){
		page.setFirstNumber(3);
		page.setSecondNumber(2);
		element(by.cssContainingText('option', '-')).click();
		page.clickGoButton();
		
		expect(page.getLastResult()).toEqual('1');
	});
});