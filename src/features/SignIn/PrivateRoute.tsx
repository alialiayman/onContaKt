import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useUserState from './redux/useUserState';


const PrivateRoute = ({ component: Component, ...rest }: any) => {
    const { isLoggedIn } = useUserState();

    return (

        <Route {...rest} render={props => (
            isLoggedIn ?
                <Component {...props} />
                : <Redirect to="/sign-in" />
        )} />
    );
};

export default PrivateRoute;