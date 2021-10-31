import React, { lazy, ReactElement } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { AxiosInstance } from "axios";

/* eslint-disable-next-line */
export interface RoutingPrivateRoutesProps {
  dataModel: any;
  axios: AxiosInstance;
  queryClient: any;
}

export function RoutingPrivateRoutes(props: RoutingPrivateRoutesProps) {
  return (
    <Switch>
      {props.dataModel.pageConfig.privatePage.map(
        (items: any, index: number): ReactElement => (
          <Route
            key={`publicPage${index}`}
            exact={true}
            path={items.url}
            component={() => {
              const ComponentRender = lazy(
                () => import(`../../../pages/${items.pages}`)
              );
              const ComponentRenderWithRoute = withRouter(ComponentRender);
              return (
                <ComponentRenderWithRoute
                  queryClient={props.queryClient}
                  axios={props.axios}
                />
              );
            }}
          />
        )
      )}
      <Route
        render={(): ReactElement => {
          return (
            <Redirect
              to={{
                pathname: props.dataModel.pageConfig.notFoundPage,
              }}
            />
          );
        }}
      />
    </Switch>
  );
}

export default RoutingPrivateRoutes;
