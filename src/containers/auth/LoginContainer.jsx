import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Login from "../../components/auth/Login";
import { showAlert, hideAlert } from "../../redux/actions/alerts/actions";
import { login } from '../../redux/actions/authentication/actions';

function LoginContainer(props) {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [togglePassword, setTogglePassword] = useState(false);

  /**
     * Use Effect
     * @param {*} e 
     */
  useEffect(() => {

    if (props.auth) {
      props.history.push('/projects');
    }

    if (props.message) {
      props.showAlert(props.message.msg, props.message.category);
    }

  }, [props.message, props.auth, props.history]);

  const handleInputFormLogin = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = user;

    setTimeout(() => {
      props.hideAlert();
    }, 4000);

    if (email.trim() === "" || password.trim() === "") {
      props.showAlert("All fields are required", "alert-error");
      return false;
    }

    props.login({ email, password });

  };

  const handleTooglePassword = () => {
    let status = togglePassword === false ? true : false;
    setTogglePassword(status);
  };

  return (
    <Login
      handleTooglePassword={handleTooglePassword}
      handleSubmit={handleSubmit}
      handleInputFormLogin={handleInputFormLogin}
      formInfo={user}
      alert={props.alert}
      togglePassword={togglePassword}
    />
  );
}

const mapStateToProps = (state) => {

  const { alert } = state.AlertsReducer;
  const { message, auth } = state.AuthReducer;

  return {
    alert,
    message,
    auth
  }

}

const mapDispatchToProps = {
  login,
  showAlert,
  hideAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
