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
