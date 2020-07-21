import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useUserState from './redux/useUserState';

const PublicRoute = ({component: Component, restricted, ...rest}: any) => {
    const {isLoggedIn} = useUserState();

    return (
        <Route {...rest} render={props => (
            isLoggedIn && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;