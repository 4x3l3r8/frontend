import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

export const Guard = ({ component: Component, token: Token, routeNavigate, ...rest }) =>
(
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem(Token) ? <Component {...props} /> : <Navigate to={{ pathname: routeNavigate, state: { from: props.location } }} />
    }
  />
);

export const ProtectedRoute = () => {
  const auth = localStorage.getItem('user-token'); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export const AdminRoute = () => {
  if (localStorage.getItem('user-data')) {
    const userData = JSON.parse(localStorage.getItem('user-data'));
    const isAdmin = userData.is_admin

    return isAdmin ? <Outlet /> : <Navigate to="/" />;
  } else {
    return <Navigate to="/" />;
  }
}