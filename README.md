# **What's in this repository**

**How to use this repository:**
----

- Install protractor using '````npm install -g protractor````' command
- Run '````npm install````' command
- Run '````protractor conf.js````' command to run all the tests

**Tests:**
----

- [demo-without-page-object-pattern-spec.js](https://github.com/qabrains/ProtractorTests/blob/master/tests/demo-without-page-object-pattern-spec.js)

    - This file has got 3 tests

    - As the name suggests, it does not use any design pattern. If you are familiar with page object pattern then fell free to skip going through this file and refer to [demo-with-page-object-pattern-spec.js](https://github.com/qabrains/ProtractorTests/blob/master/tests/demo-with-page-object-pattern-spec.js) file

    - Tests in this file along with tests in [demo-with-page-object-pattern-spec.js](https://github.com/qabrains/ProtractorTests/blob/master/tests/demo-with-page-object-pattern-spec.js) file can be used as an example for 'how to refactor existing tests to use page object pattern'    

- [demo-with-page-object-pattern-spec.js](https://github.com/qabrains/ProtractorTests/blob/master/tests/demo-with-page-object-pattern-spec.js)

    - This file has got same 3 tests as [demo-without-page-object-pattern-spec.js](https://github.com/qabrains/ProtractorTests/blob/master/tests/demo-without-page-object-pattern-spec.js) file but uses page object pattern

- [demo-data-driven-testing-spec.js](https://github.com/qabrains/ProtractorTests/blob/master/tests/demo-data-driven-testing-spec.js)

    - This file has an example of writing data driven tests. It reads data from the [test data json file](https://github.com/qabrains/ProtractorTests/blob/master/test-data/add-functionality-test-data.json) and run the test for each set of test data

**Troubleshooting:**
----

- If you are running tests against FF browser and getting 'The path to the driver executable must be set by the webdriver.gecko.driver...' error then

    - Download geckodriver latest version from [here](https://github.com/mozilla/geckodriver/releases)

    - On Unix systems you can do the following to append it to your system’s search path, if you’re using a bash-compatible shell:

        ````export PATH=$PATH:/path/to/geckodriver````

    - On Windows you need to update the Path system variable to add the full directory path to the executable