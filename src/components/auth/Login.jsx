import React from "react";
import { Link } from "react-router-dom";

const Login = ({ handleSubmit, handleInputFormLogin, handleTooglePassword, togglePassword, formInfo, alert }) => {

  return (
    <div className="form-user">
      {alert ? <div className={`alert ${alert.category}`}>{alert.msg}</div> : null}
      <div className="content-form shadow-dark">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className="field-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formInfo.email}
              onChange={handleInputFormLogin}
            />
          </div>
          <div className="field-form toggle-password">
            <label htmlFor="password"> Password </label>
            <input
              type={togglePassword === true ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Your password"
              value={formInfo.password}
              onChange={handleInputFormLogin}
            />
            <span onClick={handleTooglePassword}>
              {togglePassword === true ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                  <i className="fas fa-eye"></i>
                )}
            </span>
          </div>
          <div className="field-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign In"
            />
          </div>
        </form>
        <Link to={"/new-account"} className="link-account">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
