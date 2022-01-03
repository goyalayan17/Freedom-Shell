import { INavigationItemProps } from "./INavigationItemProps";

export interface IShellNavigationItemProps extends INavigationItemProps {
    subItems?: IShellNavigationItemProps[];
    postClick?: (navItem: IShellNavigationItemProps) => void;
};