import React from "react";
import { IShellNavigationItemProps } from "./IShellNavigationItemProps";

export interface IShellConfigEntry extends IShellNavigationItemProps {
    component?:() => React.ReactElement | JSX.Element | string;
    subItems?: IShellConfigEntry[];
}