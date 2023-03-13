import playwright, { BrowserContextOptions, Page, Browser, BrowserContext, BrowserType } from 'playwright';
import { World, IWorldOptions, setWorldConstructor  } from '@cucumber/cucumber';
import { env } from "../../env/parseEnv";
import type { GlobalConfig, GLobalVariables } from "../../env/global";

export type Screen = {
    browser: Browser;
    context: BrowserContext;
    page: Page;
}

export class ScenarioWorld extends World {
    public screen!: Screen;
    public globalConfig: GlobalConfig;
    public globalVariables: GLobalVariables

    constructor(options: IWorldOptions) {
        super(options);

        this.globalConfig = options.parameters as GlobalConfig;
        this.globalVariables = { currentScreen: ""};
    }

    public async init(contextOptions?: BrowserContextOptions): Promise<Screen> {
        await this.screen?.page?.close();
        await this.screen?.context?.close();
        await this.screen?.browser.close();

        const browser = await this.newBrowser();
        const context = await browser.newContext(contextOptions);
        const page = await context.newPage();

        this.screen = { browser, context, page };

        return this.screen;
    }

    private async newBrowser(): Promise<Browser> {
        const automationBrowsers = ['chromium', 'firefox', 'webkit'];
        type AutomationBrowser = typeof automationBrowsers[number];
        const automationBrowser = env('UI_AUTOMATION_BROWSER') as AutomationBrowser

        const browserType: BrowserType = playwright[automationBrowser];
        const browser: Browser = await browserType.launch({
            headless: process.env.HEADLESS !== 'false',
            args: ['--disable-web-security', '--disable-features=IsolateOrigins, site-per-process'] //We disable a lot of security that Google has introduced, it frees up momory and speeds up our tests a bit
        })

        return browser;
    }
}

setWorldConstructor(ScenarioWorld);