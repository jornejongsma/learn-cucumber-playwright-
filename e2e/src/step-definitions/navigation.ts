import { Given} from "@cucumber/cucumber";
import {PageId} from "../env/global";
import { navigateToPage} from "../support/navigation-behavior";

Given('I am on the {string} page',
    async function (pageId: PageId) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`I am on the ${pageId} page`)

        // await page.goto('http://localhost:3000/')
        await navigateToPage(page, pageId, globalConfig)
    })