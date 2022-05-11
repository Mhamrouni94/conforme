import React, { useState } from "react";
import { useDispatch } from "react-redux";

import validate from "../Register/validateInfo";
import useForm from "../Register/useForm";
import "./Log.css";

import { login } from "../../redux/Action/AuthAction";

const FormLogin = ({ submitForm }) => {
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ Email, Password }));
  };

  return (
    <div className="form-content-right">
      <form onSubmit={handleLogin} className="form" >
        <h1>Login</h1>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Login
        </button>
        <span className="form-input-login">
          You do not have an account? SignUp <a href="#">here</a>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;
