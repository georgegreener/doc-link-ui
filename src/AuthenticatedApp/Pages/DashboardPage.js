import React, { useContext, useState } from "react";
import Table from "../../Components/Table";
import Modal from "../../Components/Modal";
import Button from "../../Components/Button";
import { ResponsiveContext } from "../../Context/ResponsiveContext";

const DashboardPage = props => {
  const value = useContext(ResponsiveContext);
  const [isModalOpen, changeModalState] = useState(false);

  const projects = props.projects.map(project => {
    return [
      <div
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => props.selectProject(project, "/project")}
      >
        <strong>{project.name}</strong>
      </div>,
      project.documents.length,
      project.contributors.join(", "),
      <div
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => props.selectProject(project, "/upload")}
      >
        <i class="material-icons">edit</i>
      </div>
    ];
  });

  return (
    <React.Fragment>
      {isModalOpen ? (
        <Modal
          page="Dashboard"
          exitModal={changeModalState}
          addNewProject={props.addNewProject}
        />
      ) : null}
      <Button onClick={changeModalState} value={value}>
        New Project
      </Button>
      <Table
        value={value}
        page="Dashboard"
        columns={["Projects", "No. of Documents", "Contributors", "Edit"]}
        rows={projects}
      />
    </React.Fragment>
  );
};

export default DashboardPage;
