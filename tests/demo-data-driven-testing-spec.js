var JuliemrHomePage = require('../pages/JuliemrHomePage');
var testData = require('../test_data/add_functionality_test_data.json');

describe('Protractor data driven testing', function() {
	var page = new JuliemrHomePage();

	function add(a,b)
	{
		page.setFirstNumber(a);
		page.setSecondNumber(b);
		page.clickGoButton();
	}

	beforeEach(function(){
		page.get();
	});

	testData.forEach(function(data){
		it('should test add functionality for all the data present in the json file', function(){
			add(data.firstNumber, data.secondNumber);
			expect(page.getLastResult()).toEqual(data.expectedResult);
		});
	});	
});