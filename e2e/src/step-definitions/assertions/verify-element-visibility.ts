import { Then } from '@cucumber/cucumber';
import { expect} from "@playwright/test";

Then('the {string} should contain the text {string}',
    async function(elementKey: string, expectedElementText: string) {
        const {
            screen: { page }
        } = this;

        console.log(`The ${elementKey} header should contain the text ${expectedElementText}`);

        const content = await page.textContent('[data-id=contacts]');

        expect(content).toBe(expectedElementText);
    })