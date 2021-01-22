import React from 'react';
import { RouteProps, Route as ReactRouteDom, Redirect } from 'react-router-dom';


interface RoutePropsRouterDom extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteDom: React.FC<RoutePropsRouterDom> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {

  return (
    <ReactRouteDom
      {...rest}
      render={({ location }) => {
        return isPrivate === !!null ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default RouteDom;
