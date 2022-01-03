import React, { ReactFragment } from "react";
import { Route, Switch } from "react-router-dom";
import { IShellConfigEntry } from "../interfaces";

export interface IRouterConfig {
    navItems: IShellConfigEntry[];
    home: () => JSX.Element;
};

interface IRouteEntry {
    path: string;
    name: string;
    component?: () => React.ReactElement | JSX.Element | string;
};

export function RouterConfig(props: IRouterConfig): JSX.Element {
    function getRouterConfig(config: IShellConfigEntry[], entries: IRouteEntry[] = []) {
        config.forEach(item => {
            if (item.component) {
                entries.push({
                    path: `/${item.urlName}`,
                    name: item.menuItemName.replace(' ', ''),
                    component: item.component
                })
            } else if (item.subItems) {
                getRouterConfig(item.subItems, entries);
            }
        });
        return entries;
    }

    const routes: IRouteEntry[] = getRouterConfig(props.navItems);

    return (
        <Switch>
            {routes.map(route => {
                return (
                    <Route key={`freedom_shell_route_${route.name}`} path={route.path}>
                        {route.component}
                    </Route>
                )
            })}
            <Route key={`freedom_shell_route_home`} path={'/'}>{props.home}</Route>
        </Switch>
    );
};