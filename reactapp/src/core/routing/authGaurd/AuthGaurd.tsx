import React, { ReactElement } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RoutingPrivateRoutes } from "../privateRoute/PrivateRoutes"
import { AxiosInstance } from 'axios';

/* eslint-disable-next-line */
export interface RoutingAuthGaurdProps {
  dataModel: any;
  axios: AxiosInstance;
  queryClient: any;
}

export function RoutingAuthGaurd(props: RoutingAuthGaurdProps) {
  return (
    <Route
      render={(): ReactElement => {
        if (localStorage.getItem(props.dataModel.jwtName)) {
          return (
            <RoutingPrivateRoutes {...props} />
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: props.dataModel.pageConfig.defaultPublicPage,
              }}
            />
          );
        }
      }}
    />
  );
}

export default RoutingAuthGaurd;
