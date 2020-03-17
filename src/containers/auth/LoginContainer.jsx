import React, { useState } from "react";
import Login from "../../components/auth/Login";

function LoginContainer() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [togglePassword, setTogglePassword] = useState(false);

  const handleInputFormLogin = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
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
      togglePassword={togglePassword}
    />
  );
}

export default LoginContainer;
