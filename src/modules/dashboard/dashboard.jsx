import TaskListNav from "../task-list/task-list";
import DashboardContainer from "../dashboardContainer";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllUsers } from '../../redux/action-creator'

function DashboardNav(props) {

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <DashboardContainer buttonLink='create-task' button='Add new' title='User List' >
      <TaskListNav data={props.users} />
    </DashboardContainer>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state
  }
}

export default connect(mapStateToProps, { getAllUsers })(DashboardNav);