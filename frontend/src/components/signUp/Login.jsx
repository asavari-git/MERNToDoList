//import React from "react";
import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {authActions} from "../../store";

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Inputs, SetInputs] = useState({
        email: "",
        
        password: ""
      });
      const change = (e) => {
        const { name, value } = e.target;
        SetInputs({ ...Inputs, [name]: value });
      };
    
     const submit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("https://merntodolist-backend-pel4.onrender.com/api/v1/login", Inputs);

        // Safely access the _id
        if (response.data && response.data.others && response.data.others._id) {
            sessionStorage.setItem("id", response.data.others._id);
            dispatch(authActions.login());
            history('/todo');
        } else {
            console.error("Invalid response structure:", response.data);
            // Handle the case where _id is missing, e.g., show an error message to the user
        }
    } catch (error) {
        console.error("Login failed:", error);
        // Handle the error, e.g., show an error message to the user
    }
};

  return (
    <div>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-flex justify-content-center align-items-center ">
              <div className="d-flex justify-content-center align-items-center">
                <input
                  className="email my-3"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={Inputs.email}
                  onChange={change}
                />

                <input
                  className="password my-3"
                  type="password"
                  name="password"
                  placeholder="password"
                  value={Inputs.password}
                  onChange={change}
                />

                <button className="btn-login" onClick={submit}>
                  Login
                </button>
              </div>
            </div>
            {/* <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <h1>Sign <br/>Up</h1>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
