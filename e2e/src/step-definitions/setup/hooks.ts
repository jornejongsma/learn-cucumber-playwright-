// import { Before, BeforeAll, After, AfterAll} from "@cucumber/cucumber";
// import { chromium } from "playwright";
import { Before, After, ITestCaseHookParameter} from "@cucumber/cucumber";
import { ScenarioWorld } from "./world";

// BeforeAll( async () => {
//     global.browser = await chromium.launch({
//         headless: false
//     })
// });

// AfterAll( async () => {
//     await global.browser.close()
// })

// Before( async  (scenario) => {
//     // global.context = await global.browser.newContext(); // This was just used as a starting point.
//
//     global.context = await global.browser.newContext({
//             recordVideo: {
//                 dir : `./reports/videos/${scenario.pickle.name}` //The pickle attribute on a scenario holds the actual information about the test, so steps and such.
//             }
//         });
//
//     global.page = await global.context.newPage();
// });

Before( async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
    // global.context = await global.browser.newContext(); // This was just used as a starting point.

    console.log(`running cucumber scenario ${scenario.pickle.name}`); //The pickle attribute on a scenario holds the actual information about the test, so steps and such.

    const contextOptions = {
        recordVideo: {
            dir : `./reports/videos/${scenario.pickle.name}`
        }
    }
    const ready = await this.init(contextOptions)

    return ready
});

After( async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
    const {
        screen: {page, browser}
    } = this

    const scenarioStatus = scenario.result?.status;
    if(scenarioStatus === 'FAILED'){
        await page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`
        })
    }

    await browser.close();

    return browser;
});