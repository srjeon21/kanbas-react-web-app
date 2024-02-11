import ModuleList from "./List";
import "./index.css"
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";

function Modules() {
  return (
    <div>
      <div className="buttons">
      <button className="btn btn-secondary">Collapse All</button>
        <button className="btn btn-secondary">View Progress</button>
        <button className="btn btn-secondary"><span className="text-success"><FaCheckCircle/></span> Publish All</button>
        <button className="btn btn-danger">+ Module</button>
        <button className="btn btn-secondary"><FaEllipsisV/> </button>
      </div><hr/>
      <ModuleList />
    </div>
  );
}
export default Modules;