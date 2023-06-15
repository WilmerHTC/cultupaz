import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, ButtonGroup } from "react-bootstrap";
import "../../../assets/css/FloatingButton.css";
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";

const FloatingButton = () => {
 
  return (
    // <div className="floating-button">
    //   <>
    //     <button className="floating-button-icon">
    //       <AiOutlinePlus />
    //     </button>
    //   </>

        <div >

            <TaskForm />
    
        </div>
    // </div>
  );
};

export default FloatingButton;
