import { Spin } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE_CONFIG } from './config';
import { isRedirectRoute } from './utils';
import type { CommonRouteItem, PermissionResult, RouteItem } from './type';

const CheckPermissionSpinContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function renderRoute(route: RouteItem) {
  if (isRedirectRoute(route)) {
    return <Route path={route.path} key={route.path} element={<Navigate to={route.redirect} />} />;
  }

  return (
    <Route
      path={route.path}
      key={route.path}
      element={route.component ? <RouteWithPermission route={route} /> : undefined}
    >
      {route.children?.map(renderRoute)}
    </Route>
  );
}

const RouteWithPermission: React.FC<{ route: CommonRouteItem }> = ({
  route: { component, permission, checkPermissionTip },
}) => {
  const [hasPermission, setHasPermission] = useState<PermissionResult>();

  const checkPermission = useCallback(async () => {
    if (!permission) return;

    const result = await permission();

    setHasPermission(result);
  }, [permission]);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  if (!permission || hasPermission === true) {
    return component ?? null;
  }

  if (typeof hasPermission === 'string') {
    return <Navigate to={hasPermission} />;
  }

  return (
    <CheckPermissionSpinContainer>
      <Spin size="large" tip={checkPermissionTip} />
    </CheckPermissionSpinContainer>
  );
};

export const AppRoute: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>{ROUTE_CONFIG.map(renderRoute)}</Routes>
    </BrowserRouter>
  );
};
