// import { Component } from "react";
// import { connect } from "react-redux";
// import {getAllUsers, taskDeleted} from "../../redux/actions/task";

// class TaskListNav extends Component {
//     constructor(props) {
//         // super(props);
//         // this.state 
//     }

//     componentDidCatch() {
//         this.props.getAllUsers();
//     }

//     removeTaskById(id) {
//         this.props.taskDeleted(id).then((response )=> {
//             console.log(response);
//         }).catch((e) => {
//             console.log(e);
//         })
//     }

//     render() {
//         const {tasks} = this.props;
//         return (
//             tasks
//             );
//     }


//     mapStateToProps = (state) => {
//         return {
//             tasks: state.tasks,
//         };
//     }
// }
// export default connect(mapStateToProps, {getAllUsers, taskDeleted})