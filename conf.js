exports.config = {
	framework: 'jasmine2',
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: [
	'*-spec.js'],
	
	capabilities:{
		//browserName: 'phantomjs', 'phantomjs.binary.path': require('phantomjs').path,
		browserName: 'chrome',
		shardTestFiles: true,
		maxInstances: 2}
	};