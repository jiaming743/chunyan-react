import React from 'react';
import { WelcomeLayout } from '@/layout/Welcome';
import { RouteItem, ROUTE_PATH } from './type';

export const ROUTE_CONFIG: RouteItem[] = [
  {
    path: ROUTE_PATH.ROOT,
    children: [
      {
        path: ROUTE_PATH.WELCOME,
        component: <WelcomeLayout />,
      },
      {
        path: ROUTE_PATH.ROOT,
        redirect: ROUTE_PATH.WELCOME,
      },
    ],
  },
  {
    path: ROUTE_PATH.ALL,
    redirect: ROUTE_PATH.ROOT,
  },
];
