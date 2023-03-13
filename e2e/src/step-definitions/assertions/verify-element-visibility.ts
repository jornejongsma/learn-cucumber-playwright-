import { Then } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import type { ElementKey } from "../../env/global";
import {getElementLocator} from "../../support/web-element-helper";
import {ScenarioWorld} from "../setup/world";


Then('the {string} should contain the text {string}',
    async function(this: ScenarioWorld, elementKey: ElementKey, expectedElementText: string) {
        const {
            screen: { page },
            globalVariables,
            globalConfig
        } = this;

        console.log(`The ${elementKey} header should contain the text ${expectedElementText}`);

        // const content = await page.textContent('[data-id=contacts]');
        const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig);
        const content = await page.textContent(elementIdentifier)

        await expect(content).toBe(expectedElementText);
    })

Then('the {string} should be displayed',
    async function(this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { page },
            globalVariables,
            globalConfig
        } = this;

        console.log(`the ${elementKey} should be displayed`);

        // const locator = page.locator('a[class="testing-talks-logo"]')
        const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig);
        const locator = page.locator(elementIdentifier)

        await expect(locator).toBeVisible();
    })