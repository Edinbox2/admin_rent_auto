import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/signIn/index";
import Dashboard from "./components/admin/dashboard";
import PrivateRoute from './components/authRoutes/privateRoute';
import PublicRoute from './components/authRoutes/publicRoute';

const Routes = (props) => {
  return (
    <div>
      <Switch>
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
        <PublicRoute {...props} path="/sign_in" restricted={true} exact component={SignIn} />
      </Switch>
    </div>
  );
};

export default Routes;
