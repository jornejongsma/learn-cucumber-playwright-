export type PageId = string;
export type PagesConfig = Record<PageId, Record<string, string>>;
export type HostsConfig = Record<string, string>;
export type ElementKey = string;
export type ELementLocator= string;
export type PageElementMappings = Record<PageId, Record<ElementKey, ELementLocator>>;
export type GLobalVariables = { [key: string]: string};

export type GlobalConfig = {
    hostsConfig: HostsConfig;
    pagesConfig: PagesConfig;
    pageElementMappings: PageElementMappings;
}
