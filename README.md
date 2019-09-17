[![Build Status](https://travis-ci.org/qabrains/ProtractorTests.png)](https://travis-ci.org/qabrains/ProtractorTests)

# **What's in this repository**

**How to use this repository:**
----

**Setup:**

- Install protractor using `npm install -g protractor` command
- Run `npm run pretest` command
- Run `npm install` command

**Running Tests:**

- Run `npm run regression` command to run all the tests
- Run `npm run smoketest` command to run smoke tests

**Features:**
----

- _Tests:_
    - Basic test (refer to [demo-without-page-object-pattern-spec.js](https://github.com/qabrains/ProtractorTests/blob/master/tests/demo-without-page-object-pattern-spec.js) file)

    - Refactoring tests and using Page Object Pattern (refer to [demo-data-driven-testing-spec.js](https://github.com/qabrains/ProtractorTests/blob/master/tests/demo-with-page-object-pattern-spec.js) file)

    - Data driven testing (refer to [demo-with-page-object-pattern-spec.js](https://github.com/qabrains/ProtractorTests/blob/master/tests/demo-data-driven-testing-spec.js) file)

- _Execution:_
    - Running tests on
        - Chrome
        - Firefox
        - Headless Chrome
    browsers
    - Parallel execution
    - Integration with Travis CI (refer to [.travis.yml](https://github.com/qabrains/ProtractorTests/blob/master/.travis.yml) and [travis.conf.js](https://github.com/qabrains/ProtractorTests/blob/master/travis.conf.js) files)

    Refer to [local.conf.js](https://github.com/qabrains/ProtractorTests/blob/master/local.conf.js) file for more info


- _Results:_
    - Generate test execution report using [protractor-jasmine2-html-reporter](https://www.npmjs.com/package/protractor-jasmine2-html-reporter) npm package 
    - Publish Travis CI results in 'QA Brains Slack team --> protractor-tests-ci' channel (click [here](https://join.slack.com/t/qabrains/shared_invite/MjI5NzUyNjQyMjkwLTE1MDMzNjY3MzctMzVjODgwN2VkOA) to join the slack team, if interested)

- _CI:_
    - Travis

**Example website:**
----

- http://juliemr.github.io/protractor-demo/

**Troubleshooting:**
----

- If you are running tests against FF browser and getting 'The path to the driver executable must be set by the webdriver.gecko.driver...' error then

    - Download geckodriver latest version from [here](https://github.com/mozilla/geckodriver/releases)

    - On Unix systems you can do the following to append it to your system’s search path, if you’re using a bash-compatible shell:

        `export PATH=$PATH:/path/to/geckodriver`

    - On Windows you need to update the Path system variable to add the full directory path to the executable

**Have a feedback?**
---

If you have any feedback or question, please email me at kapil.sethi9@gmail.com
