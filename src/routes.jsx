import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from './components/signIn/index'; 

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/sign_in" component={SignIn} />
            </Switch>
        </div>
    );
};

export default Routes;