import React from "react";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DashboardNav from "./modules/dashboard/dashboard";
import CreateTask from "./modules/create-task/create-task";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          ProExe
        </a>
        <div className="navbar-nav mr-auto"></div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container mt-3">
                <DashboardNav />
              </div>
            }
          />
          <Route path="/create-task" element={<CreateTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
