import React from "react";
import "./AddTodo.css";
import { useState } from "react";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";
import { useEffect } from "react";
let id = sessionStorage.getItem("id");
let toUpdateArray = [];
const AddTodo = () => {
  const [Inputs, SetInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);

  const show = () => {
    console.log("in function show");
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    console.log("in function change");
    const { name, value } = e.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    console.log(" submit button clicked");
    console.log(Inputs);
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("tiTle or Details cannot be empty");
      console.log("in if");
    } else {
      await axios
        .post("https://merntodolist-backend-pel4.onrender.com/api/v2/addTask", {
          title: Inputs.title,
          body: Inputs.body,
          id: id,
        })
        .then((response) => {
          console.log(response);
          console.log("done");
        });

      SetInputs({ title: "", body: "" });
      toast.success("Task added successfully !");

      setArray([...Array, Inputs]);
    }
  };

  const del = async (Cardid) => {
    if (id) {
      await axios
        .delete(`https://merntodolist-backend-pel4.onrender.com/api/v2/deleteTask/${Cardid}`, {
          data: { id: id },
        })
        .then((response) => {
          toast.success("task is deleted");
        });
    } else {
      toast.error("Please Sign up first");
    }

    // Array.splice(id, "1");
    // setArray([...Array]);
  };

  const dis = (value) => {
    //console.log(value);
    document.getElementById("todo-update").style.display = value;
  };

  //console.log(Array);

  const update = (value) => {
    toUpdateArray = Array[value];
  };
  useEffect(() => {
    if (id) {
      const fetch = async () => {
        await axios
          .get(`https://merntodolist-backend-pel4.onrender.com/api/v2/getTask/${id}`)
          .then((response) => {
            setArray(response.data.list);
          });
      };
      fetch();
    } else {
      toast.error("Please Sign up first");
    }

    //return () => {};
  }, [submit]);

  return (
    <>
      <div className="addtodo">
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
          <div className="d-flex flex-column todo-inputs-div w-50 p-2">
          <input
            type="text"
            name="title"
            value={Inputs.title}
            placeholder="title of your todo"
            className=" my-3 p-2 mx-2"
            onClick={show}
            onChange={change}
          />

          <textarea
            id="textarea"
            type="text"
            name="body"
            value={Inputs.details}
            placeholder="details of your todo"
            className=" p-2 mx-2"
            onChange={change}
          />



          
          </div>
        </div>
        <div className="w-50 d-flex justify-content-end">
        <button className="btn-addtodo px-3 py-1" onClick={submit}>
            Add ToDo
          </button>
        </div>
      </div>

      <div className="todo-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              {Array &&
                Array.map((item, index) => (
                  <div className="col my-2" key={index}>
                    <>
                      <TodoCards
                        title={item.title}
                        body={item.body}
                        id={item._id}
                        delid={del}
                        display={dis}
                        updateId={index}
                        toBeUpdate={update}
                      />
                    </>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="todo-update" id="todo-update">
        <div className="container update">
          <Update display={dis} update={toUpdateArray} />
        </div>
      </div>
    </>
  );
};

export default AddTodo;
