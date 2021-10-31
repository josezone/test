import { AxiosInstance } from "axios";
import React, { ElementType, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PublicRoutes from "../routing/publicRoute/PublicRoute";
import { api } from "../utils/api/api";
import ErrorBoundry from "../utils/errorBoundry/ErrorBoundry";
import { requestInterceptors } from "../utils/requestInterceptors/requestInterceptors";
import { responseInterceptors } from "../utils/responseInterceptors/responseInterceptors";
import "offline-js/offline";
import "offline-js/themes/offline-language-english.css";
import "offline-js/themes/offline-theme-chrome.css";

const queryClient = new QueryClient();

interface ContainerAppProps {
  loader: ElementType;
  dataModel: any;
  LoadingStyle: any;
}

export function App(props: ContainerAppProps) {
  const axios: AxiosInstance = api(props.dataModel.BASE_URL)();
  requestInterceptors(axios);
  responseInterceptors(axios);
  return (
    <ErrorBoundry
      publicUrl={
        window.location.origin + props.dataModel.pageConfig.defaultPublicPage
      }
    >
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<props.loader LoadingStyle={props.LoadingStyle} />}>
          <PublicRoutes {...props} axios={axios} queryClient={queryClient} />
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundry>
  );
}
