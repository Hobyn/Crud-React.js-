import React from "react";
import Login from "../Pages/Login/index";
import Cadastro from "../Pages/Cadastro/index";
import "../../src/styles/bootstrap.min.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EmployeeForm } from "../components/EmployeeForm/EmployeeForm";
import { EmployeeList } from "../components/EmployeeList/EmproyeeList";
import { EmployeeView } from "../components/EmployeeView/EmployeeView";

const Routering = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/home" element={<EmployeeList />} />
        <Route path="/create-employee" element={<EmployeeForm />} />
        <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        <Route path="/view/:id" element={<EmployeeView />} />
      </Routes>
    </Router>
  );
};

export default Routering;
