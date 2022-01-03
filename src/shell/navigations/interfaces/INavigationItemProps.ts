export interface INavigationItemProps {
    id?: string;
    iconName?: string;
    menuItemName: string;
    menuItemComponent: React.ReactElement | JSX.Element;
    urlName?: string;
    externalURL?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>)=> void;
    depth?: number;
};