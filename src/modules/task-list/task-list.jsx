import "./task-list.css";
import { useState } from "react";
import ModalComp from "../modal";

function TaskListNav({ ...props }) {
  console.log(props);

  const [show, setShow] = useState({ open: false, id: undefined })

  return (
    <div className="task-list" >
      <ModalComp show={show.open} handleShow={setShow} />
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
          TaskListNav?.data?.map((item, i) => {
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
                      setShow({ open: true, id: i })}
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
export default TaskListNav;
