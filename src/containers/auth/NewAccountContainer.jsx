import React, { useState } from "react";
import NewAccount from "../../components/auth/NewAccount";

function NewAccountContainer() {
  
    const [newAccount, setNewAccount] = useState({
        name:'',
        email: '',
        password:'',
        confirmedPassword: ''
    });

    const [togglePassword, setTogglePassword] = useState(false);

    const handleInputFormLogin = (e) => {
        setNewAccount({
            ...newAccount,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
      };

    const handleTooglePassword = () => {
        let status = togglePassword === false ? true : false;
        setTogglePassword(status);
      };

    return (
        <NewAccount 
            handleInputFormLogin={handleInputFormLogin}
            handleTooglePassword={handleTooglePassword}
            togglePassword={togglePassword}
            handleSubmit={handleSubmit}
        />
    );
}

export default NewAccountContainer;
