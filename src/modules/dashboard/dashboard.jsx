import TaskListNav from "../task-list/task-list";
import { Link, Route, useNavigate } from "react-router-dom";
import CreateTask from '../create-task/create-task';
// import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css"
function DashboardNav() {
    let navigate = useNavigate()
  return (
    <div>
      <h1 className="dashboard">Dashbaord</h1>
      <div className="list-container" >
        <div className="align-center">
          <h3>User List</h3>
         <button onClick={()=>{navigate('/create-task')}} className="add-new">Add new</button>
             {/* <Switch>
                 <Route>
                 <CreateTask/>                 
                 </Route>
             </Switch> */}
        </div>

        <div className="task-list">
          <TaskListNav />
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
