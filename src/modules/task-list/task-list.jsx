import "./task-list.css";
import { useEffect, useState } from "react";
import ModalComp from "../modal";
import { connect } from "react-redux";
import {getAllUsers } from "../../redux/action-creator"

function TaskListNav({ ...props }) {
  console.log(props);

  const [show, setShow] = useState({ open: false, id: undefined });

  useEffect(() => {
    props.getAllUsers();
  });
  

  return (
    <div className="task-list" >
      <ModalComp show={show.open} id={show.id} handleShow={setShow} />
      <table className="table-arrangement">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
          props.data?.tasks.map((item, i) => {
            return (
              <tr key={i} >
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td>{item?.username}</td>
                <td>{item?.email}</td>
                <td>{item?.address.city}</td>
                <td>
                  <button className="edit-button">edit</button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() =>
                      setShow({ open: true, id: item?.id })}
                  >Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
 return{
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllUsers())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskListNav);
