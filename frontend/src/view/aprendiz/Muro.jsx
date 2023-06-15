import React from "react";
import { Route, Routes } from "react-router-dom";
import FloatingButton from './murin-1/FloatingButton';
import { TaskContextProvider } from "./murin-1/TaskProvider";
import TasksPage from "./murin-1/TasksPage.jsx";
import TaskForm from "./murin-1/TaskForm.jsx";
import NotFound from "./murin-1/NotFound.jsx";

function MuroAprendiz() {
  return (
    <div>
      <TaskContextProvider>
        <Routes>
          <Route path="/new" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} /> 
          <Route path="/" element={<TasksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingButton />
        {/* <TasksPage></TasksPage> */}
      </TaskContextProvider>
    </div>
  );
}

export default MuroAprendiz;
