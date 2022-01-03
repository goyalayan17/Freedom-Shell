import { IShellConfigEntry } from "./IShellConfigEntry";

export interface IShellConfig {
    basename: string;
    topNavItems: IShellConfigEntry[];
    bottomNavItems: IShellConfigEntry[];
    applicationHeaderItem: IShellConfigEntry;
};