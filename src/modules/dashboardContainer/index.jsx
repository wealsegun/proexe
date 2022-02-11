import { useNavigate } from "react-router-dom";
import "./index.css"
function DashboardContainer({ children, ...props }) {
    let navigate = useNavigate()
    return (
        <div className="container mt-3">
            <h1 className="dashboard">Dashboard</h1>
            <div className="list-container" >
                <div className="align-center">
                    <h3>{props.title}</h3>
                    {props.button &&
                        <button
                            onClick={() => { navigate(`/${props.buttonLink}`) }}
                            className="add-new">
                            {props.button}
                        </button>}
                </div>
                {children}
            </div>
        </div>
    );
}

export default DashboardContainer;
