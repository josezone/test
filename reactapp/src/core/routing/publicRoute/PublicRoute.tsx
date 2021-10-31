import AuthGaurd from "../authGaurd/AuthGaurd";
import { AxiosInstance } from "axios";
import React, { lazy, ReactElement } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

/* eslint-disable-next-line */
export interface RoutingPublicRoutesProps {
  axios: AxiosInstance;
  queryClient: any;
  dataModel: any;
}

export function RoutingPublicRoutesMain(props: RoutingPublicRoutesProps) {
  return (
    <>
      <Switch>
        {props.dataModel.pageConfig.publicPage.map(
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
        <AuthGaurd {...props} />
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
    </>
  );
}

export function RoutingPublicRoutes(props: RoutingPublicRoutesProps) {
  return (
    <Router>
      <RoutingPublicRoutesMain {...props} />
    </Router>
  );
}

export default RoutingPublicRoutes;
