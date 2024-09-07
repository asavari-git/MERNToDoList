import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutUs/AboutUs";
import SignUp from "./components/signUp/SignUp";
import Login from "./components/signUp/Login";
import Logout from "./components/signUp/Logout";
import AddTodo from "./components/addTodo/AddTodo";
import {useDispatch} from "react-redux";
import {authActions} from "./store";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const id=sessionStorage.getItem("id");
    if(id){
      dispatch(authActions.login());
    }
    
  }, [])
  
  return <div>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/todo" element={<AddTodo />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login" element={<Logout />} />
      </Routes>
    </Router>


    
   
    <Footer/>
    </div>;
    
}

export default App;
