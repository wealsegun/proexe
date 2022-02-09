import TaskForm from './task-form';
import "./create-task.css"
function CreateTask() {
  return (
    <div>
      <h1 className="dashboard">Dashbaord</h1>
      <div className="list-container" >
        <div className="align-center">
          <h3>Form</h3>
        </div>
        <div className="task-list">
          <TaskForm />
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
