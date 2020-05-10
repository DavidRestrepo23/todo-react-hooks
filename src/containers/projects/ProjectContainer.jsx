import React, { useEffect, useState } from "react";
import Projects from '../../components/projects/Projects';
import { connect } from 'react-redux';
import { getUserAuthenticated, logout } from '../../redux/actions/authentication/actions';

const ProjectContainer = (props) => {

    const { user } = props.AuthReducer;

    useEffect(() => {
        props.getUserAuthenticated();
    }, []);

    const logout = () => {
        props.logout();
    }

    return (
        <Projects user={user} logout={logout} />
    );
}

const mapStateToProps = state => {

    const { AuthReducer } = state;

    return {
        AuthReducer
    };
}

const mapDispatchToProps = {
    getUserAuthenticated,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);