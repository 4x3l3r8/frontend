import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./components/pages/HomeComponent";
import Profile from "./components/pages/ProfileComponent";
import Text from "demos/HotelTravelLandingPage";
import Settings from './admin/routes/Settings'; //eslint-disable-line
import Admin from "admin";
import { ProtectedRoute, AdminRoute } from "./Guard";
// import Header from "./components/layouts/Header";

function Error() {
  let location = useLocation()
  return <h1 style={{ textAlign: 'center' }}>Resourse at {location.pathname} don't exist</h1>
}

function MainRoutes() {
  return (
    <>
      {/* <Header /> */}
      <Routes path="/*">
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Text />} />

        {/*Redirect if not authenticated -- regUser Routes*/}
        <Route exact path="/user" element={<ProtectedRoute />}>
          <Route exact path={`/user/view-profile`} element={<Profile />} />
          <Route exact path="/user" render={(props) => <Navigate to={{ pathname: `${props.match.path}/view-profile` }} />} />
        </Route>

        {/* Admin Routes */}
        {/* <Route exact path="/admin" element={<AdminRoute />}>
          <Route exact
            path="/admin"
            // element={<Admin />}
            children={[
              <Admin />
            ]}
          />
          <Route exact path="/admin" render={(props) => <Navigate to={{ pathname: `${props.match.path}/dashboard` }} />} />
        </Route> */}
        <Route path="/admin/*" element={<AdminRoute />}>
          <Route index element={<Admin />} />
        </Route>
        
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default MainRoutes;
