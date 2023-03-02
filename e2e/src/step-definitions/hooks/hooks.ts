import { Before, BeforeAll, After, AfterAll} from "@cucumber/cucumber";
import { chromium } from "playwright";

BeforeAll( async () => {
    global.browser = await chromium.launch({
        headless: false
    })
});

AfterAll( async () => {
    await global.browser.close()
})

Before( async  (scenario) => {
    // global.context = await global.browser.newContext(); // This was just used as a starting point.

    global.context = await global.browser.newContext({
            recordVideo: {
                dir : `./reports/videos/${scenario.pickle.name}` //The pickle attribute on a scenario holds the actual information about the test, so steps and such.
            }
        });

    global.page = await global.context.newPage();
});

After( async (scenario) => {
    const scenarioStatus = scenario.result?.status;
    if(scenarioStatus === 'FAILED'){
        await global.page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`
        })
    }

    await global.page.close();
});