import TaskListNav from '../task-list/task-list';
// import "bootstrap/dist/css/bootstrap.min.css";

function DashboardNav() {


    return (
        <div  >
            <h1>Dashbaord</h1>
            <div>
                <div>User List</div>.
                <div>
                    <button value={"Add new"}/>
                </div>
            </div>
            <div>
            <TaskListNav/>
            </div>

        </div>
    )
}

export default DashboardNav;