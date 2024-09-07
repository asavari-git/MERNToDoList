//import React from "react";
import "./signUp.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const history = useNavigate();
  const [Inputs, SetInputs] = useState({
    email: "",
    username: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("https://merntodolist-backend-pel4.onrender.com/api/v1/register", Inputs)
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        SetInputs({
          email: "",
          username: "",
          password: "",
        });
        history('/login');
      });
    //console.log(Inputs);
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 d-flex justify-content-center align-items-center ">
            <div className="d-flex justify-content-center align-items-center">
              <input
                className="email my-3"
                type="email"
                name="email"
                placeholder="email"
                onChange={change}
                value={Inputs.email}
              />
              <input
                className="username my-3"
                type="username"
                name="username"
                placeholder="username"
                onChange={change}
                value={Inputs.username}
              />
              <input
                className="password my-3"
                type="password"
                name="password"
                placeholder="password"
                onChange={change}
                value={Inputs.password}
              />

              <button className="btn-signup" onClick={submit}>
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
