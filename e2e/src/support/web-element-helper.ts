import { Page } from 'playwright';
import type { ElementKey, ELementLocator, GlobalConfig, GLobalVariables } from "../env/global";

export function getElementLocator(
    page: Page,
    elementKey: ElementKey,
    globalVariables: GLobalVariables,
    globalConfig: GlobalConfig
): ELementLocator {
    const { pageElementMappings } = globalConfig;
    const currentPage = globalVariables.currentScreen;

    return pageElementMappings[currentPage]?.[elementKey] || pageElementMappings.common?.[elementKey]
}