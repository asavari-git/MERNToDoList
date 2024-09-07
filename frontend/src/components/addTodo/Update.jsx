import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Update = ({ display, update }) => {
  useEffect(() => {
    SetInputs({
      title:update.title,
      body:update.body
    })
  }, [update]);
  
  const [Inputs, SetInputs]= useState({title:"", body:""});
const change = (e) =>{
  const {name, value} = e.target;
  SetInputs({...Inputs, [name]:value});
}
const submit = async()=>{
  await axios
  .put(`https://merntodolist-backend-pel4.onrender.com/api/v2/updateTask/${update._id}`,Inputs)
  .then((response)=>{
    //console.log(Inputs);
    toast.success(response.data.message);
  })
 
  display=("none");
}
  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h3>Update task</h3>
      <input
        type="text"
        name="title"
        className="todo-inputs my-4 w-100 p-3"
        value={Inputs.title}
        onChange={change}
      />
      <textarea
        className="todo-inputs w-100 p-3"
        name="body"
        value={Inputs.body}
        onChange={change}
      ></textarea>
      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          UPDATE</button>
        <button
          className="btn btn-danger my-4 mx-3"
          onClick={()=>display("none")}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Update;
