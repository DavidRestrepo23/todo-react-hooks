import React from "react";
import { Link } from "react-router-dom";

const NewAccount = ({handleInputFormLogin, handleTooglePassword, togglePassword, handleSubmit }) => {
  return (
    <div className="form-user">
      <div className="content-form shadow-dark">
        <h1>Sign up</h1>
        <form
            onSubmit={handleSubmit}
        >
          <div className="field-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              onChange={handleInputFormLogin}
            />
          </div>
          <div className="field-form">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
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
          <div className="field-form toggle-password">
            <label htmlFor="confirmed-password"> Confirm Password </label>
            <input
              type={togglePassword === true ? "text" : "password"}
              id="confirmed-password"
              name="confirmedPassword"
              placeholder="Repeat password"
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
              value="Sign Up"
            />
          </div>
        </form>
        <Link to={"/"} className="link-account">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
