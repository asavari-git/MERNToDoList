import React from 'react';
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

const TodoCards = ({title,body, id, delid, display, updateId,toBeUpdate}) => {
  return (
    <div className="p-3 todo-card ">
        <div>
            <h5>{title}</h5>
            <p className="todocard-p">
                {body}
            </p>
        </div>
        <div className="d-flex justify-content-around">
        <div className="d-flex justify-content-center aligh-items-center card-icon-head px-2 py-1"
        onClick={()=>{
          display("block");
          toBeUpdate(updateId);
        }}
        >
        <GrUpdate className="card-icons"/> Update
        </div>
        <div className="d-flex justify-content-center aligh-items-center card-icon-head px-2 py-1"
        onClick={()=>{
            delid(id);
        }}>
            
        <MdDelete className="card-icons del"/> Delete
        </div>
        </div>
    </div>
  )
}

export default TodoCards;