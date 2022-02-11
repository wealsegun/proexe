import { connect } from "react-redux"
import TaskListNav from "../../modules/task-list/task-list";
import { getAllUsers, taskDeleted} from "../action-creator/index"

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, {getAllUsers, taskDeleted})(TaskListNav);