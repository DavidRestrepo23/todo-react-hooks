import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserAuthenticated } from '../../redux/actions/authentication/actions';

const PrivateRoute = ({ component: Component, ...props }) => {

    const { auth, loader } = props.AuthReducer;

    useEffect(() => {
        props.getUserAuthenticated();
    }, []);

    return (
        <Route {...props} render={props => !auth && !loader ?
            <Redirect to="/" /> : <Component {...props} />}
        />
    );
}

const mapStateToProps = state => {

    const { AuthReducer } = state;

    return {
        AuthReducer
    }
}

const mapDispatchToProps = {
    getUserAuthenticated
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);