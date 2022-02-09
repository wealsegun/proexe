import "./task-list.css";
import DeleteConfirmation from "./../delete-task/delete-task";
import { useState } from "react";

function TaskListNav() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
  ]);

  const [type, setType] = useState(null);
  const [id, setId] = useState(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [taskMessage, setTaskMessage] = useState(null);

  const showDeleteModal = (type, id) => {
    setType(type);
    setId(id);
    setTaskMessage(null);

    setDeleteMessage(
      `Are you sure you want to delete the task '${
        tasks.find((x) => x.id === id).name
      }'?`
    );

    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = (type, id) => {
    setTaskMessage(
      `The task '${
        tasks.find((x) => x.id === id).name
      }' was deleted successfully.`
    );
    setDisplayConfirmationModal(false);
  };

  return (
    <div>
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
          <tr>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>
              <button className="edit-button">edit</button>
            </td>
            <td>
              <button className="delete-button">delete</button>
            </td>
          </tr>
          <tr>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>
              <button className="edit-button">edit</button>
            </td>
            <td>
              <button className="delete-button">delete</button>
            </td>
          </tr>
          <tr>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>Olawale</td>
            <td>
              <button className="edit-button">edit</button>
            </td>
            <td>
              <>
              <button className="delete-button"
               onClick={()=>
               showDeleteModal("taks", task.id)}>delete</button>
              <DeleteConfirmation
                showModal={displayConfirmationModal}
                confirmModal={submitDelete}
                hideModal={hideConfirmationModal}
                type={type}
                id={id}
                message={deleteMessage}
            />
              </>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default TaskListNav;
