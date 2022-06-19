import { RedirectRouteItem, RouteItem } from './type';

export function isRedirectRoute(route: RouteItem): route is RedirectRouteItem {
  return Boolean((route as RedirectRouteItem).redirect);
}
