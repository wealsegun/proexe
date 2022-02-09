import './task-list.css';
import 'semantic-ui-css';

function TaskListNav()  {


    return (
        <div className="container">
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button class="ui yellow button">edit</button></td>
                        <td><button class="ui red button">delete</button></td>
                    </tr>                    
                </tbody>
            </table>
        </div>
    )
}
export default TaskListNav;