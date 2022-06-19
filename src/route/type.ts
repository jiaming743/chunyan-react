import { ReactElement } from 'react';

export enum ROUTE_PATH {
  ROOT = '/',
  ALL = '*',
  WELCOME = 'welcome',
  LOGIN = 'login',
}

export type PermissionResult = true | Promise<true> | ROUTE_PATH | Promise<ROUTE_PATH>;

export interface CommonRouteItem {
  path: ROUTE_PATH;
  component?: ReactElement;
  permission?: () => PermissionResult;
  checkPermissionTip?: ReactElement;
  children?: RouteItem[];
}

export interface RedirectRouteItem {
  path: ROUTE_PATH;
  redirect: ROUTE_PATH;
}

export type RouteItem = CommonRouteItem | RedirectRouteItem;
