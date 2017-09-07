var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
	framework: 'jasmine2',
	// seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
	'tests/*-spec.js'],

	// to run specific test suites
	suites:{
		smoketest:'tests/demo-with-*.js',
		regression:'tests/*-spec.js'
	},

	capabilities:{
		browserName: 'chrome',
		shardTestFiles: true,
		maxInstances: 3,
		
		// uncomment below chromeOptions section to run tests using chrome headless browser
		// chromeOptions: {
 		// 	 args: [ "--headless", "--disable-gpu", "--window-size=800x600" ]
		// }	
	},

	// uncomment below capabilities section to run tests using FF browser
	// #########################################################################
	// capabilities:{
	// 	browserName: 'firefox',
	// 	shardTestFiles: true,
	// 	maxInstances: 3
	// },
	// #########################################################################

	// #########################################################################
	// uncomment below multiCapabilities section to run same set of tests using FF and chrome browsers 
	// multiCapabilities: [
		
	// 	{browserName: 'firefox',
	// 	shardTestFiles: true,
	// 	maxInstances: 3},

	// 	{browserName: 'chrome',
	// 	shardTestFiles: true,
	// 	maxInstances: 3},
	// ],
	// #########################################################################

	onPrepare: () => {
		jasmine.getEnv().addReporter(
			new Jasmine2HtmlReporter({
			savePath: 'jasmine2-html-reporter-results/screenshots'})
		);
	}
};