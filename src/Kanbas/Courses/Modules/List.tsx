import React, { useState, useEffect } from "react";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState<any>(moduleList[0]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <>
    <div>
      <div className="buttons">
      <button className="btn btn-secondary">Collapse All</button>
        <button className="btn btn-secondary">View Progress</button>
        <button className="btn btn-secondary"><span className="text-success"><FaCheckCircle/></span> Publish All</button>
        <button className="btn btn-danger">+ Module</button>
        <button className="btn btn-secondary"><FaEllipsisV/> </button>
      </div><hr/>
      <ul className="list-group wd-modules">
      <li className="list-group-item">
        <div className="form-group">
          <div className="buttons">
            <button className="btn btn-success" onClick={handleAddModule}>
              Add
            </button>
            <button className="btn btn-warning" onClick={handleUpdateModule}>
              Update
            </button>
          </div>
          <input className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }/>
          <textarea className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
        </div>
      </li>
        {moduleList
        .filter((module:any) => module.course === courseId)
        .map((module:any, index) => (
          <li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>
            <div>
              <div className="buttons">
                <button className="btn btn-warning" onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                  <button className="btn btn-danger" onClick={() => handleDeleteModule(module._id)}>
                  Delete
                </button><br/>
              </div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule?._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: { name: string }) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
                )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
export default ModuleList;