import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import NewAccount from "../../components/auth/NewAccount";
import { showAlert, hideAlert } from "../../redux/actions/alerts/actions";
import { showValidation, hideValidation } from "../../redux/actions/validations/actions";
import { registerUser } from '../../redux/actions/authentication/actions';

function NewAccountContainer(props) {

    /**
     * Local State new Account
     */
    const [newAccount, setNewAccount] = useState({
        name: '',
        email: '',
        password: '',
        confirmedPassword: ''
    });

    /**
     * Local state TogglePassword
     */
    const [togglePassword, setTogglePassword] = useState(false);

    /**
     * Use Effect
     * @param {*} e 
     */
    useEffect(() => {

        if (props.message) {
            props.showAlert(props.message.msg, props.message.category);
        }

    }, [props.message]);

    /**
     * Handle event onChange input
     * @param {*} e 
     */
    const handleInputFormLogin = (e) => {

        if (e.target.name === "password" || e.target.name === "confirmedPassword") {
            if (e.target.value.length <= 6) {
                props.showValidation('the password must be at least 6 characters');
            } else {
                props.hideValidation();
            }
        }

        setNewAccount({
            ...newAccount,
            [e.target.name]: e.target.value
        });
    }

    /**
     * Handle event click toogle password
     */
    const handleTogglePassword = () => {
        let status = togglePassword === false ? true : false;
        setTogglePassword(status);
    };

    /**
     * Handle Submit form
     * @method validateForm
     * @param {*} e 
     */
    const handleSubmit = e => {
        e.preventDefault();

        setTimeout(() => {
            props.hideAlert();
        }, 4000);

        //validate
        const status = validateForm(newAccount);

        if (status != false) {
            const { name, email, password } = newAccount;
            props.registerUser({ name, email, password });
        }

    };

    /**
     * Validate Form
     * @param {*} data 
     */
    const validateForm = data => {

        const { name, email, password, confirmedPassword } = data;

        if (name.trim() === "" || email.trim() === "" || password.trim() === "" || confirmedPassword.trim() === "") {
            props.showAlert("All fields are required", "alert-error");
            return false;
        }

        if (password !== confirmedPassword) {
            props.showAlert("Passwords do not match", "alert-error");
            return false;
        }

    };

    return (
        <NewAccount
            handleInputFormLogin={handleInputFormLogin}
            handleTogglePassword={handleTogglePassword}
            handleSubmit={handleSubmit}
            alert={props.alert}
            validation={props.validation}
            togglePassword={togglePassword}
        />
    );
}

const mapStateToProps = (state) => {

    const { alert } = state.AlertsReducer;
    const { validation } = state.ValidationsReducer;
    const { message, auth } = state.AuthReducer;

    return {
        alert,
        validation,
        message,
        auth
    };
}
const mapDispatchToProps = {
    showAlert,
    hideAlert,
    showValidation,
    hideValidation,
    registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountContainer);
