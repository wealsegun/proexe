import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashboardNav from "./modules/dashboard/dashboard";
import CreateTask from "./modules/create-task/create-task";
import { connect } from 'react-redux'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto"></div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route
            path="/" index
            element={<DashboardNav />}
          />
          
          <Route path="/create-task" element={<CreateTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default connect()(App);
