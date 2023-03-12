## Setup e2e

* Initialize a package.json
* initialize a tsconfig: npx -p typescript tsc --init
* yarn add -D playwright @playwright/test @cucumber/cucumber typescript ts-node
* in tsconfig add: "noImplicitAny": false, 


# @regression testing

* With regression testing, we're making sure that existing code works fine with new functionality, bug fixes or a change in the existing feature.
* New code should not impact the existing functionality of the code.
* All test cases are re-executed to check that the previous functionality of the application is still working
* Regression test can be performed on a new build when there is a significant change in the original code.
* Regression means: re-test those parts of the application, which are unchanged.

## @smoke

* When we for the first time have to test new functionality, we are smoke testing

## Sanity Testing

* With sanity testing, we test the main functionality of new code, without going really deep into the subject.
* It has to be a quick evaluation of the new functionality, to see if it has no issues. After this we need to evaluate if there has to be further detailed testing.
1. Verify and validate the veracity of essential functionalities.
2. Evaluate any new functionalities or any changes added.
3. Ensure that introduced changes doesn't affect existing functionalities.
4. Tests rational thinking and logic implementations of developers.

Sanity testing is not scripted, but done manually.

> Check why we don't use AfterAll hook with closing the browser, instead we close the browser after every test.

## Hooks

`global.browser.newContext();`, this is an isolated incognito like session with a browser instance, starting this before every test makes an complete isolated fresh session.

`global.context.newPage();` A context can have multiple pages, but for every test we initiate one single new page

At the end of each test we close the page. At the end of all test we close the browser!


## Video debug

See the Bofore and After hooks, there we setup screenshots when a test fails, and a video recording for every ran test.

## Cucumber World setup

Cucumber world is an isolated context for our scenario, we can set and recall some state for each scenario
We can keep a state between steps with it.
This is an advantage of using a global variable. A global variable could be overwritten when running tests in parallel.
With cucumber world any state is stored independently from each test.

* With World we can initialize our browser, page and context, instead of doing that within Hooks

## cucumber.js as entrypoint

In this example we're going to use babel, to be able to use es6+ features in that script. Personally I think that this is not really needed.

## env file for configuration

* in the yarn script we add a env tag taht tellls us where the common.env is
* With that file we make all our configurations, and use those constants in places that is needs, like reports locations, borwser types, etc...


## Mappings

In this tutorial we're gooing to create mappings so that we can abstract selections.
We're going te extend Cucumber World, so that we can make a global configuration across our suite

This setup creates mappings for:
* Hosts
* Pages
* 
