import React from "react";
import { Link } from "react-router-dom";
// import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import 'semantic-ui-css/semantic.css';
import "./App.css";
import DashboardNav from './modules/dashboard/dashboard';
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          ProExe
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <h1>Dashboard</h1>
      <DashboardNav/>
      </div>
    </div>
  );
}
export default App;