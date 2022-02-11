import "./create-task.css"
import DashboardContainer from '../dashboardContainer';
import AddUserForm from './task-form';
function CreateTask() {
  return (
    <DashboardContainer title='Form' >
      <AddUserForm />
    </DashboardContainer>
  );
}

export default CreateTask;
