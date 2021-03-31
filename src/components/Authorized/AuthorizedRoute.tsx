import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import Authorized from './Authorized';

interface AuthorizedRouteProperties {
  redirectPath: string;
  path: string;
  component: React.ComponentClass;
  render?: (properties: RouteComponentProps) => React.ReactNode;
}

const AuthorizedRoute: React.FC<AuthorizedRouteProperties> = ({
  component: Component,
  redirectPath = '404',
  render,
  ...rest
}) => (
  <Authorized
    noMatch={<Route render={() => <Redirect to={{ pathname: redirectPath }} />} {...rest} />}
  >
    <Route
      render={(properties: RouteComponentProps) =>
        render ? render(properties) : <Component {...properties} />
      }
      {...rest}
    />
  </Authorized>
);

export default AuthorizedRoute;
